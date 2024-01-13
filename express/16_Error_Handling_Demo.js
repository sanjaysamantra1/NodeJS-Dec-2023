const express = require("express");
const app = express();
const axios = require("axios");

function myErrorHandler(error, req, res, next) {
  console.log('error handler')
  console.log(`error ${error.message}`); // log the error
  const status = error.status || 400;
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message);
}

app.get("/users/:userName", async function (req, res, next) {
  const userName = req.params.userName || "";
  try {
    let response = await axios.get(`https://api.github.co/users/${userName}`);
    res.json(response.data);
  } catch (err) {
    next(err);
  }
});


app.use(myErrorHandler);
app.listen(5000, () => {
  console.log("server running in port 5000");
});
