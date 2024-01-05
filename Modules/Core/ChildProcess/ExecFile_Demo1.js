const cp = require("child_process");
const { ClientRequest } = require("http");

cp.execFile(__dirname+'/demo.bat', function(error,stdout,stderr){
    if(error){
        console.error(`error: ${error.message}`);
        return;
    }
    if(stderr){
        console.error(`stderr: ${error.messagestderr}`);
        return;
    }
    console.log(`stdout:: ${stdout}`)
});
