const express = require("express");
const app = express();
const cors = require('cors')


app.use(cors())
app.get("/", function (req, res) {
    res.status(200).send('This is Home Page');
});
app.get("/about", function (req, res) {
    res.status(200).send('This is About Page');
});
app.get("/contactus", function (req, res) {
    res.status(200).send('This is Contact us Page');
});
app.get("*", function (req, res) {
    res.status(404).send('No Page Available');
});

app.listen(5000, () => {
    console.log("server runnign in port 5000");
});
