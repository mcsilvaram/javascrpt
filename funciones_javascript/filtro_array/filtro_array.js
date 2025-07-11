window.onload = function () {
  const personas = [
    { nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
    { nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
    { nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
    { nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
    { nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
  ];

  const edades = [...new Set(personas.map(p => p.edad))];
  const paises = [...new Set(personas.map(p => p.pais))];
  const sexos = [...new Set(personas.map(p => p.sexo))];

  const selectEdad = document.getElementById("edad");
  const selectPais = document.getElementById("pais");
  const selectSexo = document.getElementById("sexo");

  // Cargar edades
  edades.forEach(edad => {
    const option = document.createElement("option");
    option.value = edad;
    option.textContent = edad;
    selectEdad.appendChild(option);
  });

  // Cargar países
  paises.forEach(pais => {
    const option = document.createElement("option");
    option.value = pais;
    option.textContent = pais;
    selectPais.appendChild(option);
  });

  // Cargar sexos
  sexos.forEach(sexo => {
    const option = document.createElement("option");
    option.value = sexo;
    option.textContent = sexo.charAt(0).toUpperCase() + sexo.slice(1);
    selectSexo.appendChild(option);
  });

  // Filtrar por edad
  window.filtrarPorEdad = function () {
    const edad = parseInt(selectEdad.value);
    const resultado = personas.filter(p => p.edad === edad);
    mostrarResultado(resultado, `Edad: ${edad}`);
  };

  // Filtrar por país y sexo
  window.filtrarPorPaisYSexo = function () {
    const pais = selectPais.value;
    const sexo = selectSexo.value;
    const resultado = personas.filter(p => p.pais === pais && p.sexo === sexo);
    mostrarResultado(resultado, `País: ${pais} y Sexo: ${sexo}`);
  };

  // Mostrar resultados
  function mostrarResultado(lista, criterio) {
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = `<strong>Filtrado por ${criterio}:</strong><br><br>`;

    if (lista.length === 0) {
      contenedor.innerHTML += "No se encontraron personas.";
      return;
    }

    lista.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("persona");
      div.textContent = `${p.nombre}, ${p.edad} años, ${p.pais}, ${p.sexo}`;
      contenedor.appendChild(div);
    });
  }
};