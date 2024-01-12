const express = require("express");
const app = express();
let user = {
  id: 101,
  name: "John",
  email: "john@example.com",
  add: "bangalore",
};


// app.set('jsonp callback name', 'cb');

app.get("/jsonresponse", function (req, res) {
  res.json(user);
});
app.get("/jsonpresponse", function (req, res) {
  res.jsonp(user);
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
