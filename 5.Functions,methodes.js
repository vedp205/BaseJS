// 5.Functions,methodes.js

console.log("Functions");
// fun 1
console.log("Function1");
function myfun() {
  let b = 21,
    c = 4,
    d = 89;
  let a = b + c * d;
  console.log(a);
}
myfun();

// fun2
console.log("Function2");
function myfun2(msg0, msg1) {
  let sum2 = msg0 + msg1;
  return sum2;
}
let sum0 = myfun2(10, 90);
console.log(sum0);

// arrow fun
console.log("Arrow function");
const arrow = (a, b) => {
  return a * b;
};
console.log(arrow(3, 4));

// Methods

// forEach loop in array

console.log("ForEach loop in array");
let ary = [1, 2, 3, 4, 5];

ary.forEach(function metho_val(value, idx) {
  console.log(value, idx);
});
