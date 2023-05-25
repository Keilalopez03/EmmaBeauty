let nombreUsuario;
const uñas = "1";
const pestañas = "2";
const cejas = "3";
const carritoNum = "4";
const salir = "5";
const volver = "VOLVER";
const carritoPalabra = "CARRITO";
const carrito = [];
//funcion bienvenida al usuario y solicitud de nombre
function nombre() {
    nombreUsuario = prompt("Introduce tu nombre:")
    alert(`Bienvenid@ ${nombreUsuario}!`)
    console.log(nombreUsuario)
}
nombre()
//funcion para seleccionar opcion de servicios,menu principal del prompt
function servicios() {
    let opcionSeleccionada = prompt(`Hola ${nombreUsuario}, Seleccione el Numero de servicio \n 1:Uñas \n 2:Pestañas \n 3:Cejas \n 4:Ver carrito \n 5:Salir`)
    console.log(opcionSeleccionada)
    while (opcionSeleccionada != salir && opcionSeleccionada) {
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
            case carritoNum:
                verCarrito()
                break;
            default:
                alert("Opcion incorrecta")
                break;
        }
        opcionSeleccionada = prompt(`Hola ${nombreUsuario},  Seleccione el servicio \n 1:Uñas \n 2:Pestañas \n 3:Cejas \n 4:Ver carrito \n 5:Salir`)
    }
}
//Arrays con servicios
let ServiciosUñas = [{
        id: 1,
        servicio: "Semipermanente",
        precio: 2000,
        tiempo: 2.5
    },
    {
        id: 2,
        servicio: "Kapping",
        precio: 2500,
        tiempo: 3
    },
    {
        id: 3,
        servicio: "Esculpidas",
        precio: 4000,
        tiempo: 4.5
    },
    {
        id: 4,
        servicio: "Manicuria Rusa",
        precio: 1500,
        tiempo: 2
    }
];
let ServiciosPestañas = [{
        id: 1,
        servicio: "lifting",
        precio: 2500,
        tiempo: 3
    },
    {
        id: 2,
        servicio: "service de pestañas",
        precio: 2000,
        tiempo: 2
    },
    {
        id: 3,
        servicio: "extensiones",
        precio: 3000,
        tiempo: 4
    },
];
let ServiciosCejas = [{
        id: 1,
        servicio: "perfilado",
        precio: 1000,
        tiempo: 0.50
    },
    {
        id: 2,
        servicio: "henna",
        precio: 1500,
        tiempo: 1
    },
    {
        id: 3,
        servicio: "laminado",
        precio: 3000,
        tiempo: 2
    },
];
function tiposUñas() {
    let textoOpciones = 'Escriba el servicio de uñas para añadir al carrito \n \n';
    ServiciosUñas.map((servicios) => {
        textoOpciones = `${textoOpciones}${servicios.id}-${servicios.servicio} ---> 🕘Tiempo aprox: ${servicios.tiempo}HS, 💵Precio: $${servicios.precio} \n`;
    });
    let opcionSeleccionada = prompt(textoOpciones + '\n -Volver \n --Escribe "Carrito" para ver tus servicios seleccionados.');
    if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === volver) {
        servicios();
    } else if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === carritoPalabra) {
        verCarrito();
    } else {
        const servicioSeleccionado = ServiciosUñas.find((servicio) => {
            return servicio.id == opcionSeleccionada;
        });
        if (servicioSeleccionado) {
            carrito.push(servicioSeleccionado);
            alert(`Se agregó el servicio al carrito correctamente.`);
        } else {
            alert(`El servicio seleccionado no es valido.`);
        }
    }
}
function tiposPestañas() {
    let textoOpciones = 'Escriba el servicio de Pestañas para añadir al carrito \n \n';
    ServiciosPestañas.map((servicios) => {
        textoOpciones = `${textoOpciones}${servicios.id}-${servicios.servicio} ---> 🕘Tiempo aprox: ${servicios.tiempo}HS, 💵Precio: $${servicios.precio} \n`;
    });
    let opcionSeleccionada = prompt(textoOpciones + '\n -Volver \n --Escribe "Carrito" para ver tus servicios seleccionados.');
    if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === volver) {
        servicios();
    } else if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === carritoPalabra) {
        verCarrito();
    } else {
        const servicioSeleccionado = ServiciosPestañas.find((servicio) => {
            return servicio.id == opcionSeleccionada;
        });
        if (servicioSeleccionado) {
            carrito.push(servicioSeleccionado);
            alert(`Se agregó el servicio al carrito correctamente.`);
        } else {
            alert(`El servicio seleccionado no es valido.`);
        }
    }
}
function tiposCejas() {
    let textoOpciones = 'Escriba el servicio de Cejas para añadir al carrito \n \n';
    ServiciosCejas.map((servicios) => {
        textoOpciones = `${textoOpciones}${servicios.id}-${servicios.servicio} ---> 🕘Tiempo aprox: ${servicios.tiempo}HS, 💵Precio: $${servicios.precio} \n`;
    });
    let opcionSeleccionada = prompt(textoOpciones + '\n -Volver \n --Escribe "Carrito" para ver tus servicios seleccionados.');
    if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === volver) {
        servicios();
    } else if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === carritoPalabra) {
        verCarrito();
    } else {
        const servicioSeleccionado = ServiciosCejas.find((servicio) => {
            return servicio.id == opcionSeleccionada;
        });
        if (servicioSeleccionado) {
            carrito.push(servicioSeleccionado);
            alert(`Se agregó el servicio al carrito correctamente.`);
        } else {
            alert(`El servicio seleccionado no es valido.`);
        }
    }
}
function verCarrito() {
    console.log("Apretaste verCarrito")
    let textoCarrito = "Servicios seleccionados para realizarse: \n \n";
    let totalTiempo = 0;
    let totalDinero = 0;
    if (carrito.length === 0) {
        textoCarrito = textoCarrito + '-No hay elementos en el carrito.'
    } else {
        carrito.map((servicioAgregado) => {
            totalTiempo += servicioAgregado.tiempo;
            totalDinero += servicioAgregado.precio;
            textoCarrito = `${textoCarrito} -${servicioAgregado.servicio} $${servicioAgregado.precio} \n`;
        });
    }
    textoCarrito = `${textoCarrito} \n 🕘 Tiempo Total: ${totalTiempo}HS    💵Dinero Total: $${totalDinero}\n \n *Escriba volver para regresar al menu principal`;
    let opcionSeleccionada = prompt(textoCarrito);
    if (opcionSeleccionada && opcionSeleccionada.toUpperCase() === volver) {
        servicios();
    };
}