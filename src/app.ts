import express from "express";
import userRoutes from "./routes/userRoutes";
import businessRoutes from "./routes/businessRoutes";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import "./models/associations"; // Import the associations to ensure they are executed
import menuRoutes from "./routes/menuRoutes";
import connectDB from "./mongo";
import menuNoSqlRoutes from "./routes/menuNoSqlRoutes";

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", businessRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", menuRoutes);
app.use("/api/nosql", menuNoSqlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
