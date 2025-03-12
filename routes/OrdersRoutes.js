const express = require("express");
const router = express.Router();
const OrderController = require("../controller/OrdersController");
router.post("/create", OrderController.createOrder);
module.exports = router;
