const OrderService = require("../service/OrderService");

const createOrder = async (req, res) => {
  const order = req.body;
  const newOrder = await OrderService.createOrder(order);
  res.status(201).json(newOrder);
};

const getOrders = async (req, res) => {
  const orders = await OrderService.getOrders();
  res.status(200).json(orders);
};

module.exports = {
  createOrder,
  getOrders,
};
