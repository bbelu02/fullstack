"use strict";

let producto = {

    producto:  "casa",
    precio:  150,
    disponible: true

}
console.log("mi primer objeto producto:" , producto);
console.log(`mi primer objeto con template string ${producto}`, producto);
console.log("producto.precio:", producto.precio);

producto.categoria = "joya";
console.log("añadir categoria a producto:",producto);

//Cuando estas dentro del let producto se le da valor añadiendo dos puntos cuando estas
//fuera, como producto.categoria se le da valor con el =

//no es lo mismo una variable que una propiedad

//para eliminar propiedades osamos delete

delete producto.disponible;
console.log("borramos disponible a producto:" ,producto);

// let producto = producto.precio;
// console.log("creamos una variable a partir de la propiedad precio de producto:", precio);

//estamos accediendo a la propiedad precio del producto y almacenando el valor
//en una variable nueva precio

let nombreProducto = producto.casa;
console.log("almacenamos en una variable:", producto);

let {precio,categoria} = producto;
console.log("destructuring al precio:",precio);

let playa = {

    nombrePlaya: "malvarrosa",
    ubicacion: "valencia",
    recomendable: true,
    temperaturaAgua: 29

}

let {nombrePlaya, ubicacion, recomendable,temperaturaAgua} = playa;
console.log(`en la playa ${nombrePlaya} que esta en ${ubicacion} el agua esta a ${temperaturaAgua} te la recomiendo ${recomendable}`);


//DESTRUCTURING DE OBJETOS
//SACAR DE UNA ESTRUCTURA

//CREAMOS LA VARIABLE Y EXTRAE EL VALOR
//TODO EN UN SOLO PASO

//    CREA LA VARIABLE
  //  EXTRAE EL VALOR
    //LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD


// DESTRUCTURING AL PRECIO


//const {disponible} = producto;
//COMENTAR PREVIAMENTE NOMBREPRODUCTO
//const {disponible,precio,nombreProducto} = producto;//USO DE LLAVES, EN EL INTERIOR DE LA PROPIEDAD
// console.log("CREAMOS VARIABLE precio CON DESTRUCTURING:",precio);
//console.log(`CREAMOS VARIABLE disponible CON DESTRUCTURING: ${disponible}`);


Object.freeze(producto);
//si queremos congelar un objeto para que no se pueda modificar las propiedades  hacemos uso de object.freeze(producto)

//producto.congelado="intentamos congelarlo";
console.log("intento añadir una propiedad tras el freeze", producto);

//como sabemos si un objeto esta congelado?
// hacemos uso de un metodo para objetos
console.log("esta congelado??", Object.isFrozen(producto)) //pondra true si es asi

//FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
//producto.disponible = false; //NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD,
//PUES ESTÁ CONGELADO CON FREEZE

//CON EL METODO Object.freeze
  //  NO PODEMOS AÑADIR PROPIEDADES
    //NO PODEMOS BORRAR PROPIEDADES
    //NO PODEMOS MODIFICAR PROPIEDADES

//CON EL MÉTODO Object.Seal
  //  NO PODEMOS AÑADIR PROPIEDADES
    //NO PODEMOS BORRAR PROPIEDADES
   // SI PODEMOS MODIFICAR PROPIEDADES

   let medidas = {
    peso: 60,
    alto: 160,
    ancho: 60,
    profundidad: 60

   }

   Object.seal (medidas);
   medidas.ancho = 60;

   console.log("mostramos como se puede modificar con seal", medidas)


   //COMO UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

   //EL FIN ES NO MODIFICAR LOS OBJETOS ORIGINALES



let nuevoProducto = {...producto,...medidas};
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);

/*
const nuevoProducto = {...producto, ...medidas}; //ME AÑADE 
// A UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
// LOS OBJETOS, productos y medidas
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);


CREAMOS EL 04-arrays.js Y COMENTAMOS EL 03-objetos.js
*/