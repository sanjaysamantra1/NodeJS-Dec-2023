const express = require("express");
const app = express();

function errorHandler(err, req, res, next) {
  
}

app.use((req, res, next) => {
  console.log(`${req.url} - triggered at ${new Date().toLocaleTimeString()}`);
  next();
});
app.use((req, res, next) => {
  console.log("I am middleware-3");
  next();
});
app.use((req, res, next) => {
  console.log("I am middleware-2");
  next();
});
app.get("/", function (req, res) {
  res.status(200).send("This is Home Page");
});
app.get("/about", function (req, res) {
  res.status(200).send("This is About Page");
});

app.listen(5000, () => {
  console.log("server runnign in port 5000");
});
