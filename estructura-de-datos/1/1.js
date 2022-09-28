/*1)Implementar una función que recibe una lista de enteros L y un número entero n de forma
que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
valor*/


const jsLibraries = ["1", "2", "3", "4", "4", "44", "5"];

function borrarElemento(c) {
  const a = c.filter((item) => item !== "5");
  return a;
}

console.log(borrarElemento(jsLibraries));
