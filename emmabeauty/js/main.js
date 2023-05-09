let nombreUsuario;
let uñas = "1";
let pestañas = "2";
let cejas = "3";
let volver = "VOLVER";

function nombre() {
    nombreUsuario = prompt("introduce tu nombre:")
    alert(`Bienvenid@ ${nombreUsuario}!`)
    console.log(nombreUsuario)
}
nombre()

function servicios() {
    let opcionSeleccionada = prompt(`Hola ${nombreUsuario}, seleccione el servicio \n 1:uñas \n 2:pestañas \n 3:cejas \n 4:salir`)
    console.log(opcionSeleccionada)
    while (opcionSeleccionada != 4 && opcionSeleccionada) {

        switch (opcionSeleccionada) {
            case uñas:
                tiposUñas();
                break;
            case pestañas:
                tiposPestañas();
                break;
            case cejas:
                tiposCejas()
                break;
            default:
                alert("Opcion incorrecta")
                break;
        }
        opcionSeleccionada = prompt(`Hola ${nombreUsuario}, seleccione el servicio \n 1:uñas \n 2:pestañas \n 3:cejas \n 4:salir`)
    }
}




function tiposUñas() {
    console.log("Apretaste uñas")
    let opcionSeleccionada = prompt("Escriba el servicio de uñas a realizarse \n -semipermanente \n -Esculpidas \n -soft gel \n -Volver")
    if (opcionSeleccionada.toUpperCase() === volver) {
        servicios()
    } else {
        alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
    }
}

function tiposPestañas() {
    console.log("Apretaste pestañas")
    let opcionSeleccionada = prompt("Escriba el servicio de Pestañas a realizarse \n -Lifting \n -Service pestañas \n -Extensiones \n -Volver")
    if (opcionSeleccionada.toUpperCase() === volver) {
        servicios()
    } else {
        alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
    }
}

function tiposCejas() {
    console.log("Apretaste cejas")
    let opcionSeleccionada = prompt("Escriba el servicio de cejas a realizarse \n -Perfilado \n -Henna \n -Laminado \n -Volver")
    if (opcionSeleccionada.toUpperCase() === volver) {
        servicios()
    } else {
        alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
    }
}