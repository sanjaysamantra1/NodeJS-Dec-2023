const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  console.log("req received");
  res.send("Users route");
});
app.get("/users/:id", (req, res) => {
  res.send("1 user");
});
app.post("/users", (req, res) => {
  res.send("User created");
});

app.listen(5000);
