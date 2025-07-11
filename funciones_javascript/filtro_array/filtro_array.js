window.onload = function () {
  let personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  const edadesUnicas = [...new Set(personas.map(p => p.edad))];

  const selectEdad = document.getElementById("edad");
  edadesUnicas.forEach(edad => {
    const opcion = document.createElement("option");
    opcion.value = edad;
    opcion.textContent = edad;
    selectEdad.appendChild(opcion);
  });

  window.filtrarPorEdad = function () {
    const edadSeleccionada = parseInt(selectEdad.value);
    const resultado = personas.filter(p => p.edad === edadSeleccionada);

    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    if (resultado.length === 0) {
      contenedor.textContent = "No hay personas con esa edad.";
      return;
    }

    resultado.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("persona");
      div.textContent = `${p.nombre}, ${p.edad} años, ${p.pais}, ${p.sexo}`;
      contenedor.appendChild(div);
    });
  };
};