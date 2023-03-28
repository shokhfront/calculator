const screen = document.querySelector(".screen");
const allclear = document.querySelector(".all-clear");
const delete1 = document.querySelector(".del");
const operants = document.querySelectorAll(".operant");
const numbers = document.querySelectorAll(".numbers");
const charecterTop = document.querySelector(".screen-top");
const charecterbottom = document.querySelector(".screen-bottom");
const equal = document.querySelector(".equal");
let operation = "";
let firstoperant = "";
let secondoperant = "";
let result = 0;

allclear.addEventListener("click", clear);
delete1.addEventListener("click", deleteword);
equal.addEventListener("click", calculate);

operants.forEach((operant) => {
  operant.addEventListener("click", writeoperant);
});
numbers.forEach((num) => {
  num.addEventListener("click", writenumber);
});

function clear() {
  charecterbottom.textContent = "";
  charecterTop.textContent = "";
  firstoperant = "";
  secondoperant = "";
  operation = "";
}
function deleteword() {
  firstoperant = firstoperant.slice(0, -1);
  charecterbottom.textContent = firstoperant;
}
function writeoperant(event) {
  if (firstoperant && !operation) {
    operation = event.target.innerHTML;
    charecterbottom.textContent += operation;
    charecterTop.textContent = charecterbottom.textContent;
    secondoperant = firstoperant;
    firstoperant = "";
    charecterbottom.textContent = "";
  }
}
function writenumber(event) {
  if (event.target.textContent == "." && firstoperant.includes(".")) return;

  if (event.target.textContent == "0" && firstoperant == "0") return;
  if (
    firstoperant == "0" &&
    event.target.textContent != "0" &&
    event.target.textContent != "."
  ) {
    firstoperant = "";
  } else {
    firstoperant += event.target.innerHTML;
    charecterbottom.textContent = firstoperant;
  }
}
function calculate() {
  firstoperant = Number(firstoperant);
  secondoperant = Number(secondoperant);
  if (operation == "+" || charecterTop.textContent.includes("+")) {
    result = 0;
    result = secondoperant + firstoperant;
    charecterbottom.textContent = result;
    charecterTop.textContent = "";
    firstoperant = result
    secondoperant = ""
    operation = ""
    if (
      (charecterbottom.textContent > 0 && charecterbottom.textContent < 1) ||
      (firstoperant > 0 &&
        firstoperant < 1 &&
        firstoperant > 0 &&
        firstoperant < 1)
    ) {
      firstoperant = firstoperant * 100;
      secondoperant = secondoperant * 100;
      result = firstoperant + secondoperant;
      result / 1000;
      console.log(result);
    }
    charecterbottom.textContent;
  } else if (operation == "-" || charecterTop.textContent.includes("-")) {
    result = 0;
    result = secondoperant - firstoperant;
    charecterbottom.textContent = result;
    charecterTop.textContent = "";
    firstoperant = result;
    secondoperant = "";
    operation = "";
    if (
      (charecterbottom.textContent > 0 && charecterbottom.textContent < 1) ||
      (firstoperant > 0 &&
        firstoperant < 1 &&
        firstoperant > 0 &&
        firstoperant < 1)
    ) {
      firstoperant = firstoperant * 100;
      secondoperant = secondoperant * 100;
      result = firstoperant - secondoperant;
      result / 100;
      console.log(result);
    }
    charecterbottom.textContent;
    firstoperant = result;
    secondoperant = "";
    operation = "";
  } else if (operation == "*" || charecterTop.textContent.includes("*")) {
    result = 0;
    result = secondoperant * firstoperant;
    charecterbottom.textContent = result;
    charecterTop.textContent = "";
    if (
      (charecterbottom.textContent > 0 && charecterbottom.textContent < 1) ||
      (firstoperant > 0 &&
        firstoperant < 1 &&
        firstoperant > 0 &&
        firstoperant < 1)
    ) {
      firstoperant = firstoperant * 100;
      secondoperant = secondoperant * 100;
      result = firstoperant * secondoperant;
      result / 100;
      console.log(result);
    }
    charecterbottom.textContent;
  } else if (operation == "÷" || charecterTop.textContent.includes("÷")) {
    result = secondoperant / firstoperant;
    charecterbottom.textContent = result;
    charecterTop.textContent = "";
    firstoperant = result;
    secondoperant = "";
    operation = "";
    if (
      (charecterbottom.textContent > 0 && charecterbottom.textContent < 1) ||
      (firstoperant > 0 &&
        firstoperant < 1 &&
        firstoperant > 0 &&
        firstoperant < 1)
    ) {
      firstoperant = firstoperant * 100;
      secondoperant = secondoperant * 100;
      result = firstoperant / secondoperant;
      result / 100;
      console.log(result);
    }
    charecterbottom.textContent;
    firstoperant = result;
    secondoperant = "";
    operation = "";
  }
}
