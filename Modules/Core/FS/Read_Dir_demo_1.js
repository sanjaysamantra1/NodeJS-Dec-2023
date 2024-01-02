const fs = require("fs");

console.log('LIne-2')
fs.readdir("./contents", function (err, data) {
  if (err) throw err;
  console.log('LIne-6')
  console.log(data);
});
console.log('LIne-9')
let files = fs.readdirSync("./contents");
console.log(files);
console.log('LIne-12')