let nombreUsuario;
const uñas = "1";
const pestañas = "2";
const cejas = "3";
const carritoNum = "4";
const salir = "5";
const volver = "VOLVER";
const carritoPalabra = "CARRITO";
let carritoVar = {totalItems: 0, carrito: []};
//Arrays con servicios
let ServiciosUñas = [{
    id: 1,
    servicio: "Semipermanente",
    precio: 2000,
    tiempo: 2.5,
    img: '../img/faviconuña.png',
},
{
    id: 2,
    servicio: "Kapping",
    precio: 2500,
    tiempo: 3,
    img: '../img/faviconuña.png',
},
{
    id: 3,
    servicio: "Esculpidas",
    precio: 4000,
    tiempo: 4.5,
    img: '../img/faviconuña.png',
},
{
    id: 4,
    servicio: "Manicuria Rusa",
    precio: 1500,
    tiempo: 2,
    img: '../img/faviconuña.png',
}
];
let ServiciosPestañas = [{
    id: 1,
    servicio: "Lifting",
    precio: 2500,
    tiempo: 3,
    img: '../img/faviconpestaña.png',
    },
{
    id: 3,
    servicio: "Extensiones",
    precio: 3000,
    tiempo: 4,
    img: '../img/faviconpestaña.png',
},
];
let ServiciosCejas = [{
    id: 1,
    servicio: "perfilado",
    precio: 1000,
    tiempo: 0.50,
    img: '../img/faviconceja.png',
},
{
    id: 2,
    servicio: "henna",
    precio: 1500,
    tiempo: 1,
    img: '../img/faviconceja.png',
},
{
    id: 3,
    servicio: "laminado",
    precio: 3000,
    tiempo: 2,
    img: '../img/faviconceja.png',
},
];

if (localStorage.getItem("name")) {
    nombreUsuario = localStorage.getItem("name");
    var closeSesionButton = document.getElementById("closeSesion");
    closeSesionButton.style.display = "block";
    saludoPrincipalPage();
    carritoVar = localStorage.getItem("carrito");
} else {
    nombre();
}

function nombre() {
    //Aca primero buscamos el elemento con id "miModal" presente en el HTML
    var modal = document.getElementById("miModal");
    modal.style.display = "block";
    //Aca creamos el Backdrop, para que se vea oscuro el fondo, no deje scrollear, ni tampoco deje hacer click.
    var backdrop = document.createElement("div");
    //aca le agregamos las clases al backdrop que controlaran su estetica y comportamiento
    backdrop.classList.add("modal-backdrop", "fade", "show");
    //aca con el appendChild es donde decimos "una vez creado el backdrop, y dado un estilo" lo colocamos en el DOM o HTML
    // hacemos que el "backdrop" aparezca adentro del "body"
    document.body.appendChild(backdrop);
    document.body.classList.add("modal-open");
    //aca vamos a buscar por su id el "input de nombre" que es donde el usuario escribe su nombre, y el boton "guardar".
    var inputNombre = document.getElementById("inputNombre");
    var btnGuardar = document.getElementById("btnGuardar");
    //aca le agregamos un evento de escucha de "click", osea va a estar atento escuchando todo el tiempo si el usuario hizo click.
    //en caso de hacer click se ejecuta la funcion que le pasemos como segundo parametro
    btnGuardar.addEventListener("click", function () {
        var nombre = inputNombre.value;
        nombreUsuario = nombre;
        localStorage.setItem("carrito", JSON.stringify(carritoVar));
        const closeSesionButton = document.getElementById("closeSesion");
        closeSesionButton.style.display = "block";
        localStorage.setItem("name", nombre);
        console.log("Nombre guardado:", nombre);
        //de aca para abajo se encarga de comenzar a desarmar el modal y el backdrop
        document.body.classList.remove("modal-open");
        document.body.removeChild(backdrop);
        modal.style.display = "none";
        //esta funcion va a actualizar el texto del banner con el nombre que ya tenemos guardado en la variable.
        saludoPrincipalPage();
    });
}

