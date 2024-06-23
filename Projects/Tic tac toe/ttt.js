const boxes = document.querySelectorAll(".class_box");
const Newbton = document.querySelector("#newbuton");
const Reset = document.querySelector("#Reset");
const winmsg = document.querySelector(".winmsg");
const winmsg_div = document.querySelector(".winmsg_div");

const win_chance = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let remo_fun = () => {
  for (let box of boxes) {
    box.disabled = true;
    // eneble_fun();
  }
};

let eneble_fun = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let reset_butn = () => {
  turnO = true;
  eneble_fun();
  winmsg_div.classList.add("hide");
};

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerHTML = "X";
      turnO = false;
    } else {
      box.innerHTML = "O";
      turnO = true;
    }
    box.disabled = true;

    win_checker();
  });
});

const win_checker = () => {
  for (let pattern of win_chance) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos3 == pos2 && pos1 == pos3) {
        winnerno(pos1);
      }
    }
  }
};

let winnerno = (win) => {
  winmsg.innerText = `winner is ${win}`;
  winmsg_div.classList.remove("hide");
  remo_fun();
};

Reset.addEventListener("click", reset_butn);
