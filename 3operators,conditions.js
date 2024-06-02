let a =5;
let b =10;

// Arithmetic 
console.log("Arithmetic")
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


// Unary 
console.log("unary")
// Post
let c=5;
c++; //It print the value 5 
console.log(c); // then it is add value.
c--;
console.log(c);
// Pre
let d=10;
++d;// It added the value 10 to 11
console.log(d) // then print value


// Assignment 
console.log("Assignment")
let e=10;
let f=2;

e += f;
console.log(e);


// Comparison
console.log("Comparison")
let a1 = 10;
let a2 = 10;
console.log(a1 === a2);
console.log(a1 != a2);

// logical 
console.log("Logical")
const cond1 = a1!=a2;
const cond2 = e<f;
console.log(cond1 || cond2)
console.log(!(a1==10))
