import { Router } from "express";
import multer from "multer";
import uploadService from "../services/uploadService";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = await uploadService.uploadImage(req);
    res.status(200).json({ imageUrl });
  } catch (error: any) {
    if (error.message === "No file uploaded") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

export default router;
