import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/users", userController.createUser);
router.get("/users/:id", userController.getUserById);
router.get("/users", userController.getAllUsers); // Add this line

export default router;
