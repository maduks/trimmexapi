const Order = require("../model/Orders");

const createOrder = async (order) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

const getOrders = async () => {
  return await Order.find();
};

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const updateOrder = async (id, order) => {
  return await Order.findByIdAndUpdate(id, order, { new: true });
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
