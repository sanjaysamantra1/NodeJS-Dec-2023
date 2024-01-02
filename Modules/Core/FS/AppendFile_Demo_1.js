const fs = require("fs");

// Async
fs.appendFile("./contents/file2.txt",'Hiiiii \n Good Evening', function (err, data) {
    if(err){
        console.log(err)
    }
    console.log('write operation done')
});
console.log('End of program')

