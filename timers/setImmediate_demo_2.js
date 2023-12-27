const fs = require("fs");

fs.readFile("./file1.txt", function (err, data) {
  setTimeout(() => {
    console.log("SetTimeout ");
  }, 0);

  setImmediate(() => {
    console.log("SetImmediate");
  });

  Promise.resolve().then(() => {
    console.log("Promise Resolved");
  });

  process.nextTick(() => {
    console.log("Next Tick");
  });
  
});
