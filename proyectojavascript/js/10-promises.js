// TRY CATCH

const numero1 = 20;
const numero3 = 40;

// en java script cuando tienes un fallo en una linea no te muestra el resto de codigo
// para ello se usa el try y el catch.

console.log(numero1);

try{
    console.log(numero2);

} catch (error){
    console.log("tienes un error en console log numero2");
}

console.log(numero3);

// solo se utiliza para situaciones criticas, por ejemplo conexsiones
// no se debe abusar de el.

// PROMISES
// refleja un valor que estara disponible ahora, en un futuro o nunca.

const autenticado = true;
const usuarioAutenticado = new Promise((resolve, reject) => {

                      // RESOLVE Y REJECT SE PASAN AUTOMATICAMENTE CON EL PROMISE
                      // RESOLVE FUNCION QUE SE EJECUTA CUANDO EL PROMISE SE CUMPLE
                      // REJECT NO SE CUMPLE

    if ( autenticado ) {
      resolve ("usuario autenticado");

       } else {
         reject ("no se puede iniciar sesion");
       }

});


/* EN LOS PROMISES EXISTEN 3 VALORES (que van a aparecer por consola)

PENDING: EL PROMISE NO SE HA CUMPLIDO PERO TAMPOCO SE HA RECHAZADO, ESTÁ EN ESPERA
FULFILLER: EL PROMISE SE HA CUMPLIDO
REJECT: SE HA RECHAZADO O NO SE PUDO CUMPLIR

RESULTADOS TIPICOS DE CONSULTA A UNA API */


usuarioAutenticado
    .then(function (resultado) { // SE EJECUTA CUANDO EL PROMISE SE CUMPLE
        console.log(resultado)
    })
    .catch(function (resultado) { // SE EJECUTA CUANDO EL PROMISE NO SE CUMPLE
        console.log(resultado)
    })
    console.log(usuarioAutenticado);


const boton = document.querySelector ("#boton");



// ALMACENAMOS ESE SELECTOR EN UNA VARIABLE PARA NO TENER
// QUE ESTAR CONSTANTEMENTE HACIENDO EL SELECTOR

// DOCUMENT PARA HACER REFERENCIA AL HTML
// EVENTOS EN JAVASCRIPT, CON ADDEVENTLISTENER
// AGREGA UN EVENTO A LA VARIABLE BOTON
// DOS VALORES, PRIMERO EL EVENTO
// DESPUES LO QUE QUIERO QUE HAGA AL CUMPLIRSE EL EVENTO



boton.addEventListener ("click", function (){

    console.log("DISTE CLICK")
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`));
})



if (Notification.permission === "granted") {

    new Notification("Esta es una notificacion", {
        icon: "ico.centro.png" ,

        body: "Notificacion bebe té" 

    })

}

// ASYNC/AWAIT

// SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
// NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

// LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
// LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
// EL RESTO DEL SITIO WEB

// SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
// HAGO USO DE ASYNC AWAIT



//VAMOS A CREAR FUNCIONES QUE SIMULEN LA CONSULTA A LA BASE DE DATOS, PARA OBTENER
//UNA RESPUESTA

// setTimeout(function () { //UNA VEZ PASADO 3 SEGUNDOS ME EJECUTA EL CUERPO DE LA FUNCION
//     console.log("Set time out actuando")
// }, 3000) //MILISEGUNDOS

// setInterval(function () { //ME EJECUTA EL CUERPO DE LA FUNCION CADA CIERTO INTERVALO
//     console.log("Set interval actuando")
// }, 4000)





function descargarNuevosClientes() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
    return new Promise(resolve => {
        console.log("Descargando clientes... espere...")

        setTimeout(() => { //PARA SIMULAR LA DESCARGA DE LA BASE DE DATOS
            resolve("Los Clientes fueron descargados")
        }, 5000)
    });
}



//HEMOS CREADO UN PROMISE, COMO HACEMOS USO DEL ASYN/AWAIT?

async function app() { // FUNCIÓN QUE ES ASÍNCRONA
    const resultadoAsync = await descargarNuevosClientes(); //ESPERAMOS A QUE descargarNuevosClienets HAYA FINALIZADO
    
    console.log(resultadoAsync)
    console.log("ESTE CODIGO SI SE BLOQUEA")

} 

//ESTE CODIGO SE EJECUTA EN SEGUNDO PLANO Y NO PARALIZA AL RESTO
//PUESTO QUE ESTA ES UNA CONSULTA CRITICA, SERÍA RECOMENDABLE INCLUIRLO
//DENTRO DE UN TRY CATCH

app();
console.log("ESTE CODIGO NO SE BLOQUEA")









// //!!!!!!!!!!!!!!!!!!!!!!
// //EJERCICIO
// //CREAR UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS, Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS







function descargarPedidos (){
    return new Promise (() => {
        console.log("Descargando pedidos...")
        
        setTimeout(() => {
            console.log("los pedidos fueron descargados")
        }, 3000)
    });
}

descargarPedidos();





// function descargarPedidos() { //VAMOS A CONTEMPLAR UNICAMENTE EL CASO DE EXITO, PARA FACILITAR EL EJEMPLO
//     return new Promise(() => {
//         console.log("Descargando pedidos...")

//         setTimeout(() => {
//             console.log("Los pedidos fueron descargados")
//         }, 3000)
//     });
// }

// descargarPedidos();

