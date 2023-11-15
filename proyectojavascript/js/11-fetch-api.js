// VAMOS SIMULAR UNA PEQUEÑA BASE DE DATOS
// JAVASCRIPT NECESITA DE UN LENGUAJE DE BACK QUE
// LE DE UNA RESPUESTA A UNA CONSULTA DE LA BASE DE DATOS
// EN EL FORMATO 
// SON OBLIGATORIAS LAS COMILLAS DOBLES

*/



function obtenerEmpleados(){

    fetch("empleados.json") //fetch(url con la api)
        .then(resultado =>{
            return resultado.json() // VOY A TENER UNA RESPUESTA TIPO JSON
        })
        .then(datos =>{
            const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)


            });
        })
}
obtenerEmpleados();



//STATUS OK, ES QUE HA HECHO LA CONSULTA FETCH CORRECTAMENTE. STATUS 200

//OTRA FORMA DE HACERLO CON ASYNC/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
    console.log(empleados);
    empleados.forEach(empleado => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
    });

    // console.log(datos)

}

obtenerEmpleados2();

