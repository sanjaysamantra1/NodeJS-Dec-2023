const MyMinimist = require('minimist');
console.log('Good Morning')
let args = process.argv.slice(2)
let obj = MyMinimist(args);
console.log(obj.name , obj.add);
