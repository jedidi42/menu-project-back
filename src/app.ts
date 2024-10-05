import express from "express";
import userRoutes from "./routes/userRoutes";
import businessRoutes from "./routes/businessRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import "./models/associations"; // Import the associations to ensure they are executed
import menuRoutes from "./routes/menuRoutes";
import connectDB from "./mongo";
import menuNoSqlRoutes from "./routes/menuNoSqlRoutes";
import * as admin from "firebase-admin";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

const serviceAccount = require("../menu-app-eaeaf-firebase-adminsdk-mgzca-7792db0706.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://menu-app-eaeaf.appspot.com", // Replace with your bucket name
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
