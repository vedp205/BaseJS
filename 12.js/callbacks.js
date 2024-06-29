// TODO: callback;

function hello() {
  console.log("I say hello");
}
function leave(s) {
  console.log("I say leave");
  s();
}
leave(hello);

// TODO: Callback Hell

function a(callback) {
  setTimeout(() => {
    console.log("This is A");
    callback();
  }, 2000);
}
function b(callback) {
  setTimeout(() => {
    console.log("This is B");
    callback();
  }, 1000);
}
function c(callback) {
  setTimeout(() => {
    console.log("This is C");
    callback();
  }, 2000);
}
function d(callback) {
  setTimeout(() => {
    console.log("This is D");
    callback();
  }, 1000);
}

a(() => {
  b(() => {
    c(() => {
      d(() => {
        console.log("The end");
      });
    });
  });
});

// FIXME: Another method of callback hell

function add(a, b, callback) {
  setTimeout(() => {
    console.log(a + b);
    callback();
  }, 2000);
}
function min(a, b, callback) {
  setTimeout(() => {
    console.log(a - b);
    callback();
  }, 1200);
}

add(2, 3, () => {
  min(10, 4, () => {});
});
