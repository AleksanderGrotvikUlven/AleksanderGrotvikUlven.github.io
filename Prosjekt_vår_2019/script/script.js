function visMeny() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
  var bars = document.getElementById("bars");
  bars.classList.toggle("fa-times");
}
function visButton1() {
  var sorteringsknapp1 = document.getElementById("sorteringsknapp1");
  var sorteringsknapp2 = document.getElementById("sorteringsknapp2");
  var sorteringsknapp3 = document.getElementById("sorteringsknapp3");
  sorteringsknapp1.classList.toggle("hidden");
  sorteringsknapp2.classList.add("hidden");
  sorteringsknapp3.classList.add("hidden");
}
function visButton2() {
  var sorteringsknapp1 = document.getElementById("sorteringsknapp1");
  var sorteringsknapp2 = document.getElementById("sorteringsknapp2");
  var sorteringsknapp3 = document.getElementById("sorteringsknapp3");
  sorteringsknapp1.classList.add("hidden");
  sorteringsknapp2.classList.toggle("hidden");
  sorteringsknapp3.classList.add("hidden");
}
function visButton3() {
  var sorteringsknapp1 = document.getElementById("sorteringsknapp1");
  var sorteringsknapp2 = document.getElementById("sorteringsknapp2");
  var sorteringsknapp3 = document.getElementById("sorteringsknapp3");
  sorteringsknapp1.classList.add("hidden");
  sorteringsknapp2.classList.add("hidden");
  sorteringsknapp3.classList.toggle("hidden");
}
