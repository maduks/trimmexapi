const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  name: String,
  phone: String,
  orderItem: {
    name: String,
    orderStatus: String,
    orderAmount: String,
    orderQuantity: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Order", orderSchema);
