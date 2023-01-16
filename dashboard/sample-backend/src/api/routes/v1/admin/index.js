const express = require("express");
const settingsRoutes = require("./settings.route");
const productRoutes = require("./products.route");
const categoryRoutes = require("./category.route");
const usersRoutes = require("./users.route");
const orderRoutes = require("./order.route");
const router = express.Router();

/**
 * GET v1/admin
 */

router.use("/settings", settingsRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/user", usersRoutes);
router.use("/order", orderRoutes);

module.exports = router;
