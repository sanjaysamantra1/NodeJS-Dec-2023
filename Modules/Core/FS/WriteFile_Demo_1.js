const fs = require("fs");

// Async
fs.writeFile("./contents/file2.txt", "Hiiiii \n Good Evening", function () {
  console.log("write operation done");
});
console.log("End of program");
