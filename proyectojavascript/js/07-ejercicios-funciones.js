
// REPASO ULTIMO DÍA


// for(let i=0; i<10; i++)             ///////FOR
// {
//     console.log(i)
// }


// let i=0;                            ///////WHILE
// while(i<10){
//     console.log(i);
//     i++;
// }


// let i=0;                            ////////DO WHILE
// do{
//     console.log(i);
//     i++;
// }while(i<10)






1

// función que invierta una cadena.
// F: INVERTIR
// P: CADENA



function invertir (cadena) {
//  return cadena;
return cadena.split("hola").reverse().join("hola");
 
}
console.log("invertido", invertir)
invertir ("hola");

// ?????






2

// función que concatene dos cadenas.
// F: CONCATENAR
// P: CADENA1, CADENA2

function CONCATENAR(cadena1, cadena2){
console.log(cadena1+cadena2)
}
CONCATENAR("belen","sorbito")





3

// función que determine si una cadena contiene una letra.
// F: CONTIENE
// P: CADENA, LETRA

// function contiene (CADENA, LETRA) {

//     let LETRA ="letra";
//     let CADENA ="letra";

//     console.log("contiene la letra");
// }

// string y lenght pero tengo dudas ???






4

// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY

let num=[1,2,3,4,5,6,7,8,9,10];
function maxnum (array){
   console.log (Math.max(...array));

}

maxnum(num)







5

// función que encuentre el número más pequeño en un array.
// F: MINNUM
// P: ARRAY

let NUM = [1,2,3,4,5,6,7,8,9,10];
function minnum (array){
    console.log (Math.min (...array));

}
minnum(NUM)








// EJERCICIO

// función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
// F: NUMBOOLEANOS
// P: ARRAY, VALOR

function numbooleanos(array, valor){


}








// EJERCICIO

// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY
function arraynumero (array){

}






// EJERCICIO

// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2

function numaleatorio(n1, n2) {
    return Math.floor(Math.random() * (n1 - n2) + n2);
  }
  
  let numeroAleatorio = numaleatorio(100, 1);
  
  console.log(numeroAleatorio);

// math.floor. Devuelve el máximo entero menor o igual a un número.
// math.ramdom devuelve un numero aleatorio
// la formula seria el maximo menos el minimo mas 1 mas el min.








// EJERCICIO

// función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
// F: AREATRIAGULO
// P: BASE,ALTURA
function areatriangulo (base,altura){
    return (base*altura)/2;

}
let base= 6;
let altura=4;
let area= areatriangulo(base,altura);
console.log(area);






// EJERCICIO

// función que convierta grados Celsius a Fahrenheit.
// F: GRADOS
// P: CELSIUS
function grados (celsius){
   let formula =(celsius * 9/5) + 32;
   return formula;
}
let celsius=20;
let resultoCelsius= grados(celsius);
console.log(resultadoCelsius);





// EJERCICIO

// función que determine si un año es bisiesto.
// F: BISIESTO
// P: DIAS

function bisiesto (dias){
    if(añoActual === dias){
        console.log("año es bisiesto");

    } else{
        console.log("es un año no bisiesto");
    }

}
bisiesto(366)







// EJERCICIO

// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO

let contadorVocales=0;
function vocales (texto){
    
        for(let i=0;i<texto.length;i++){
            if(texto[i]==="a"){
                contadorVocales++;
            }
            if(texto[i]==="e"){
                contadorVocales++;
            }
            if(texto[i]==="i"){
                contadorVocales++;
            }
            if(texto[i]==="o"){
                contadorVocales++;
            }
            if(texto[i]==="u"){
                contadorVocales++;
            }
        }
        console.log(contadorVocales);
}

vocales("Martaeiou")






// EJERCICIO

// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO
function palabras (texto){

}







// EJERCICIO

// función que elimine los elementos duplicados de un array.
// F: ELIMINADUPLICADOS
// P: ARRAY
function eliminaduplicados (array){

}






// EJERCICIO

// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY
function ordenararray (array){

}





// EJERCICIO

// función que muestre la tabla de multiplicar de un numero.
// F: TABLAMULTIPLICAR
// A: NUMERO
function tablamultiplicar (){

}





// EJERCICIO

// función que tome un número del 1 al 12 y devuelva el nombre del mes 
// correspondiente utilizando una declaración switch
// F: NOMBREMES
// P: NUMMES
function nombremes (nummes){

}




// EJERCICIO

// función que determine si una contraseña es segura basándose en 
// longitud>8, 
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA
function contraseñasegura (contraseña){

}







// EJERCICIO

// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: LETRA1, LETRA2
function reemplazar (letra1, letra2){
 return letra1*letra2
}
reemplazar (a, e)
let sustituir = letra1;
let sustituir2 = letra2;
console.log(reemplazar);

