console.log("Array");

let array =[3,5,3,23,67,87,12,90,21,55];
console.log(array);
array[2]=33;
console.log(array)


// Loops over array
console.log("Loops over array");
// For loop
let loop_array=[55,78,45,21,65,78,12,1,96,11];
for(let indx=0;indx<loop_array.length;indx++){
console.log(loop_array[indx]);
}
// for-of loop
let forof_loop=[12,15,65,78,65,98,12];
for(let i2 of forof_loop) {
    console.log(i2);
}
let forin_loop={
        st1:"a",
        st2:"b",
        st3:"c",
        st4:"d",
};
for(let i3 in forin_loop) {
    console.log(`${i3} = ${forin_loop[i3]}`);
}