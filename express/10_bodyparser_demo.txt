const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // To Collect json data from request body
app.use(bodyParser.urlencoded({extended:false})); // To Collect Form data from request body

app.post("/login", function (req, res) {
  const reqBody = JSON.stringify(req.body);
  res.send(reqBody);
});

app.listen(5000, () => {
  console.log("server runnign in port 5000");
});
