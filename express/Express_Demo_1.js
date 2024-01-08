const express = require("express");
const server = express();

server.get("/users", (req, res) => {
  console.log("req received");
  res.send("Users route");
});
server.get("/users/:id", (req, res) => {
  res.send("1 user");
});
server.post("/users", (req, res) => {
  res.send("User created");
});

server.listen(5000);
