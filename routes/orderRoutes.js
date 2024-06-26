const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

router.get("/", OrderController.getOrderPage);

module.exports = router;
