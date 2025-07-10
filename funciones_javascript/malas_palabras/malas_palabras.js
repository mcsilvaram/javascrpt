function censurarTexto(texto) {
      // Lista de palabras prohibidas
      const malasPalabras = ["tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos"];

      // Reemplaza cada palabra con "**"
      let textoModificado = texto;

      malasPalabras.forEach(palabra => {
        const regex = new RegExp(`\\b${palabra}\\b`, "gi");
        textoModificado = textoModificado.replace(regex, "**");
      });

      return textoModificado;
    }

    function procesarTexto() {
      const textoUsuario = document.getElementById("texto").value;
      const resultado = censurarTexto(textoUsuario);
      document.getElementById("resultado").text

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