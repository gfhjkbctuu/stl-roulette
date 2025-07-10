
const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
const board = document.getElementById('board');

function createCell(number) {
  const div = document.createElement('div');
  div.classList.add('number');
  if (number === 0) {
    div.classList.add('green');
  } else if (redNumbers.includes(number)) {
    div.classList.add('red');
  } else {
    div.classList.add('black');
  }
  div.innerHTML = number + '<div class="chip"></div>';
  div.onclick = () => div.classList.toggle('selected');
  return div;
}

// Agregar números (0 arriba, luego 1–36 en 3 columnas)
board.appendChild(createCell(0));
for (let row = 0; row < 12; row++) {
  for (let col = 0; col < 3; col++) {
    const number = row * 3 + col + 1;
    if (number <= 36) board.appendChild(createCell(number));
  }
}
