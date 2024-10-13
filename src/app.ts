import express from "express";
import userRoutes from "./routes/userRoutes";
import businessRoutes from "./routes/businessRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import "./models/associations"; // Import the associations to ensure they are executed
import menuRoutes from "./routes/menuRoutes";
import menuNoSqlRoutes from "./routes/menuNoSqlRoutes";
import * as admin from "firebase-admin";
import uploadRoutes from "./routes/uploadRoutes";
import qrCodeRoutes from "./routes/qrCodeRoutes";
import dotenv from "dotenv";
import connectDB from "./mongo";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT as string
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
});

const bucket = admin.storage().bucket();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", businessRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", menuRoutes);
app.use("/api/nosql", menuNoSqlRoutes);
app.use("/api", uploadRoutes); // Add the upload routes
app.use("/api/qrcode", qrCodeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
