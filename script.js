const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const grid = document.getElementById('grid');

function createNumber(n) {
  const div = document.createElement('div');
  div.className = 'number';
  div.classList.add(redNumbers.includes(n) ? 'red' : 'black');
  div.innerHTML = n + '<div class="chip">$50</div>';
  div.onclick = () => div.classList.toggle('selected');
  return div;
}

// Agregar 12 filas de 3 números en orden de ruleta (columna 3 → 2 → 1)
for (let row = 0; row < 12; row++) {
  grid.appendChild(createNumber(3 * row + 3)); // 3ª columna
  grid.appendChild(createNumber(3 * row + 2)); // 2ª columna
  grid.appendChild(createNumber(3 * row + 1)); // 1ª columna
}

function selectNumber(el) {
  el.classList.toggle("selected");
}
