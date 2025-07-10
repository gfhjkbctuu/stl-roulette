const grid = document.getElementById("grid");
const betAmount = document.getElementById("betAmount");
const historyBar = document.getElementById("historyBar");

let history = [];
let allBets = [];

for (let i = 1; i <= 36; i++) {
  const div = document.createElement("div");
  div.classList.add("number");
  div.classList.add((i % 2 === 0) ? "black" : "red");
  div.textContent = i;

  const chip = document.createElement("div");
  chip.classList.add("chip");
  chip.innerText = "$0";
  div.appendChild(chip);

  div.onclick = () => selectNumber(div);
  grid.appendChild(div);
}

function selectNumber(el) {
  const amount = parseInt(betAmount.value);
  const chip = el.querySelector(".chip");
  let current = parseInt(chip.innerText.replace("$", "")) || 0;
  current += amount;
  chip.innerText = `$${current}`;
  el.classList.add("selected");

  allBets.push({ element: el, amount });
  history.push(el.textContent.trim());
}

function undoLastBet() {
  const last = allBets.pop();
  if (last) {
    const chip = last.element.querySelector(".chip");
    let current = parseInt(chip.innerText.replace("$", "")) || 0;
    current -= last.amount;
    if (current <= 0) {
      chip.innerText = "$0";
      last.element.classList.remove("selected");
    } else {
      chip.innerText = `$${current}`;
    }
  }
}

function clearAllBets() {
  allBets = [];
  document.querySelectorAll(".chip").forEach(chip => {
    chip.innerText = "$0";
    chip.parentElement.classList.remove("selected");
  });
}

function doubleBets() {
  allBets.forEach(bet => {
    const chip = bet.element.querySelector(".chip");
    let current = parseInt(chip.innerText.replace("$", ""));
    current += bet.amount;
    chip.innerText = `$${current}`;
    bet.amount *= 2;
  });
}

function toggleHistory() {
  if (historyBar.classList.contains("hidden")) {
    historyBar.classList.remove("hidden");
    historyBar.innerText = "Historial: " + history.join(", ");
  } else {
    historyBar.classList.add("hidden");
  }
}
