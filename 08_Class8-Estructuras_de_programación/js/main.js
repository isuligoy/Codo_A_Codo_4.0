// Tipos de variables
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let numero           // Defino la variable
numero = 5           // Le asigno number
numero = 'Jhon'      // Le reasigno Jhon

// Condicionesl e iteradores

var condicion = 18
var p = 0

if (condicion >= 18) {
    console.log("La persona mayor de edad")
} else{
    console.log("La persona es menor de edad")
}

for (let i = 0; i < 5; i++) {
    console.log("el valor de for ")
}

while(p < 5){
    console.log("Cada vez q sea falso en do/while")
    p++
}

do {
     console.log("el valor de p en do/while es:")
        p++
} while (p < 10);

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        console.log("true " + i); 
        continue; //salta el 3
    }
    if (i == 5) {
        break;
    }
    console.log("el valor de for/break " + i)
}

// Funciones
function holaMundo() {
    console.log("Hola Mundo!")
}

holaMundo()

function sumar(a, b) {
    var resultado = a + b

    return resultado
}

console.log(sumar(3,5))