const path = require("path");

console.log(path.join()); // .
console.log(path.resolve()); // absolute path

let res1 = path.join("hello", "/path", "me");
let res2 = path.resolve("hello", "/path", "me");
console.log(res1, res2);
