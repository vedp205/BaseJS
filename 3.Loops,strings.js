// 3.loops,strings.js
console.log("Loops");

console.log("For loop");
for (let i=1;i<=5;i++) {
    console.log("ved");
}

let sum=0;
for(let j=1;j<=10;j++){
    sum+=j;
    console.log(sum); 
}

console.log("wileloops");

let j=1;
while(j<=5) {
    console.log("j=",j);
    j++;
}

console.log("Do while loop");

let d=10;
do {
    console.log("d=",d);
    d--;
} while(d>=1)

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
