import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },

        title: String,
        thumbnail: String,
        price: Number,
        quantity: Number,
      },
    ],

    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    postalCode: {
      type: String,
      required: true,
    },

    houseNo: {
      type: String,
      required: true,
    },

    area: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "JazzCash"],
      default: "COD",
    },

    paymentScreenshot: {
      type: String,
      default: "",
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    paymentReceived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);