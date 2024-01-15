const express = require("express");
const app = express();
const cors = require('cors');

corsOption = {
    origin: 'https://www.w3schools.com'
    // allow requests from w3school
}
app.use(cors(corsOption))

app.get("/users", function (req, res) {
    res.json(['asutosh', 'vamsi', 'duryodhan'])
});

app.listen(5000, () => {
    console.log("server runnign in port 5000");
});
