let cart = [1];

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const item = {
    id: cart.length + 1,
    productId,
    quantity
  };

  cart.push(item);
  res.status(201).json(item);
};
