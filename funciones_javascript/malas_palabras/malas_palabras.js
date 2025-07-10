function censurartexto(texto) {
  // Lista de palabras prohibidas
  const malaspalabras = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];

  // Usamos expresión regular para buscar cada palabra (ignorando mayúsculas/minúsculas)
  let textomodificado = texto;

  malasPalabras.forEach(palabra => {
    // gi=expresión regular con la palabra, global e insensible a mayúsculas
    const regex = new RegExp(`\\b${palabra}\\b`, "gi");
    textomodificado = textomodificado.replace(regex, "**");  // reemplaza cada palabra por **.
  });

  return textomodificado;
}

 function procesarTexto() {
      const textoUsuario = document.getElementById("texto").value;
      const resultado = censurarTexto(textoUsuario);
      document.getElementById("resultado").textContent = `Texto censurado: ${resultado}`;
    }

// Crea una función que reciba un texto o parrafo y verifique si contiene 
//  alguna las siguientes malas palabras:
//  - "tonto"
//  - "chispas"
//  - "recorcholis"
//  - "rayos"
//  - "caracoles"
//  - "cielos"
//  Si el texto contiene alguna de estas palabras, sustituye por "**" y 
//  retorna el texto modificado.
//  Si no contiene ninguna, retorna el texto original.