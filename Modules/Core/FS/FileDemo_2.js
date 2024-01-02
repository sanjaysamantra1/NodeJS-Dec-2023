const fs = require("fs");

// Async
fs.readFile("./contents/file1.txt",'utf-8', function (err, data) {
    if(err){
        console.log(err)
    }
    console.log(data)
});
console.log('End of program')

