let std = {
  name: "Asutosh",
  add: "Kolkata",
};
let roll = Symbol("Roll No");
std[roll] = 111;
console.log(std);
console.log(std[roll]);

for (k in std) {
  console.log(k, std[k]);
}

console.log(Object.keys(std));
console.log(Object.getOwnPropertyNames(std));
console.log(Object.getOwnPropertySymbols(std));
