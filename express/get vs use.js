const express = require("express");
const app = express();

const myMiddleware1 = (req, res, next) => {
  console.log("I am a Middleware");
  console.log(req.url, req.method);
  var name = 'sachin';
  req.name=name;
  res.name=name;
  next();
};
// app.use(myMiddleware1);
app.get("/users", (req, res) => {
    console.log("get method invoked");
    res.send("Response from get Method");
});
app.post("/users", myMiddleware1, (req, res) => {
    console.log(req.name,res.name)
  console.log("post method invoked");
  res.send("Response from post Method");
});

app.listen(5000);
