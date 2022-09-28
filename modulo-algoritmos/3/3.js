/*(3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar)*/


let valorHora = prompt("Ingrese valor hora:");
const nombre = prompt("Ingrese nombre");
let antigüedad = prompt("Ingrese antigüedad");
let cantHorasMes = prompt("Ingrese la cantidad de horas trabajadas en el mes:  ");

let salario;
let dineroAntiguedad;

salario = cantHorasMes * valorHora;

if(antigüedad>10){
    dineroAntiguedad = antigüedad * 30;
    salario += dineroAntiguedad;
}

document.write("Nombre: " + nombre + "\n  Antigüedad:" + antigüedad + "\n  Total a cobrar: "+ salario);

