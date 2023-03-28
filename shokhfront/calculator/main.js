const allclear = document.querySelector(".all-clear");
const screen = document.querySelector(".screen");
const del = document.querySelector(".del");
const operations = document.querySelectorAll(".signals");
const numbers = document.querySelectorAll(".numbers");
const aquel = document.querySelector(".equale");
let firstoparate = "";
let operate = "";
let secondoparate = "";
let result = "";

allclear.addEventListener("click", clear);

// del.addEventListener("click", deleteone);

operations.forEach((oper) => {
  oper.addEventListener("click", signal);
});
numbers.forEach((num) => {
  num.addEventListener("click", number);
});

aquel.addEventListener("click", equale);

function clear() {
  screen.textContent = "";
}

// function deleteone() {
//   firstoparate.slice(0, -1);
// }

function signal(event) {
  operate = event.target.innerText;
  screen.textContent += operate;

  secondoparate = firstoparate;
  firstoparate = "";
}

function number(event) {
  firstoparate = event.target.innerText;
  firstoparate = Number(firstoparate);
  screen.textContent += firstoparate;
}

function equale() {
  firstoparate = Number(firstoparate);
  secondoparate = Number(secondoparate);
  result = 0;
  if (operate == "+") {
    result = firstoparate + secondoparate;
    screen.textContent = result;
  }
}
