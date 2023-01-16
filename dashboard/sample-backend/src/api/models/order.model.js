const mongoose = require("mongoose");

/**
 * Contact Schema
 * @private
 */
const OrderSchema = new mongoose.Schema(
  {
    // user: {
    //   type: String,
    //   required: true,
    //   ref: "User",
    // },
    // orderItems: [
    //   {
    //     id: {
    //       type: String,
    //       required: true,
    //     },
    //     qty: {
    //       type: Number,
    //       required: true,
    //     },
    //     // image: {
    //     //   type: String,
    //     //   required: true,
    //     // },
    //     // price: {
    //     //   type: Number,
    //     //   required: true,
    //     // },
    //     // product: {
    //     //   type: String,
    //     //   required: true,
    //     //   ref: "Product",
    //     // },
    //   },
    // ],
    items: {
      type: Array,
      required: true,
    },
    status: { type: String, required: true },
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    customer: {
      customerId: { type: String, required: true },
      fname: { type: String, required: true },
      lname: { type: String, required: true },
      email: { type: String, required: true },
      phoneNum: { type: String, required: true },
    },
    // paymentResult: {
    //   id: { type: String },
    //   status: { type: String },
    //   update_time: { type: String },
    //   email_address: { type: String },
    // },
    // taxPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // paymentMethod: {
    //   type: String,
    //   default: "",
    // },
    // isPaid: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // paidAt: {
    //   type: Date,
    // },
    // isDelivered: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // deliveredAt: {
    //   type: Date,
    // },
    // customerId: {
    //   type: String,
    //   required: true,
    // },
    // itemId: {
    //   type: Array,
    //   required: true,
    // },
    // orderStatus: {
    //   type: String,
    //   required: true,
    // },

    // itemQuantity: {
    //   type: Number,
    //   required: true,
    // },
    // total: {
    //   type: Number,
    //   required: true,
    // },
  },
  { timestamps: true }
);

/**
 * @typedef OrderList
 */

module.exports = mongoose.model("OrderList", OrderSchema);
