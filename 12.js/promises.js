/*
// TODO: Pomise
//1
let promise1 = new Promise((resolve, reject) => {
  console.log("A Promise");
  resolve("A resolve");
});
console.log(promise);
//2
let promise2 = new Promise((resolve, reject) => {
    console.log("A Promise");
    reject("A reject");
  });
  console.log(promise);
*/

/*
// Use 
function getdata(dataid, getnextdata) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data", dataid);
        resolve("success");
        if (getnextdata) {
          getnextdata();
        }
      }, 10000);
    });
  }
  */

// TODO: Promise.then and Promise.catch
/*
const getpromise = () => {
  return new Promise((resolve, reject) => {
    //   reject("The promise is reject");
    resolve("The promise is resolve");
  });
};
let promise = getpromise();
promise.then((res) => {
  console.log("The promise is resolve completely");
});
promise.catch((err) => {
  console.log("The promise is reject ");
});
console.log(promise);
*/
/*
function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The Data-1 fetched");
      resolve("Successfull data1 fetched");
    }, 4000);
  });
}
function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The Data-2 fetched");
      resolve("Successfully data2 fetched ");
    }, 4000);
  });
}

console.log("fetching  data-1 ");
async1().then((res) => {
  console.log("fetching  data-2 ");
  async2().then((res) => {});
});
*/

function walkdog(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Walk the dog");
      resolve("T-1 Done");
    }, 2000);
  });
}
function cleaningkitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cleaning the kitchen");
      resolve("T-2 Done");
    }, 2000);
  });
}
function take_trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Take out the trash");
      resolve("T-3 Done");
    }, 2000);
  });
}
walkdog().then(() => {
  cleaningkitchen().then(() => {
    take_trash().then(() => {});
  });
});
