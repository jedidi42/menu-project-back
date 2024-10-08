// src/database/mongo.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/menu_project_nosql", {});
    console.log("MongoDB connected");
  } catch (err: any) {
    console.error("MongoDB not connected", err.message);
    process.exit(1);
  }
};

export default connectDB;
