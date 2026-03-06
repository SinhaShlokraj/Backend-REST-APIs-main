const User = require("../models/User");

// GET users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// POST user
exports.addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};