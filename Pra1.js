/*console.log("Qs1. Get user to input a number using prompt(Enter a number:). Check if the number is a multiple of 5 or not.")
let numb = prompt("Enter a number");
if  (numb%5==0){
    console.log(numb,"is multiple by 5");
}
else{
    console.log(numb,"is multiple not by 5");
}*/

/*
console.log("Qs2. Write a code which can give grades to students according to their scores:")
let len =prompt("Enter the number");

if (len<=99 && len>=90){
    console.log("A")
}
else if (len<=89 && len>=80 ){
    console.log("B")
}
else if (len<=79 && len>=70){
    console.log("C");
}
else if (len<=69 && len>=60 ){
    console.log("D");
}
else if (len<=59 && len>=50){
    console.log("E")
}   
else if (len>=49 && len<=0){
    console.log("F")
}
*/

/*
console.log("Qs3. Print all even numbers from 0 to 100.");

for(let numb=0;numb<=100;numb+=2){
    if (numb%2==0){
    console.log(numb);
    }
}
*/

/*
console.log("Qs4. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.");
let game_no=20;
let user_no=prompt("Enter your number = ")

while(user_no!=game_no) {
    console.log("Enter again");
    user_no=prompt("Enter your number = ")
}
console.log("right");
*/
/*
console.log("Qs5. For a given array with marks Of students [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.");

let marks=[85, 97, 44, 37, 76, 60,90];
let sum = 0;
for(let value of marks) {
    sum+=value;
}
console.log(sum);
let average_marks= sum / marks.length;
console.log(`average ${average_marks}`);

*/
/*
console.log("Qs6. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.")

let ary=[250, 645, 300, 900, 50];

for(i=0;i<=ary.length;i++) {
    let offer=ary[1]/10;
    ary[1]-=offer;
}
console.log(ary);
*/

/*
let i=0;
for(let value of ary) {
    let offer=value/10;
    ary[i]=ary[i]-offer;
    console.log(`This is after offer ${ary[i]}`);    
    i++;
}
*/

/*
console.log("Qs7. Create a function using the function keyword that takes a String as an argument & returns the number of vowels in the string.");
const count_number = (str) =>{
    let count = 0;
    for (let i of str) {
        if ([i] == "a" ||
            [i] == "e" ||
            [i] == "i" ||
            [i] == "o" ||
            [i] == "u")
        count++;
    }
    return count;
}
let Qs7_op = count_number("helloo");
console.log(Qs7_op);
*/
/*
console.log("Qs8. For a given array Of numbers. print the square of each value using the forEach loop.")
let arry=[1, 2, 3, 4, 5];

let calsum = (val) => {
    console.log(val*val);
};
arry.forEach(calsum);
*/

/*
console.log("Qs8. We are given array of marks of students. Filter our of the marks of students that scored 90+.");

let ary_90 = [24, 36, 42, 35, 88, 99, 66, 43, 90, 12, 22, 93, 65,92];

let filter_ary90 = ary_90.filter((val, idx) => {
    return val, idx;
});
console.log(filter_ary90); 
*/

/*
console.log("Qs9. Take a number n as input from user. Create an array of numbers from 1 to n.\n Use the reduce method to calculate sum of all numbers in the array.\n Use the reduce method to calculate product of all numbers in the array.");

let a = prompt("Enter a number");
let ary = [];
for (let i = 1; i <= a; i++){
    ary[i - 1] = i;
}
console.log(ary);

let sum = ary.reduce((res, cur) => {
    return res + cur; 
    });
console.log(sum);

let factorial = ary.reduce((res1, cal2) => {
    return res1 * cal2;
});
console.log(factorial);
*/

/*
console.log(
  "Q10.You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data. "
);

let data = "data info";
class user {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewdata() {
      console.log(`data = ${data}`);
    }
}

let user_1 = new user("ved", "vedp@gmail.com");
let user_2 = new user("kayaan", "gabo@gmail.com");
*/

