const OrderService = require("../service/OrderService");

const createOrder = async (req, res) => {
  const order = req.body;
  const newOrder = await OrderService.createOrder(order);
  res
    .status(201)
    .json({ data: newOrder, status: "Order created Successfully" });
};

const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res
    .status(200)
    .json({ data: orders, status: "Order retrieved Successfully" });
};

module.exports = {
  createOrder,
  getOrders,
};
