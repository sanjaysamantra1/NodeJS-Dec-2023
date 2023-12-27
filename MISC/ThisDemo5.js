function f1() {
  console.log(this);
}
f1();
function f2() {
  "use strict";
  console.log(this);
}
f2();
