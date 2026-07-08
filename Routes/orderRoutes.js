import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// نیا آرڈر سیو کرنے کا روٹ
router.post("/", async (req, res) => {
  try {
    const { 
      user, 
      fullName, 
      phone, 
      address, 
      city, 
      postalCode, 
      houseNo, 
      area, 
      paymentMethod, 
      paymentScreenshot, 
      items, 
      totalPrice, 
      paymentReceived 
    } = req.body;

    const newOrder = new Order({
      user,
      fullName,
      phone,
      address,
      city,
      postalCode,
      houseNo,
      area,
      paymentMethod,
      paymentScreenshot,
      items,
      totalPrice,
      paymentReceived: paymentReceived || false,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, message: "Order saved successfully", order: savedOrder });
  } catch (error) {
    console.error("MongoDB Save Error:", error);
    res.status(500).json({ success: false, message: "Failed to save order to database", error: error.message });
  }
});

// تمام آرڈرز گیٹ کرنے کا روٹ (ڈیش بورڈ کے لیے)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// اسٹیٹس اپ ڈیٹ کرنے کا روٹ (Pending سے Paid)
router.put("/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { paymentReceived: req.body.status === "Paid" }, // اسکیمہ کے مطابق paymentReceived کو اپ ڈیٹ کرنا
      { new: true }
    );
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Update Failed" });
  }
});

export default router;