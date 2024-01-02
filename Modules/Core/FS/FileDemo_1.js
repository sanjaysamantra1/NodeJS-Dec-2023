const fs = require("fs");

// Async
fs.readFile("./contents/file1.txt", function (err, data) {
    if(err){
        console.log(err)
    }
    console.log(data)
    console.log(data.toString())
});
console.log('End of program')

