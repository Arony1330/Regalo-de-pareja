// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

// ---------- BOTONES PRINCIPALES ----------

const botonComenzar = document.getElementById("comenzar");
const botonContinuar = document.getElementById("continuar");

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const botonIrCarta = document.getElementById("irCarta");
const botonAbrirCarta = document.getElementById("abrirCarta");


// ---------- BOTONES DE FOTOGRAFÍAS ----------

const fotoAnterior = document.getElementById("fotoAnterior");
const fotoSiguiente = document.getElementById("fotoSiguiente");


// ---------- OTROS ELEMENTOS ----------
const videos =
    document.getElementById("videos");

const videoRecuerdo =
    document.getElementById("videoRecuerdo");

const fuenteVideo =
    document.getElementById("fuenteVideo");

const videoAnterior =
    document.getElementById("videoAnterior");

const videoSiguiente =
    document.getElementById("videoSiguiente");

const contadorVideos =
    document.getElementById("contadorVideos");

const tituloVideo =
    document.getElementById("tituloVideo");

const descripcionVideo =
    document.getElementById("descripcionVideo");

const continuarCarta =
    document.getElementById("continuarCarta");

const corazonInicio =
    document.getElementById("corazonInicio");

const imagenRecuerdo =
    document.getElementById("imagenRecuerdo");

const contadorFotos =
    document.getElementById("contadorFotos");

const contadorRecuerdo =
    document.getElementById("contadorRecuerdo");

const tituloRecuerdo =
    document.getElementById("tituloRecuerdo");

const fechaRecuerdo =
    document.getElementById("fechaRecuerdo");

const descripcionRecuerdo =
    document.getElementById("descripcionRecuerdo");

const mensajeFinalRecuerdos =
    document.getElementById("mensajeFinalRecuerdos");

const textoHistoria =
    document.getElementById("textoHistoria");

const contenidoCarta =
    document.getElementById("contenidoCarta");


// ==========================================
// SECCIONES
// ==========================================

const inicio =
    document.getElementById("inicio");

const historia =
    document.getElementById("historia");

const recuerdos =
    document.getElementById("recuerdos");

const carta =
    document.getElementById("carta");


// ==========================================
// RECUERDOS
// ==========================================

const listaRecuerdos = [

    {
        titulo: "El comienzo de todo❤️",

        fecha: "04 de agosto de 2024",

        descripcion:
            "Esa primera cita, no sabiamos que sería el inicio de algo tan bonito. Desde ese momento, todo comenzó a cambiar.",

        imagenes: [
            "images/comienzo/comienzo1.png",
            "images/comienzo/comienzo2.png"
        ]
    },


    {
        titulo: "Nuestra segunda cita 🥰",

        fecha: "18 de agosto de 2024",

        descripcion:
            "Uno de esos días que poco a poco hicieron que empezáramos a sentir algo más.",

        imagenes: [
            "images/Cita/cita1.png"
        ]
    },


    {
        titulo: "Cuando te pedí ser mi novia ❤️",

        fecha: "01 de septiembre de 2024",

        descripcion:
            "Uno de los días más importantes de mi vida. Ese día comenzamos oficialmente esta historia.",

        imagenes: [
            "images/noviazgo/noviazgo1.png",
            "images/noviazgo/noviazgo2.png",
            "images/noviazgo/noviazgo3.png"
        ]
    },


    {
        titulo: "Nuestro primer aniversario 🎉",

        fecha: "01 de septiembre de 2025",

        descripcion:
            "Nuestro primer año como pareja. Un año lleno de momentos que quiero seguir guardando y recordando siempre.",

        imagenes: [
            "images/primer aniversario/PA1.png",
            "images/primer aniversario/PA2.png"
        ]
    }

];


// ==========================================
// ESTADO DEL PROGRAMA
// ==========================================

// Recuerdo que estamos viendo
let recuerdoActual = 0;

// Fotografía que estamos viendo
let imagenActual = 0;
let videoActual = 0;


