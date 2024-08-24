import express from "express";
import userRoutes from "./routes/userRoutes";
import businessRoutes from "./routes/businessRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", businessRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
