let BWButton = document.querySelector(".butonA");
let BWB1 = "white";

BWButton.addEventListener("click", () => {
  if (BWB1 == "white") {
      BWB1 = "black";
      document.body.style.backgroundColor = "black";
      
  } else {
      BWB1 = "white";
      document.body.style.backgroundColor="white";
  }
});

let overbuton = document.querySelector(".butonB");
overbuton.addEventListener("mousemove", () => {
    
    if (BWB1 == "white") {
        BWB1 = "black";
        document.body.style.backgroundColor = "black";
        
    } else {
        BWB1 = "white";
        document.body.style.backgroundColor="white";
    }
});
