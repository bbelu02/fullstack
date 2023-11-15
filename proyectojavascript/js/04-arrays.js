// Añadir propiedades a un objeto mediante variables

let variableA="varA"
let variableB="varB"
let variableC="varC"
let ejercicio6={}

ejercicio6.variableA = variableA;
ejercicio6.variableB = variableB;
ejercicio6.variableC = variableC;

console.log("mostramos ejercicio 6", ejercicio6);

// comienzo de los arreglos a arrays
// forman una parte de los lenguajes de programacion
// sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10, 20, 30, 40, 50];
console.log("mi primer array", numeros);
// para los arrays podemos hacer uso del formato tabla
console.table(numeros);

// los objetos usan {} los arrays usan []

// otra forma de crear arrays es con new array () pero es la menos utilizada
// y es lo mismo que []
const meses = new Array("enero", "febrero","marzo",); 
console.table(meses);

const diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
console.table(diaSemana);

console.log("accediendo a los valores del array con el indice 2", numeros[2]);
console.log("accediendo a los valores del array con el indice lunes y jueves", diaSemana[0][3]);
console.log( diaSemana [20]);

let finde = {
    pro1:"pro1",
    pro2: 3,
    pro3: true

}
finde.finSemana=["s","d"];
console.log(finde);

let{pro1,pro2,pro3} = finde;

// Crear un array que se llame estaciones inicializamos con verano
const estaciones = ["verano"];
// añadir primavera en su lugar correspondiente
// unshift añade elementos al inicio
estaciones.unshift("primavera");
// añadir otoño invierno 
// push añade al final
estaciones.push("otoño", "invierno");
// tiene que verse en el orden primavera verano otoño invierno
console.table(estaciones);



// crear un array que se llama carrito
// con 4 objetos en su interior
// con propiedades nombre y precio
// asignar valores que querais
// mostrar por pantalla

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

console.table(carrito);



