const path = require("path");

console.log(path.join("data", "test.txt")); // 'data/test.txt'
console.log(path.join("data", "/test.txt")); // 'data/test.txt'
console.log(path.join("data/", "test.txt")); // 'data/test.txt'
console.log(path.join("data/", "/test.txt")); // 'data/test.txt'
console.log("data/"+"/test.txt"); // 'data//test.txt'
