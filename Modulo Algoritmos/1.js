/* Pide un número por teclado e indica si es un número primo o no. Un número primo es
aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
25 es divisible entre 5, sin embargo, 17 si es primo.*/

let numeroPrimo = prompt("Ingresa un numero"); //Numero que se debera verificar
let esnumeroPrimo = true; // valor booleano true

for (let i = 2; i < numeroPrimo; i++) {
  // Ciclo FOR para verificar
  if (numeroPrimo % i === 0) {
    // Si da resto 0 es primo
    esnumeroPrimo = false; //valor booleano false
  }
}

if (esnumeroPrimo === true) {
  document.write("El numero ", numeroPrimo, " es Primo");
} else {
  document.write("El numero ", numeroPrimo, " NO es primo");
}
