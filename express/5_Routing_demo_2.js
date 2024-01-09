const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`Server is Running`);
});

// Multiple Routing
const userRouter = express.Router();
const productRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send(`get Users Route`);
});
userRouter.get("/details", (req, res) => {
  res.send(`Users Details Route`);
});

productRouter.route("/").get((req, res) => {
  res.send(`get Products Route`);
});
productRouter.route("/details").get((req, res) => {
  res.send(`Product Details Route`);
});

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000, () => {
  console.log("server runnign in port 5000");
});
