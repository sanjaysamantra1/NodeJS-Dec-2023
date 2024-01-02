const fs = require("fs");

// Async
fs.readFile("./contents/file12.txt", function (err, data) {
    if(err){
        console.log('No FIle Found')
    }
    console.log(data)
    console.log(data?.toString())
});
console.log('End of program')

