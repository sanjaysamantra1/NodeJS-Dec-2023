const fs = require('fs');

fs.unlink('./contents/file3.txt', function(err,data){
    console.log('Deleted file3.txt')
})