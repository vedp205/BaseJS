let a = document.querySelector("#white_button");

function color_white() {
    // let BWcolors = ;
    if (document.body.style == "white") {
        document.body.style = "black";
        a.textContent = "light";
    }
    else {
        document.body.style = "white";
        a.textContent = "dark";
    }
}
a.addEventListener("click", "color_white()");