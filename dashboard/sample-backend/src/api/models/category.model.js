const mongoose = require("mongoose");

/**
 * Contact Schema
 * @private
 */
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required."],
    },
    image: {
      type: String,
      required: [true, "Image field is required."],
    },
  },
  { timestamps: true }
);

/**
 * @typedef CategoryList
 */

module.exports = mongoose.model("CategoryList", CategorySchema);
