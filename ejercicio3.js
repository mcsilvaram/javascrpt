const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un número entre 1 y 12: ", function (input) {
  let numero = parseInt(input);

  let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  if (isNaN(numero)) {
    console.log("Eso no es un número válido.");
  } else if (numero >= 1 && numero <= 12) {
    console.log("El mes correspondiente es: " + meses[numero - 1]);
  } else {
    console.log("Error: el número debe estar entre 1 y 12.");
  }

  rl.close(); // Finaliza la entrada
});
