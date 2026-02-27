let products = [
    {id: 1, name: "Laptop", price: 50000}];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.addProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "All fields required" });
  }

  const product = {
    id: products.length + 1,
    name,
    price
  };

  products.push(product);
  res.status(201).json(product);
};
