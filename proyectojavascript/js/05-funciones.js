// METODOLOGIA DE LA DECLARACION DE LA FUNCION
sumar(10, 20);
function sumar (n1,n2) {
    console.log(n1+n2);
};

// Lo primero que se hace es poner la function,
//  darle un nombre (en este caso sumar)
// y siempre siempre, abrir parentesis () y las llaves {}
// una vez abiertos asi ya les damos los  valores.
// dentro de los parentesis tenemos los argumentos.
// dentro de las llaves ponemos el cuerpo de la funcion.
// los argumentos luego se usan en el cuerpo de la funcion.
// en el cuerpo de la funcion se muentran los argumentos con el 
// console.log y entre parentesis se suman los argumentos.
// para que la funcion funcione hay que llamarla:




// una vez que llamas a la funcion para que haga la operacion
// se puede poner cualquier numero en este caso.
// ------------------------------------------------------------
// en declaracion de la funcion si llamas antes a la funcion de crearla
// no pasa nada


// METODOLOGIA DE LA EXPRESION DE LA FUNCION
// sumar2(3, 9);
let sumar2 = function (n3, n4){
    console.log(n3+n4);

}
sumar2(3, 9);


// los argumentos pueden ser los mismos que en la forma anterior ya que solo
// se aplican dentro de la nueva function creada.
// creamos la funcion y la llamamos, si no no se va a mostrar.

// --------------------------------------------------------------
// en cambio si en la expresion de la funcion lo llamas antes de crear la funcion
// da error


// METODO IIFE

(function ( ) {
 console.log("esto es una funcion")
}) ();

// en esta tercera forma no hay que llamarla ya que se llama a ella misma
// Los ultimos parentesis de abre y cierre son los que hacen que se llame a ella misma
// el primer parentesis la crea, el segundo la llama

// DIFERENCIA ENTRE METODO Y FUNCION
// los metodos ya tienen su funcion y la funcion somos nosotros los que se lo damos
// el metodo siempre va acompañado de una variable

const numero1 = 20; 
const numero2 = "20";

console.log(parseInt(numero2)); // parseInt() ES UNA FUNCION
console.log(numero1.toString()); // .toString() ES UN MÉTODO

// NOMBRE DE FUNCION SEGUIDO DE PARENTESIS === FUNCIONES
// . SEGUIDO DEL NOMBRE DE LA FUNCION === METODOS. SIEMPRE LIGADO A LA VARIABLE

// ejercicio
function color (x){
 console.log (`el color elegido es ${x}`);
};
color("verde");
// ejercicio
function precio (importe, descuento){
    console.log (`el descuento total es de: ${(importe*descuento)/100}`);
    console.log (`Precio final es de: ${((importe-(importe*descuento)/100))}`)
};
precio(100, 20);
// ejercicio
function tweet(texto){
    console.log(texto.lenght);

}
tweet("este es el texto");

// ejercicio
function buscar(texto, palabra){
console.log("Esta la palabra dentro del texto?:", texto.includes(palabra))
}
buscar ("Este texto vamos a buscar", "buscar");
buscar ("Texto donde voy a buscar", "rojo");

// ejercicio
// crear una funcion que añada un elemento al final a un array previamente definido
// mostrarlo por consola
// recibe como argumento de entra el elemento
// la funcion se llamara añadir

// primero creamos un array
let fruta = ["manzana", "pera"]
// despues creamos una funcion para añadir el elemento al final
function añadirFruta (k){
   fruta.push(k);

}

añadirFruta("fresa");
console.log(fruta) 


// ejercicio
restar (70, 20);
function restar (n1, n2) {
    console.log(n1-n2);
};

// FUNCIONES QUE RETORNAN VALORES
function multiplicar(x,y){
    return x*y;

}
let resultadoMultiplicar= multiplicar(2,3);
console.log(resultadoMultiplicar);




// OTRA FUNCION QUE LO QUE HACE ES: CADA VEZ QUE YO HAGA LA FUNCION
// VA A AGREGAR AL CARRITO LO QUE YO LE AÑADA

let totalCarrito = 0;

function agregarCarrito(x){
   totalCarrito += x;
//    += hace que valla sumando, ahora el total carrito cuesta 0
//    cuando la llame y diga que carrito vale x se va sumando de manera automatica.
// ejemplo:
}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);

