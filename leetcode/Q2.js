function counter(n) {
  //   let currentvalue = n;
  return function () {
    n++;
  };
}

const counter1 = counter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
