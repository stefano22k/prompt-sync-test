const prompt = require("prompt-sync")({ sigint: true });


// function suma
function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

//function resta
function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}

//function multiplicacion
function multiplicacion(num1,num2){
    let resultado = num1 * num2;
    return resultado;
}

//function division
function division(num1,num2){
    if(num2 == 0){
        return "No se puede dividir por 0, debe elegir otro valor";
    } else {
        return num1/num2;
    }
}

console.log("Bienvenido a tu calculadora digital");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion =  parseInt(prompt("Indique que operacion desea realizar:"));
let numero1,numero2;
let resultado;

switch(opcion){
    case 1:
        numero1 = parseInt(prompt("Indique el primer numero:"));
        numero2 = parseInt(prompt("Indique el segundo numero:"));
        resultado = suma(numero1,numero2);
        console.log("El resultado de la suma es: " + resultado);
        break;
    case 2:
        numero1 = parseInt(prompt("Indique el primer numero:"));
        numero2 = parseInt(prompt("Indique el segundo numero:"));
        resultado = resta(numero1,numero2);
        console.log("El resultado de la resta es: " + resultado);
        break; 
    case 3:
        numero1 = parseInt(prompt("Indique el primer numero:"));
        numero2 = parseInt(prompt("Indique el segundo numero:"));
        resultado = multiplicacion(numero1,numero2);
        console.log("El resultado de la multiplicacion es: " + resultado);
        break; 
    case 4:
        numero1 = parseInt(prompt("Indique el primer numero:"));
        numero2 = parseInt(prompt("Indique el segundo numero:"));
        resultado = division(numero1,numero2);
        if(typeof resultado == "string"){
            console.log(resultado);
        } else {
            console.log("El resultado de la division es: " + resultado);
        }
        
        break;       
    default:
        console.log("Ingreso una opcion no valida");
        break;
}
