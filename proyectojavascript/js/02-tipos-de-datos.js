const producto1= "juego de mesa el pueblo duerme";     
const producto2= String ("dooble");
const producto3= new String("uno");

console.log("PRODUCTO:", producto1);
console.log("PRODUCTO2 CON STRING:", producto2);
console.log("PRODUCTO3 CON NEW STRING:", producto3);


console.log("PRODUCTO:", typeof producto1);
console.log("PRODUCTO2 CON STRING:", typeof producto2);
console.log("PRODUCTO3 CON NEW STRING:", typeof producto3);

let numero100= "false"

let numero200= "200"

console.log("numero100", typeof numero100);
console.log("numero200", typeof numero200);

console.log("Metodo length:", producto1.length); 

console.log("Metodo indexof:", producto1.indexOf("duerme"));

console.log("metodo includes:", producto1.includes("duerme"));


const ejstring1 = "ejstring1";
const ejstring2 = "ejstring2";
const ejstring3 = "ejstring3";

console.log("con el metodo lenght:", ejstring1.length);
console.log(" metodo indexof:", ejstring2.indexOf("string2"));
console.log("metodo includes:", ejstring3.includes("ejstring3"));

let numero1=100;
let numero2=200.25;
let numero3= "200";       //tipo string
let numero4= 2/3;

console.log("TYPEOF NUMERO 1:", typeof numero1);
console.log("TYPEOF NUMERO 2:", typeof numero2);
console.log("TYPEOF NUMERO 3:", typeof numero3);
console.log("TYPEOF NUMERO 4:", typeof numero4);

console.log("numero 1 + numero 2:", numero1 + numero2);
console.log("numero 1 + numero 3:", numero1 - numero3);

console.log("NUMERO 1+2:", numero1+numero2);
console.log("NUMERO 1-2:", numero1-numero2);
console.log("NUMERO 1*2:", numero1*numero2);  
console.log("NUMERO 1/2:", numero1/numero2);  
console.log("NUMERO 1%2:", numero1%numero2);

let resultado = Math.random();
console.log("metodo math random():",resultado)

resultado = Math.round(Math.random()*30);
console.log("metodo aleatorio entre 0-30:", resultado)

let diametro=20; 

let area;

console.log("metodo de diametro y area:", area)

area=Math.PI*Math.pow(diametro/20,2)

//formula para crear un dado
// el dado va del 1,2,3,4,5,6
// por lo que la formula a seguir es Math.random() - que nos da un numero aleatorio. x5 +1 - de esta forma el numero aleatorio es hasta el 5
// y mas 1 para que sea 6 y no pueda salir el 0. Si sale 0 se le suma ese 1.
// y antes de la formula para que se redondee a un numero exacto se le añade Math-round (Math.random()*5+1)  - asi seria el resultado.*/



//EJERCICIO
//QUE RESULTADO TENDRÁ ESTA OPERACIÓN

20 + 30 * 2;

//EXACTAMENTE IGUAL QUE EN LAS REGLAS MATEMÁTICAS

//POR ORDEN DE PRIORIDAD
//()  PARÉNTESIS
//*,/ MULTIPLICACIONES Y DIVISIONES
//+,- SUMAS Y RESTAS



let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES",resultadoOrden);

let resultadoOrden2 = (20 + 30) * 2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES 2",resultadoOrden2);


let prenda1 = 120;
let prenda2 = 85;
let prenda3 = 24;

let descuento = 40;

let importe=(prenda1 + prenda2 + prenda3);
console.log("importe", importe);

let ahorro = importe * descuento/100;
console.log("total descuento", ahorro);

let total = importe - descuento;
console.log("total a pagar",total);


let meGusta=0;
meGusta+=15
meGusta-=6
console.log("ver me gusta", meGusta) ;


let nombre= "Belen";
let email= "belendg22@gmail.com";

console.log(nombre+email)
console.log(nombre+" "+email)
console.log("nombre: " + nombre +" email: " + email);

console.log(`nombre: ${nombre}`)

