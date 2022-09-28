/*4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
número comprendido entre 0 y 1000. Se compara el número introducido con el
calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
función del caso. Se repite la operación hasta que el usuario encuentra el número.*/


var max = 10; //Numero maximo que se va a generar
var min = 0; // Numero minimo que se va a generar
var numerom = Math.random()*(max-min) + min; // De esta manera generamos un numero entre el minimo (min) y un maximo (max) que colocamos en las variables anteriores
numerom = parseInt(numerom); // Con la funcion parseInt convertimos el valor que genera la variable numerom en un valor entero por si se da la posibilidad de que sea un numero flotante

while(true){ // El while(true) va a permitir que se siga ejecutando el codigo hasta que se adivine el numero y de ahi saldria con el break.
      var usuario = prompt("INGRESE UN NUMERO: "); // El usuario colocara su numero y se va a comparar con la variable numerom.

if(usuario == numerom){ //Si el numero que el usuario ingresa es identico al numero que genera la variable entonces
  alert("HAS GANADO");// Muestra la alerta
  break;//  Y termina el programa
}
else if(usuario == 0){// SI EL NUMERO DEL usuario ES IGUAL A 0 ENTONCES EL PROGRAMA ENTENDERA QUE EL usuario NO QUIERE JUGAR MAS Y TERMINARA EL PROGRAMA
  break; // CON UN BREAK;"
}
else if(usuario < numerom){
  // SI EL USUARIO COLOCA UN NUMERO MENOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MENOR QUE EL NUMERO A ADIVINAR , VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  
  // SI EL USUARIO COLOCA UN NUMERO MAYOR QUE EL NUMEROM, ENTONCES EL PROGRAMA LE AVISARA CON UNA ALERTA Y PERMITIRA QUE EL USUARIO VUELVA A COLOCAR EL NUMERO HASTA QUE LO ADIVINE GRACIAS AL WHILE(TRUE)
  alert("EL NUMERO ES MAYOR QUE EL A ADIVINAR, VUELVE A INTENTARLO");
}
} 
