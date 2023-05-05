let nombreUsuario;
let uñas = "1"
let pestañas = "2"
let cejas = "3"

function nombre() {
    nombreUsuario = prompt("introduce tu nombre:")
    alert(`Bienvenid@ ${nombreUsuario}!`)
    console.log(nombreUsuario)
}
nombre()

function servicios() {
    let opcionSeleccionada = prompt(`Hola ${nombreUsuario}, seleccione el servicio \n 1:uñas \n 2:pestañas \n 3:cejas \n 4:salir`)
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
            console.log("Apretaste salir")
            break;
    }
}

function tiposUñas() {
    console.log("Apretaste uñas")
    let opcionSeleccionada = prompt("Escriba el servicio de uñas a realizarse")
    alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
}

function tiposPestañas() {
    console.log("Apretaste pestañas")
    let opcionSeleccionada = prompt("Escriba el servicio de Pestañas a realizarse")
    alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
}

function tiposCejas() {

    console.log("Apretaste cejas")
    let opcionSeleccionada = prompt("Escriba el servicio de cejas a realizarse")
    alert(`${nombreUsuario}, comuniquese para sacar su turno de ${opcionSeleccionada} `)
}