import mongoose from "mongoose";

import { PRODUCT_STATUS, PRODUCT_CATEGORY } from "../utils/constants.js";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    company: String,
    colors: String,
    featured: Boolean,
    freeShipping: Boolean,
    inventory: Number,
    numOfReviews: Number,
    productStatus: {
      type: String,
      enum: Object.values(PRODUCT_STATUS),
      default: PRODUCT_STATUS.NEW,
    },
    image: {
      type: String,
      default: "/uploads/example.jpeg",
    },
    category: {
      type: String,
      enum: Object.values(PRODUCT_CATEGORY),
      default: PRODUCT_CATEGORY.FASHION,
    },

    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
