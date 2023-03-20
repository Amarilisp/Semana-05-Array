const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const aqua = arrayNumeros.map(arrayQuadrado);

function arrayQuadrado(num) {
  return num ** 2;
}
console.log(aqua);
