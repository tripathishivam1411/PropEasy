import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);



import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);
  });

app.listen(3000, () => {
  console.log("App is running on port 3000");
});