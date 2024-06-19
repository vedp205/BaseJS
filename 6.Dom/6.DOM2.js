let a = document.querySelector("#white_button");

function color_white() {
    // let BWcolors = ;
    if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
        a.textContent="Light";
    }
    else {
        document.body.style.backgroundColor = "white";
        a.textContent="Dark";
    }
}
a.addEventListener("click", "color_white()");