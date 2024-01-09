const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  console.log(req.body);
  const { method, url, body, protocol, params, ip } = req;
  console.log(method, url, body, protocol, params, ip);
  res.send(`POST Request Received on /login`);
});

app.listen(5000, () => {
  console.log("server runnign in port 5000");
});
