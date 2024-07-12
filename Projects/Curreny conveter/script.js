const Currency_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
const Dropdown = document.querySelectorAll(".Dropdown select");

for (let Select of Dropdown) {
  for (currcod in countryList) {
    let newoptin = document.createElement("option");
    newoptin.value = currcod;
    newoptin.innerHTML = currcod;
    Select.append(newoptin);
    if (Select.name == "from" && currcod == "INR") {
      newoptin.selected = "selected";
    } else if (Select.name == "to" && currcod == "USD") {
      newoptin.selected = "selected";
    }
  }
  Select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {};
