const express = require("express");
const router = express.Router();
const { cpUpload } = require('../../../utils/upload')

const {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItembyID,
  getItembyName
} = require("../../../controllers/admin/product.controller");

router.route("/list").get(getItem);
router.route("/listByID/:id").get(getItembyID);
router.route("/listByName/?query=''").get(getItembyName);
router.route("/addproduct").post(cpUpload, addItem);
router.route("/update/:id").put(cpUpload, updateItem);
router.delete("/delete/:id", deleteItem);

module.exports = router;
