// TODO: Asynchronisation;

// const { reject } = require("async");

// console.log("1");
// setTimeout(() => {
//   console.log("hello world");
// }, 1000);
// console.log("2");

// Async await
function getadata(data_no) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Dataid = ${data_no}`);
      resolve("sucess");
    }, 2000);
  });
}

// async function data() {
//   await getadata(1);
//   await getadata(2);
//   await getadata(3);
//   await getadata(4);
// }
// console.log(data());
(async () => {
  await getadata(1);
  await getadata(2);
  await getadata(3);
  await getadata(4);
})();
