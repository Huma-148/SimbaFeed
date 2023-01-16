const express = require("express");
const router = express.Router();
const auth= require("../../../middlewares/front/auth");
// import { protect } from "../middleware/authMiddleware.js";
const {
  addOrderItems,
  Orders,
  getOrderById,
  cancelOrder,
  updateOrderStatusToComplete,
  updateOrderStatusToApproved,
  updateOrderStatusToCancelled
} = require("../../../controllers/admin/order.controller");

router.post("/create-order", auth, addOrderItems);
router.get("/orderList", Orders);
router.route("/:id").get(getOrderById);
router.route("/cancel-order/:id").delete(cancelOrder);
router.route("/update-status-complete/:id").put(updateOrderStatusToComplete);
router.route("/update-status-approve/:id").put(updateOrderStatusToApproved);
router.route("/update-status-cancel/:id").put(updateOrderStatusToCancelled);

module.exports = router;
