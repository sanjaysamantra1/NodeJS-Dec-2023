const express = require("express");
const app = express();

app.get("/user", function (req, res) {
  const { name, add } = req.query;
  res.json({ name: name, add: add });
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
