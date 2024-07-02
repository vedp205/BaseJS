const button1 = document.getElementById("buton1");
const button2 = document.getElementById("buton2");
const button3 = document.getElementById("buton3");
const albuton = document.getElementById("allbuton");

const main = document.getElementsByClassName("container");
const divcls1 = document.getElementsByClassName("divclass1");
const divcls2 = document.getElementsByClassName("divclass2");
const divcls3 = document.getElementsByClassName("divclass3");

const divid1 = document.getElementById("divid1");
const divid2 = document.getElementById("divid2");
const divid3 = document.getElementById("divid3");

function showDiv(divToShow) {
  // Hide all divs
  divid1.style.display = "none";
  divid2.style.display = "none";
  divid3.style.display = "none";

  // Show the selected div
  divToShow.style.display = "block";
}

button1.addEventListener("click", function () {
  showDiv(divid1);
});
button2.addEventListener("click", function () {
  showDiv(divid2);
});
button3.addEventListener("click", function () {
  showDiv(divid3);
});
albuton.addEventListener("click", function () {
//   showDiv(divid3);
//   showDiv(divid3);
//   showDiv(divid2);
});
