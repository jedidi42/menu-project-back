import { Router, Request, Response } from "express";
import qrCodeService from "../services/qrCodeService";

const router = Router();

router.post("/generate", async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(400).json({ error: "Data is required" });
    }

    const qrCodeImage = await qrCodeService.generateQRCode(data);
    res.setHeader("Content-Type", "image/png");
    res.send(qrCodeImage);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
