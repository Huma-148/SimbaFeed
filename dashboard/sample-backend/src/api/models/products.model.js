const mongoose = require("mongoose");

/**
 * Contact Schema
 * @private
 */
const ProductSchema = new mongoose.Schema(
  {
    //   id: {
    //     type: String,
    //     required: true,
    //   },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @typedef ProductList
 */

module.exports = mongoose.model("ProductList", ProductSchema);
