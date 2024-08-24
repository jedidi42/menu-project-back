// src/services/authService.ts
import User from "../models/user";
import jwt from "jsonwebtoken";

class AuthService {
  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.checkPassword(password))) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}

export default new AuthService();
