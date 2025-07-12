let turno = "X";
let tablero = Array(9).fill("");
let juegoActivo = true;

const celdas = document.querySelectorAll(".cell");
const mensaje = document.getElementById("mensaje");

celdas.forEach(celda => {
  celda.addEventListener("click", () => {
    const index = celda.getAttribute("data-index");

    if (tablero[index] === "" && juegoActivo) {
      tablero[index] = turno;
      celda.textContent = turno;
      verificarResultado();
      turno = turno === "X" ? "O" : "X";
    }
  });
});

function verificarResultado() {
  const combinacionesGanadoras = [
    [0,1,2], [3,4,5], [6,7,8], // filas
    [0,3,6], [1,4,7], [2,5,8], // columnas
    [0,4,8], [2,4,6]           // diagonales
  ];

  for (let combinacion of combinacionesGanadoras) {
    const [a, b, c] = combinacion;
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      mensaje.textContent = `¡Ganó ${tablero[a]}!`;
      juegoActivo = false;
      return;
    }
  }

  if (!tablero.includes("")) {
    mensaje.textContent = "¡Empate!";
    juegoActivo = false;
  }
}

function reiniciarJuego() {
  tablero = Array(9).fill("");
  juegoActivo = true;
  turno = "X";
  mensaje.textContent = "";
  celdas.forEach(celda => celda.textContent = "");
}



