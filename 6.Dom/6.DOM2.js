const button = document.querySelector(".buton");

const color = () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    button.style.backgroundColor = "white";
    button.style.color = "black";
  } else {
    document.body.style.backgroundColor = "white";
    button.style.backgroundColor = "black";
    button.style.color = "white";
  }
};
button.addEventListener("click", color());
