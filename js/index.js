"use strict"
// CONTAINER
const container = document.getElementById("container");

//BOTONES NAV
const botonImg = document.getElementById("boton-img");
const botonTexto = document.getElementById("boton-texto");
const botonModo = document.getElementById("boton-modo");

//PANEL EN SECTION ASIDE
const panelAside = document.getElementById("paneles");
const panelImg = document.getElementById("img-panel");
const panelTexto = document.getElementById("texto-panel");

botonImg.addEventListener("click", (event)=>{
    panelTexto.classList.add("ocultar-panel");
    panelImg.classList.remove("ocultar-panel");
});

botonTexto.addEventListener("click", (event)=>{
    panelImg.classList.add("ocultar-panel");
    panelTexto.classList.remove("ocultar-panel");
});


//El botonModo tiene que agregar y quitar la clase .claro al contenedor pricipal