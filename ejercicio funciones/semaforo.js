function semaforo(numero) {
  if (numero === 1) {
    return "Rojo, detente";
  } else if (numero === 2) {
    return "Amarillo, precaución";
  } else if (numero === 3) {
    return "Verde, avanza";
  } else {
    return "Error: número fuera del rango (1-3)";
  }
}

function ejecutarSemaforo() {
  let entrada = document.getElementById("inputNumero").value;
  let numero = parseInt(entrada);

  let mensaje = semaforo(numero); // Aquí se llama a la función semaforo
  document.getElementById("resultado").textContent = mensaje;
}
