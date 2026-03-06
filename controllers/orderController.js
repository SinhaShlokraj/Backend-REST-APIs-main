const Order = require("../models/Order");

// GET all orders
exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

// CREATE order
exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
};