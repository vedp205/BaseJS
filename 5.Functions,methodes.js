// 5.Functions,methodes.js
/*
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
*/
// Methods

// forEach loop in array

console.log("For Each method")

let Array21 = [1,2,3,4,5,6]
// method 1 => 1st formula
Array21.forEach((Elemeent2) => {
  console.log(Elemeent2);
});
// method 1 => 2nd formula
const Element3 = (ar4) => {
  console.log(ar4);
}
Array21.forEach(Element3);



console.log("MAP method");

let Array22 = [7, 8, 9, 10, 11, 12, 13, 14, 15]
let new_Array22 = Array22.map((value) => {
  return value * value;
});
console.log(new_Array22);

// Filter method
console.log("fulter method");

let Array23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fil_array22 = Array23.filter((vlaue2) => {
  console.log(vlaue2 * vlaue2);
});
console.log(fil_array22);

// Reduce method
console.log("Reduce Method");
 
let add_method = [2, 3, 4, 5, 6, 7];
let output_reduce = add_method.reduce((prev, curr) => {
  return prev > curr? prev:curr;
});
console.log(output_reduce);

