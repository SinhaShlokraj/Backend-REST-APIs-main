const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const cartRoutes = require("./routes/cartRoute");
const orderRoutes = require("./routes/orderRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running ");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});