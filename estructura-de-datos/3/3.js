//Construir una función que sume los elementos de una lista
//de enteros recursivamente

const array = [1,2,3,4,5,6];


function sumarEnteros(array) {

  let suma = 0;
  for(let i in array){
    if(Array.isArray(array[i])) suma += (array[i]);
    else suma += array[i];
  }
  return suma;
}


console.log(sumarEnteros(array));