// ==========================================
// CAMBIAR DE SECCIÓN
// ==========================================

function mostrarSeccion(seccionMostrar, seccionOcultar) {

    seccionOcultar.classList.add("oculto");

    seccionMostrar.classList.remove("oculto");

}


// ==========================================
// MOSTRAR RECUERDO
// ==========================================

function mostrarRecuerdo() {

    const recuerdo =
        listaRecuerdos[recuerdoActual];


    // Título
    tituloRecuerdo.textContent =
        recuerdo.titulo;


    // Fecha
    fechaRecuerdo.textContent =
        recuerdo.fecha;


    // Descripción
    descripcionRecuerdo.textContent =
        recuerdo.descripcion;


    // Imagen
    imagenRecuerdo.src =
        recuerdo.imagenes[imagenActual];


    // Contador de recuerdos
    contadorRecuerdo.textContent =
        `Recuerdo ${recuerdoActual + 1} de ${listaRecuerdos.length}`;


    // Contador de fotografías
    contadorFotos.textContent =
        `${imagenActual + 1} / ${recuerdo.imagenes.length}`;


    // Reiniciar animación de la fotografía
    imagenRecuerdo.classList.remove("cambiarFoto");

    void imagenRecuerdo.offsetWidth;

    imagenRecuerdo.classList.add("cambiarFoto");

}


// ==========================================
// BOTÓN COMENZAR
// ==========================================

botonComenzar.addEventListener("click", function () {

    mostrarSeccion(historia, inicio);


    escribirHistoria(
        "Todo comenzó hace dos años. Desde aquel momento hemos compartido momentos increíbles, risas, aventuras y recuerdos que siempre voy a guardar conmigo."
    );

});


// ==========================================
// BOTÓN CONTINUAR
// ==========================================

botonContinuar.addEventListener("click", function () {

    mostrarSeccion(recuerdos, historia);

    recuerdoActual = 0;

    imagenActual = 0;

    mensajeFinalRecuerdos.classList.add("oculto");

    botonIrCarta.classList.add("oculto");

    mostrarRecuerdo();

});


// ==========================================
// FOTO SIGUIENTE
// ==========================================

fotoSiguiente.addEventListener("click", function () {

    const recuerdo =
        listaRecuerdos[recuerdoActual];


    imagenActual++;


    if (imagenActual >= recuerdo.imagenes.length) {

        imagenActual = 0;

    }


    mostrarRecuerdo();

});


// ==========================================
// FOTO ANTERIOR
// ==========================================

fotoAnterior.addEventListener("click", function () {

    const recuerdo =
        listaRecuerdos[recuerdoActual];


    imagenActual--;


    if (imagenActual < 0) {

        imagenActual =
            recuerdo.imagenes.length - 1;

    }


    mostrarRecuerdo();

});


// ==========================================
// RECUERDO SIGUIENTE
// ==========================================

botonSiguiente.addEventListener("click", function () {

    if (recuerdoActual < listaRecuerdos.length - 1) {

        recuerdoActual++;

        imagenActual = 0;

        mostrarRecuerdo();

    }

    else {

        mostrarSeccion(videos, recuerdos);

        videoActual = 0;

        mostrarVideo();

    }

});

// ==========================================
// IR A LA CARTA DESDE LOS VIDEOS
// ==========================================

continuarCarta.addEventListener("click", function () {

    mostrarSeccion(carta, videos);

});


// ==========================================
// RECUERDO ANTERIOR
// ==========================================

botonAnterior.addEventListener("click", function () {

    mensajeFinalRecuerdos.classList.add("oculto");

    botonIrCarta.classList.add("oculto");


    recuerdoActual--;


    if (recuerdoActual < 0) {

        recuerdoActual =
            listaRecuerdos.length - 1;

    }


    imagenActual = 0;


    mostrarRecuerdo();

});


// ==========================================
// IR A LA CARTA
// ==========================================

