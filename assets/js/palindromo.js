const palindromo = (str) => {
  // Eliminamos los espacios en blanco y convertimos todo a minúsculas
  word = str.toLowerCase().replace(/\s/g, "");
  //                             .replaceAll(" ","")

  // Comparamos la palabra original con su versión invertida
  return word === word.split("").reverse().join("");
};

module.exports = { palindromo };
