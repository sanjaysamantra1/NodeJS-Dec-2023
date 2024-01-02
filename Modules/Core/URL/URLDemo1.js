const url = require("url");

const urlStr = "http://localhost:8080/default.htm?year=2023&month=february";
const urlObj = url.parse(urlStr,true);
console.log(urlObj);