botonIrCarta.addEventListener("click", function () {

    mostrarSeccion(carta, recuerdos);

});


// ==========================================
// ABRIR CARTA
// ==========================================

botonAbrirCarta.addEventListener("click", function () {

    contenidoCarta.classList.remove("cartaOculta");

    botonAbrirCarta.classList.add("oculto");

});


// ==========================================
// CORAZÓN DE INICIO
// ==========================================

corazonInicio.addEventListener("click", function () {

    if (corazonInicio.textContent === "❤️") {

        corazonInicio.textContent = "💖";

    }

    else {

        corazonInicio.textContent = "❤️";

    }

});


// ==========================================
// TEXTO ANIMADO
// ==========================================

function escribirHistoria(texto) {

    textoHistoria.textContent = "";

    let indice = 0;


    const intervalo =
        setInterval(function () {

            textoHistoria.textContent +=
                texto[indice];

            indice++;


            if (indice >= texto.length) {

                clearInterval(intervalo);

            }

        }, 35);

}


// ==========================================
// CORAZONES FLOTANTES
// ==========================================

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.textContent = "❤️";


    corazon.classList.add(
        "corazonFlotante"
    );


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.animationDuration =
        (Math.random() * 3 + 4) + "s";


    document
        .getElementById("corazones")
        .appendChild(corazon);


    setTimeout(function () {

        corazon.remove();

    }, 7000);

}


setInterval(crearCorazon, 1200);


// ==========================================
// ESTADO INICIAL
// ==========================================

botonIrCarta.classList.add("oculto");


console.log(
    "❤️ Proyecto de aniversario cargado correctamente"
);

// ==========================================
// VIDEOS
// ==========================================

const listaVideos = [

    {
        titulo: "Cuando pintamos nuestro cuadros, no salio del todo bien al finall jaja ❤️",

        descripcion:
            "Se acuerda que esa vez ma paro la policia y me paso a la par ignorandome jajaja.",

        archivo:
            "video/video1.mp4"
    },


    {
        titulo: "Cuando me puso la diadema de la Hilda jaja🥰",

        descripcion:
            "Sin duda es un recuerdo especial.",

        archivo:
            "video/video2.mp4"
    },


    {
        titulo: "Todas nuestras aventuras ✨",

        descripcion:
            "Un año lleno de momentos que quiero seguir guardando.",

        archivo:
            "video/video3.mp4"
    },


    {
        titulo: "Momentos que quiero recordar ❤️",

        descripcion:
            "Pequeños momentos que significan muchísimo para mí.",

        archivo:
            "video/video4.mp4"
    },


    {
        titulo: "Me gusta enojarla jaja ❤️",

        descripcion:
            "Como que me queria pencasear ese dia jaja, pero no lo logro.",

        archivo:
            "video/video5.mp4"
    },


    {
        titulo: "Mientras este a su lado la seguire haciendo enojar jaja ❤️",

        descripcion:
            "Dos años juntos y tengo muchas ganas de seguir creando recuerdos juntos.",

        archivo:
            "video/video6.mp4"
    }

];

// ==========================================
// MOSTRAR VIDEO
// ==========================================

function mostrarVideo() {

    const video =
        listaVideos[videoActual];


    tituloVideo.textContent =
        video.titulo;


    descripcionVideo.textContent =
        video.descripcion;


    fuenteVideo.src =
        video.archivo;


    contadorVideos.textContent =
        `${videoActual + 1} / ${listaVideos.length}`;


    videoRecuerdo.load();

}

// ==========================================
// VIDEO SIGUIENTE
// ==========================================

videoSiguiente.addEventListener("click", function () {

    if (videoActual < listaVideos.length - 1) {

        videoActual++;

        mostrarVideo();

    }

});

// ==========================================
// VIDEO ANTERIOR
// ==========================================

videoAnterior.addEventListener("click", function () {

    if (videoActual > 0) {

        videoActual--;

        mostrarVideo();

    }

});