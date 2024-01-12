const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", function (req, res) {
  res.status(200).send("Server Running...");
});

app.get("/users/:userName", async function (req, res) {
  const userName = req.params.userName || "";
  let response = await axios.get(`https://api.github.com/users/${userName}`);
  res.json(response.data);
});

app.get("*", function (req, res) {
  res.status(404).send("No Page Available");
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
