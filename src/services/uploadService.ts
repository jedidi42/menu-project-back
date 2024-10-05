import * as admin from "firebase-admin";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";

class UploadService {
  async uploadImage(req: any) {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const bucket = admin.storage().bucket();
    const fileName = `${uuidv4()}_${req.file.originalname}`;
    const file = bucket.file(fileName);

    await file.save(req.file.buffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileName}?alt=media`;
    return publicUrl;
  }
}

export default new UploadService();
