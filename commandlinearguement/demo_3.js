args = process.argv.slice(2);
let obj = {};
args.forEach((arg) => {
  let KeyValueArr = arg.split("=");
  let k = KeyValueArr[0];
  let v = KeyValueArr[1];
  obj[k] = v;
});
console.log(args, obj);
