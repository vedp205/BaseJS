function createCounter(n) {
  let currentvalue = n;
  return function () {
    return currentvalue++;
  };
}

const counter1 = createCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(-2);
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
