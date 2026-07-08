import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
    },

    deliveryCharges: {
      type: Number,
      default: 0,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    sizes: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);