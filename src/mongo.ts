import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("MongoDB connected");
  } catch (err: any) {
    console.error("MongoDB not connected", err.message);
    process.exit(1);
  }
};

export default connectDB;