// Asi se van añadiendo y sumando y para que se vea hay
// que hacer un consule log

console.log("el total a pagar es:",totalCarrito);

// EJERCICIO
// REALIZAR UNA FUNCION QUE CALCULES EL DESCUENTO QUE SE
// INDIQUE DE LOS PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME

let descuento = 0.2;
let totalAhorro= 0;

function calcularDescuento( z ){
   totalAhorro += (z*descuento);
}

calcularDescuento(100);
calcularDescuento(120);
calcularDescuento(350);
console.log("lo que hemos ahorrado es:", totalAhorro);

// METODOS DE PROPIEDAD 
let reproductor ={
    reproducir: function(x){
           console.log(`reproduciendo canción con ID: ${x}`)
    },
    pausar: function(){
        console.log ("pausando canción..")
    },
    crearPlaylist: function(nombre){
        console.log(`creando playlist:${nombre}`)
    }
}
reproductor.reproducir(17)
reproductor.crearPlaylist(17)
reproductor.borrarCancion = function (id){
 console.log(`borrando cancion con id: ${id}`)
}
reproductor.borrarCancion(34);



// funciones de flecha/arrow function

let triplicar = function(x){
     return 3*x                       
}
console.log (triplicar(6));
// HEMOS USADO LA EXPRESION DE LA FUNCION.

// arriba es lo mismo que abajo lo unico que abajo
// hemos usado la funcion de la flecha por lo que 
// desaparece el return, los parentesis, function y las llaves.
// quedando asi:
// la funcion de la flecha es simplificar

let triplicar2 = x=>
     3*x;

console.log(triplicar2(6))

// ejercicio: creamos nuevo arrow function
// aprendiendo, que devuelva un numero +7 y lo
// almacene en una variable resultadoAprendiendo

let aprendiendo = numero=>
    numero+7;
let resultadoAprendiendo = aprendiendo(16)    
    console.log(resultadoAprendiendo)









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

console.table(carrito)
    
   


// let resultado;

// resultado = meses.includes("Mayo");
// console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado);




// primera, estamos transformando el metodo some de arrays, de la carpeta cuatro, en metodo flecha.
resultado = carrito.some (producto  => {
    return producto.nombre === "Tablet" //ME DEVOLVERÁ TRUE/FALSE
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// segunda, tranformando el metodo reduce de la carpeta cuatro en metodo flecha.
resultado = carrito.reduce((total, producto) => { 
 total + producto.precio},0); 
console.log("USO DE REDUCE", resultado);

// tercera
resultado = carrito.filter( (X) => {
     X.precio <= 1
});
console.log("USO DE FILTER", resultado);

// === EXACTAMENTE IGUALES
// == IGUALES PERO NO ESTRICTAMENTE 200="200"
// !== DIFERENTES
// < MENOR QUE
// <= MENOR IGUAL
// > MAYOR QUE
// >= MAYOR IGUAL


// Ejercicio 1. crear una función que sume 3 numeros dados.
// ponerla con expresion, declaracion y como funcion de flecha.
// sumaDeclaracion sumaExpresion sumaFlecha
// mostrar por consola

// suma declaracion
function sumaDeclaracion(x1, x2, x3){
    console.log(x1+x2+x3);
}
sumaDeclaracion(2,2,2);

// suma expresion
let sumaExpresion= function(x1, x2, x3){
    console.log(x1+x2+x3)
}
sumaExpresion(4, 4, 4);

// suma flecha

let sumarFlecha = (x1,x2,x3) => console.log(x1+x2+x3);

    sumarFlecha(2,3,4);

// EJERCICIO 2.
// crear una funcion que busque elementos de un array numeros.
// ponerla con expresion, declaracion, y flecha
// array numeros:   .includes 

// function buscarExpresion (array, x){
//     return array.includes (x)
// }
// console.log(buscarExpresion(numeros,80))

// CORREGIR CORREGIR CORREGIR 

// Ejercicio 3.
// Crear una funcion de flecha que dados dos parametros 
// me de 10 veces la suma de ambos

let flecha = (n1,n2) => console.log((n1+n2)*10);
flecha(10, 20);

let caracteres = (x,y) =>(x.lenght)+(y.lenght);
 console.log (caracteres("belen","rodriguez"));


 







