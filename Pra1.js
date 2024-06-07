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

console.log("Qs6. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.")
let ary=[250, 645, 300, 900, 50];
/*
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