const express = require("express");
const router = express.Router();
const { cpUpload } = require("../../../utils/upload");

const {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItembyID,
} = require("../../../controllers/admin/category.controller");

router.route("/categorylist").get(getItem);
router.route("/CategoryByID/:id").get(getItembyID);
router.route("/add-category").post(cpUpload, addItem);
router.route("/update-category/:id").put(cpUpload, updateItem);
router.delete("/delete-category/:id", deleteItem);

module.exports = router;