function cerrarSesion() {
    localStorage.removeItem("name");
    localStorage.removeItem("carrito");
    carritoVar = {totalItems: 0, carrito: []};
    const closeSesionButton = document.getElementById("closeSesion");
    closeSesionButton.style.display = "none";
    nombreUsuario = null;
    saludoPrincipalPage();
    nombre();
}

function saludoPrincipalPage() {
    const textoBanner = document.getElementsByClassName('texto-banner')[0];
    if (textoBanner && nombreUsuario) {
        textoBanner.innerHTML = `Hola ${nombreUsuario} bienvenid@ a Emma Beauty`
    } else if(textoBanner){
        textoBanner.innerHTML = `Bienvenid@ a Emma Beauty`
    }
}
//funcion para seleccionar opcion de servicios,menu principal 
function servicios() {
    var element = document.getElementById("targetElement");
    var rect = element.getBoundingClientRect();
    var scrollOffset = rect.top + rect.height / 2 - window.innerHeight / 2 + 50;
    window.scrollTo({
        top: scrollOffset,
        behavior: "smooth"
    });
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    const tarjetaContenedor = document.getElementById('card-service-container');
    if(tarjetaContenedor) {
        tarjetaContenedor.innerHTML = '';
        let totalPrice = 0;
        let totalTime = 0;
        JSON.parse(localStorage.getItem("carrito")).carrito.map((servicio) => {
            totalPrice += servicio.precio;
            totalTime += servicio.tiempo;

            const cardContainer = document.createElement("div");
            const cardSmallContent = document.createElement("div");
            const cardSmallImage = document.createElement("div");
            const serviceLogoImg = document.createElement("img");
            const cardSmallText = document.createElement("div");
            const cardSmallTitle = document.createElement("h5");
            const cardSmallInfoPrice = document.createElement("p");
            const cardSmallInfoHour = document.createElement("p");
            const cardSmallDelete = document.createElement("div");
            const deleteButton = document.createElement("button");
            const deleteImg = document.createElement("img");

            cardContainer.classList.add("card-small");
            cardSmallContent.classList.add("card-small-content");
            cardSmallImage.classList.add("card-small-image");
            serviceLogoImg.classList.add("mini-imagen");
            serviceLogoImg.src = servicio.img;
            cardSmallText.classList.add("card-small-text");
            cardSmallTitle.classList.add("card-small-title");
            cardSmallTitle.innerHTML = servicio.servicio;
            cardSmallInfoPrice.classList.add("card-small-info");
            cardSmallInfoPrice.innerHTML = 'Precio: $' + servicio.precio;
            cardSmallInfoHour.classList.add("card-small-info");
            cardSmallInfoHour.innerHTML = 'Hora aprox: ' + servicio.tiempo + 'HS';
            cardSmallDelete.classList.add("card-small-delete");
            deleteButton.classList.add("delete-button");
            deleteImg.src = '../img/icons8-basura-llena-24.png';
            deleteImg.classList.add("delete-button-img");

            deleteButton.appendChild(deleteImg);
            cardSmallDelete.appendChild(deleteButton);
            cardSmallText.appendChild(cardSmallTitle);
            cardSmallText.appendChild(cardSmallInfoHour);
            cardSmallText.appendChild(cardSmallInfoPrice);
            cardSmallImage.appendChild(serviceLogoImg);
            cardSmallContent.appendChild(cardSmallImage);
            cardSmallContent.appendChild(cardSmallText);
            cardSmallContent.appendChild(cardSmallDelete);
            cardContainer.appendChild(cardSmallContent);
            tarjetaContenedor.appendChild(cardContainer);
        });

        const totalPriceElement = document.getElementById('price-total');
        totalPriceElement.innerHTML = '$' + totalPrice;
        const totalTimeElement = document.getElementById('time-estimated');
        totalTimeElement.innerHTML = totalTime + 'HS';
    }

}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function finalizarPedido() {
    window.location.href = "https://api.whatsapp.com/send?phone=TUNUMERO&text=Hola,%20quiero%20hacer%20un%20pedido"; // Reemplaza TUNUMERO con tu número de WhatsApp
}

function vaciarCarrito() {

}

function eliminarServicio(event) {
}