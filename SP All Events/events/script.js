let allpara = document.querySelectorAll('p');
function envet() {
    alert("You clicked ");
}
for (let i = 0; i < allpara.length; i++) {
    let para = allpara[i];
    para.addEventListener('click', envet);
}

let buton = document.querySelector('blackcolor');

function color() {
    let bg1 = "black";
    let bg2 = "white"
    document.body.style.background = bg1;
    if (document.body.style.background == bg1) {
        document.body.style.background == "white";
    }
        

    else if(document.body.style.background == bg2) {
            document.body.style.background == "black";
    }
}
buton.addEventListener('click', color());