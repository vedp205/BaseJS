//  objects

/*
const stutent = {
  name: "ved",
  Cgpa: 8.4,
  marks: 93,
  mark: function () {
    console.log(`marks is ${this.marks}`);
    console.log(`CGPA is ${this.Cgpa}`);
  },
  name: function () {
    return `Name of student ${this.name}`;
  },
};
console.log(stutent.name());
console.log(stutent.mark());
 */

/*
const emp = {
  Tax() {
    console.log("Your tax is 10%");
  },
};
const rohan = {
  salary: 50000,
};
rohan.__proto__ = emp;
*/

/*
// class
class car {
  swift() {
    console.log("this is swift car");
  }
  alto() {
    console.log("this is alto car");
  }
  setbrand(cars) {
    this.cars = cars;
  }
}

let customer1 = new car();
customer1.setbrand("fortuner");
console.log(customer1);
*/

/*
// Constructor

class employee {
  constructor(name, salary, Branch) {
    this.name = `The name of Employee is ${name}`;
    this.salary = `The salary of ${name} is ${salary}`;
    this.Branch = `${name} is on ${Branch} department`;
  }
}
let emp1 = new employee("ved", 40000, "Backend");
// emp1.employee("ved", 40000, "Backend");

console.log(emp1);
*/

// Inhertance
class person {
  eat() {
    console.log("Person Eat");
  }
  sleep() {
    console.log("Person Sleep");
  }
}
class emp extends person {
  constructor(name, salary, field) {
    super();
    this.name = name;
    this.salary = salary;
    this.field = field;
  }
  showdetail() {
    console.log(
      `His name is ${this.name}. He is in ${this.field}. His salary is ${this.salary}`
    );
  }
}
let emp1 = new emp("Rohan", 20240, "Devops");
console.log(emp1.showdetail());
console.log(emp1.eat());
console.log(emp1.sleep());
// console.log(emp1.showdetail());
