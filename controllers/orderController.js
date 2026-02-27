let orders = [{id: 1, userId: 1, totalAmount: 50000}];

exports.getOrders = (req, res) => {
  res.json(orders);
};

exports.createOrder = (req, res) => {
  const { userId, totalAmount } = req.body;

  if (!userId || !totalAmount) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const order = {
    id: orders.length + 1,
    userId,
    totalAmount
  };

  orders.push(order);
  res.status(201).json(order);
};
