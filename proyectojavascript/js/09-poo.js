/*
!!!!!!!!!!!!!

FOREACH Y MAP. MÉTODOS EXCLUSIVOS PARA RECORRER ARREGLOS

ES IGUAL QUE EL FOREACH, LA DIFERENCIA ES QUE
MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH
PARA MOSTRAR POR PANTALLA

THIS HACE REFERENCIA A LOS MISMOS VALORES DEL OBJETO QUE SE ESTA LLAMANDO


FIN DEL REPASO
!!!!!!!!!!!!!!!!!

PROGRAMACIÓN ORIENTADA A OBJETOS, POO

JAVASCRIPTS HACE USO DE PROTOTYPES

*/

//OBJECT LITERAL, MANUAL
const producto = {
    nombre : "tablet",
    precio : 500
}




// OBJECT CONSTRUCTOR, DINÁMICO
// SINTAXIS MUY SIMILAR A UNA FUNCION
// CREAMOS UNA CLASE, QUE ES UN CONTENEDOR DE DATOS
// OBJETIVO, CREAR OBJETOS DE MANERA MÁS DINAMICA
// UNA CLASE ME VA SERVIR PARA ALMACENAR
// LOS DATOS QUE VA A TENER UN OBJETO EN ESPECIFICO

//!!!!!!!!!!!!!!!PRIMERA FORMA DE HACERLO

// LE PONEMOS EL NOMBRE DE LA CLASE SIEMPREINICIO EN MAYUS
function ProductoClase(nombre,precio,disponibilidad=false,categoria="play"){
    this.nombreObjeto = nombre; 
    this.precioObjeto = precio; // LE PUEDO DAR EL NOMBRE QUE QUIERA, SE LE SUELE DAR EL MISMO
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}

//CREAMOS UNA INSTANCIA
const producto2 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto3 = new ProductoClase("PC",1800);
const producto4 = new ProductoClase("Reloj",800);
console.log(producto2);
console.log(producto3);
console.log(producto4);


ProductoClase.prototype.formatearProducto = function() {
    return(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto} €`);
};
// con esto lo que hacemos en formatear el producto lo que viene siendo dar toda la informacion del producto.

const producto5 = new ProductoClase("Monitor curvo",800,true,"tech");
const producto6 = new ProductoClase("PC",1800);
const producto7 = new ProductoClase("Reloj",800);
console.log(producto5.formatearProducto());
console.log(producto6.formatearProducto());
console.log(producto7.formatearProducto());
// mostrar por consola, llamar al producto y al nombre de la funcion.

// PROTOTYPES
// ME PERMITE CREAR FUNCIONES QUE SOLO SE UTILIZAN EN UN OBJETO
// ESPECIFICO

// NO SE UTILIZA MUCHO, VEREMOS LUEGO LA ALTERNATIVA CON LAS CLASES







// EJERCICIO
// AQUI TENGO HECHO EL CONSTRUCTOR
function fecha(año, mes, dia){

    this.añoObjeto = año;
    this.mesObjeto = mes;
    this.diaObjeto = dia;

}
// INSTANCIA
let fecha1 = new fecha(2023,"octubre",25);
let fecha2 = new fecha(2023,"octubre",25);
let fecha3 = new fecha(2023,"octubre",25);
let fecha4 = new fecha(2023,"octubre",25);

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);
console.log(fecha4);

// OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES


class ProductoClase2{
    constructor(nombre, precio) { //ES UNA FUNCIÓN YA EN SI
        this.nombreObjeto2=nombre;
        this.precioObjeto2=precio;
        
    }

    formatearProducto2(){
        return(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2} €`);
    }
}

//INSTANCIAS
const producto8 = new ProductoClase2("TV nueva",678);


console.log(producto8)
console.log(producto8.formatearProducto2())

// EJERCICIO, AÑADIR UN METODO NUEVO QUE ME CALCULE UN 20% DESCUENTO

// crear constructor de objeto que se llame libro
// con propiedades nombre, precio, isbn
// haciendo uso del constructor.
// y generar una instancia al menos.

function libro (nombre,precio,isbn){

    this.nombre=nombre;
    this.precio=precio;
    this.isbn=isbn;

}

const libroObjeto = new libro ("hoy llueve", 30, 121212);

console.log(libroObjeto);

// la herencia seria: 

class biblioteca extends libro {
    constructor (nombre, precio, isbn, categoria){
        super(nombre,precio,isbn);
        this.categoria=categoria;
    }
}
// formatearProducto3() {
//     console.log(`El producto ${this.nombre} pertenece a la categoria ${this.categoria} €`);
// }



function coche (marca,añocompra,motor,matricula){

    this.marca=marca;
    this.añocompra=añocompra;
    this.motor=motor;
    this.matricula=matricula;

}

const miCoche = new coche ("fiat", 2018, "80cv", "GGG123")

const cochePapa = new coche ("peugeot", 2020, "200cv", "MLM222")

console.log(miCoche);
console.log(cochePapa);


class cochesFamilia extends coche {
    constructor (marca, añocompra, motor, matricula, itv){
        super(undefined, añocompra, undefined, matricula);
        this.itv= 1;
    }
}







