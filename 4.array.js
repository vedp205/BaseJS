console.log("Array");
/*
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
*/


// Array methods
let no=[1,2,3,4,5];

// push():
no.push(0,54,32,98,12);
console.log(no);

// pop():
no.pop();
console.log(no);

// tostring()
console.log(no.toString());

let no_0=[2,3,4,5,6,7,8]
let no_1=[1,3,4,9,6,7,2]

// concat()
let ans = no_0.concat(no_1);
ans.sort();
console.log(ans);

// shift
no_1.unshift(2);
 console.log(no_1);

// slice
let no_2=[0,1,2,3,4,5];
console.log(no_2.slice(0,3));

// Splice
 
let no_4=[24, 32, 64, 97, 1, 3];
no_4.splice(1, 3, 12, 45,43);
console.log(no_4); 
