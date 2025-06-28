function semaforo() {
  let entrada = document.getElementById("inputNumero").value;
  let numero = parseInt(entrada);
  let resultado = "";

  if (numero === 1) {
    resultado = "Rojo, detente";
  } else if (numero === 2) {
    resultado = "Amarillo, precaución";
  } else if (numero === 3) {
    resultado = "Verde, avanza";
  } else {
    resultado = "Error: número fuera del rango (1-3)";
  }

  document.getElementById("resultado").textContent = resultado;}