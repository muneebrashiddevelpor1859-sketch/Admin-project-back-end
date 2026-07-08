import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Product Routes
app.use("/api/products", productRoutes);

// User Routes
app.use("/api/users", userRoutes);

// Order Routes
app.use("/api/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});