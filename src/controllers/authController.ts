// src/controllers/authController.ts
import { Request, Response } from "express";
import AuthService from "../services/authService"; // Import the AuthService class
import jwt from "jsonwebtoken"; // Import jsonwebtoken

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);
      res.status(200).json({ token });
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }

  async verifyToken(req: Request, res: Response) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "No token provided" });
      }

      const decoded = jwt.verify(token, "your_jwt_secret"); // Replace with your secret
      res.status(200).json({ decoded });
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }
}

export default new AuthController();
