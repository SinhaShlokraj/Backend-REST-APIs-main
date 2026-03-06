const Product = require("../models/Product");

// GET products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST product
exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};