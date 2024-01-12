const express = require("express");
const app = express();

app.use(express.json()); // To Collect json data from request body
app.use(express.urlencoded()); // To Collect Form data from request body

app.post("/login", function (req, res) {
  const reqBody = JSON.stringify(req.body);
  res.send(reqBody);
});

app.listen(5000, () => {
  console.log("server runnign in port 5000");
});
