let boxes = document.querySelectorAll(".class_box");
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],[2, 5, 8],[2, 4, 6], [3, 4, 5], [6, 7, 8]];

let turnO =true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerHTML = "X";
            turnO = false;
        } 
        else {
            box.innerHTML = "O";
            turnO = true;
        }  
        box.disabled = true;
    });
});

