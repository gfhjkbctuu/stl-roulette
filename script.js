const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const grid = document.getElementById('grid');

const bets = {};
const history = [];

function createNumber(n) {
  const div = document.createElement('div');
  div.className = 'number';
  div.classList.add(redNumbers.includes(n) ? 'red' : 'black');
  div.dataset.number = n;

  bets[n] = 0;

  div.innerHTML = n + '<div class="chip">$0</div>';
  div.onclick = () => selectNumber(div);
  return div;
}

function selectNumber(el) {
  const n = el.dataset.number;
  const amount = parseInt(document.getElementById("betAmount").value);

  bets[n] += amount;
  history.push({ number: n, amount });

  el.classList.add('selected');
  const chip = el.querySelector('.chip');
  chip.textContent = `$${bets[n]}`;
  chip.style.display = 'block';
}

function undoLastBet() {
  if (history.length === 0) return;

  const last = history.pop();
  bets[last.number] -= last.amount;

  const cell = document.querySelector(`.number[data-number="${last.number}"]`);
  const chip = cell.querySelector('.chip');

  if (bets[last.number] <= 0) {
    cell.classList.remove('selected');
    chip.textContent = `$0`;
    chip.style.display = 'none';
  } else {
    chip.textContent = `$${bets[last.number]}`;
  }
}

function doubleBets() {
  for (let number in bets) {
    if (bets[number] > 0) {
      bets[number] *= 2;

      const cell = document.querySelector(`.number[data-number="${number}"]`);
      const chip = cell.querySelector('.chip');
      chip.textContent = `$${bets[number]}`;
      chip.style.display = 'block';
      cell.classList.add('selected');
    }
  }
}

for (let row = 0; row < 12; row++) {
  grid.appendChild(createNumber(3 * row + 3));
  grid.appendChild(createNumber(3 * row + 2));
  grid.appendChild(createNumber(3 * row + 1));
}
