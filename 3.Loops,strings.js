// ? 3.loops,strings.js
/*
// ?LOOPs

console.log("Loops");
// ?for loop
console.log("For loop");
for (let i=1;i<=5;i++) {
    console.log("ved");
}

let sum=0;
for(let j=1;j<=10;j++){
    sum+=j;
    console.log(sum); 
}
// ?whileloops
console.log("wileloops");

let j=1;
while(j<=5) {
    console.log("j=",j);
    j++;
}
// ? Do while loop
console.log("Do while loop");

let d=10;
do {
    console.log("d=",d);
    d--;
} while(d>=1)
// ? For of loops
console.log("For of loop");

let str ="ved";
for(let f of str){
    console.log(f);
}
let string = "Hello world";
let len =0;
for (let i of string){
    console.log("i=",i);
    len++;
}
console.log("string =",len);

// ? for in loop
console.log("For in loop");
let stud={
    fname :"Rahul",
    number:17,
    marks :28.5,
    ispass:true,
};
for(let key in stud){
    console.log("key=",key, stud[key]);
}
*/

// ?STRINGS
// ?template string
console.log("Strings")
let stu ={Name   : "Rahul", 
         roll_no :  60  ,
        };
console.log(`The name is ${stu.Name} and his number is ${stu.roll_no}`);

// ? String methods

// ? for Uppercase
let str_method1="this is uppercase method in string.";
let str_uppercase=str_method1.toUpperCase();
console.log(str_uppercase)
// ? O/P THIS IS UPPERCASE METHOD IN STRING.

// ? for lowercase
let str_method2="THIS IS LOWERCASE METHOD IN STRING.";
let str_lowercase=str_method2.toLowerCase();
console.log(str_lowercase);
// ? O/P this is lower method in string.

// ? Trim
let str_method3="           This is trim method";
let str_trim=str_method3.trim();
console.log(str_trim)

// ? slice
let str_method4="This is is a slice method";
