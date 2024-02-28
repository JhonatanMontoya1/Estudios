/*var color = prompt("Ingesa un color.");
switch(color) {
    case "rojo":
        console.log("El rojo es un color muy melo");
        break;
    case "Verde":
        console.warn("Gas con fo");
        break;
    case "Azul":
        console.log("melos mi hermano");
        break;
    case "morado":
        console.info("mi color favoito!!!!");
        break;
    default:
        console.error("Usted no ingresó ningún valor.");
        break;
}
*/

//Actividad GA3-220501093-AA2-EV01 fundamentos de programación estructuraday estructuras cíclicas
/*
console.info("Algoritmo que a partir de una fecha de nacimiento y una fecha actual determine la edad en años actual de una persona.");

var fechaactual = prompt("ingresa la fecha actual");
var fechanacimiento = prompt("ingresa tu fecha de nacimiento");

if (fechaactual !== fechanacimiento){
    console.info(`Usted tiene ${fechaactual-fechanacimiento} años de edad`)
}else{
    console.warn(`El usuario, es un bebé `)
}
*/


    // Algoritmo que permita determinar si un año indicado es o no un año bisiesto. 

let año;
    año = prompt("ingrese el año");
    año = parseInt(año)
if ((año%4==0) && (año%100 !== 0 || año%400==0)){
    console.info("El año es bisiesto");
}else{
    console.warn("el año no es bisiesto");
}


