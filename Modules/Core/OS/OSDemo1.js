const os = require('os');
console.log(os.cpus().length +' Core')
console.log(os.arch())
console.log(os.totalmem()/1024/1024/1024+' GB')
console.log(os.freemem())
console.log(os.homedir())
console.log(os.platform())
console.log(os.uptime())