let users = [{id: 1, name: "Amit", email: "amitprajapati@gmail.com"}];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.addUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = {
    id: users.length + 1,
    name,
    email
  };

  users.push(user);
  res.status(201).json(user);
};
