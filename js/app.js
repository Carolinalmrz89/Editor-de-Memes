"use strict"

//PANEL EN SECTION ASIDE
const panelAside = document.getElementById("paneles");
const botonImg = document.getElementById("boton-img");
const botonTexto = document.getElementById("boton-texto");
const panelImg = document.getElementById("img-panel");
const panelTexto = document.getElementById("texto-panel");
const botonModo = document.getElementById("boton-modo");

botonImg.addEventListener("click", (event)=>{
    panelAside = panelImg;
    panelTexto.classList.toggle("ocultal-panel");
});

botonTexto.addEventListener("click", (event)=>{
    panelAside = panelTexto;
    panelImg.classList.toggle("ocultal-panel");
});