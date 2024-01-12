const express = require("express");
const app = express();

app.get("/products", function (req, res) {
  res.send("All Products");
});
app.get("/products/:id([0-9]{1,2})", function (req, res) {
  res.send(`Response for ${req.params.id} product`);
});
app.get("/courses/:courseName/:topicName", function (req, res) {
  const { courseName, topicName } = req.params;
  res.send(
    `You are looking for course:: ${courseName} , Topic :: ${topicName}`
  );
});
app.get("*", function (req, res) {
  res.send("No ROute Found");
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
