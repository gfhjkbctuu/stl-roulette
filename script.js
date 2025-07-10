let selectedValue = 0;
let history = [];

function selectChip(value) {
  selectedValue = value;
  alert("Ficha seleccionada: $" + value);
}

function placeBet(el) {
  if (selectedValue === 0) {
    alert("Selecciona una ficha primero");
    return;
  }
  const number = el.getAttribute("data-number");
  history.push("🎯 Número " + number + " ➜ $" + selectedValue);
  alert("Apostaste $" + selectedValue + " al número " + number);
}

function toggleHistory() {
  const bar = document.getElementById("historyBar");
  if (bar.classList.contains("hidden")) {
    bar.classList.remove("hidden");
    bar.innerText = "Historial:\n" + history.join("\n");
  } else {
    bar.classList.add("hidden");
  }
}
