import express from "express";

import {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Add Product
router.post("/", addProduct);

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getSingleProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router;