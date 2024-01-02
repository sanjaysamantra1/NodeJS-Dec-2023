const fs = require('fs');

fs.rename('./contents/file_2.txt', './contents/file2.txt',function(err,data){
    console.log('Rename done')
})