const express = require("express");
const app = express();
const cors = require('cors');

app.get("/cars", function (req, res) {
    res.json(['tata', 'honda', 'toyota'])
});
app.get("/users",cors(), function (req, res) {
    res.json(['asutosh', 'vamsi', 'duryodhan'])
});

app.listen(5000, () => {
    console.log("server runnign in port 5000");
});
