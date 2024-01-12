const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.send(`<p>Please click 
  <a href="http://localhost:5000/download">download</a> link to download
   or <a href="http://localhost:5000/viewImage">view</a> link to view
  <p>  
  `);
});
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname, "./img1.jpg"));
});
app.get("/viewImage", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./img1.jpg"));
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
