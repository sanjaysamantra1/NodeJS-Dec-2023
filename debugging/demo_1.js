console.log("Line-1...");

function f3() {
  console.log("I am f3...");
}
function f2() {
  console.log("f2 starts...");
  f3();
  console.log("f2 ends...");
}
function f1() {
  console.log("f1 starts...");
  f2();
  console.log("f1 ends...");
}
f1();

console.log("line-18...");
