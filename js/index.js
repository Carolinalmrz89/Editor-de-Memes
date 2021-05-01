"use strict"
//CONTAINER
const container = document.getElementById("container");

//BOTONES NAV
const botonImg = document.getElementById("boton-img");
const botonTexto = document.getElementById("boton-texto");
const botonModo = document.getElementById("boton-modo");

//CAMBIAR PANEL EN SECTION ASIDE
const panelAside = document.getElementById("paneles");
const panelImg = document.getElementById("img-panel");
const panelTexto = document.getElementById("texto-panel");

botonImg.addEventListener("click", ()=>{
    panelTexto.classList.add("ocultar-panel");
    panelImg.classList.remove("ocultar-panel");
});
botonTexto.addEventListener("click", ()=>{
    panelImg.classList.add("ocultar-panel");
    panelTexto.classList.remove("ocultar-panel");
});

//MODIFICAR TOP TEXT
const topTitle = document.querySelector(".title-top");
const topText = document.getElementById("top-text");

topText.addEventListener("input", () =>{
    topTitle.textContent = topText.value;
});

//OCULTAR TOP TEXT
const textoSuperior = document.getElementById("textoSuperior");

textoSuperior.addEventListener("change", () =>{
    topTitle.classList.toggle("ocultar-panel");
});

//MODIFICAR BOTTOM TEXT
const bottomTitle = document.querySelector(".title-bottom");
const bottomText = document.getElementById("bottom-text");

bottomText.addEventListener("input", () =>{
    bottomTitle.textContent = bottomText.value;
});

//OCULTAR BOTTOM TEXT
const textoInferior = document.getElementById("textoInferior");

textoInferior.addEventListener("change", () =>{
    bottomTitle.classList.toggle("ocultar-panel");
});

//AGREGAR ESTILO TÍTULOS
const selectFuente = document.getElementById("select-fuente");
const selectTamanioFuente = document.getElementById("tamanio-fuente");

selectFuente.addEventListener("input", () =>{
    topTitle.style.fontFamily = selectFuente.value;
    bottomTitle.style.fontFamily = selectFuente.value;
});
selectTamanioFuente.addEventListener("input", () =>{
    topTitle.style.fontSize = selectTamanioFuente.value;
});

//AGREGAR ESTILO COLOR TÍTULOS
const colorFuente = document.getElementById("color-fuente");
const colorFondoFuente = document.getElementById("color-fondo");

colorFuente.addEventListener("input", () =>{
    topTitle.style.color = colorFuente.value;
    bottomTitle.style.color = colorFuente.value;
});
colorFondoFuente.addEventListener("input", () =>{
    topTitle.style.backgroundColor = colorFondoFuente.value;
    bottomTitle.style.backgroundColor = colorFondoFuente.value;
});

//FONDO TRANSPARENTE
/*
const fondoTransparente = document.getElementById("fondo-transparente");

fondoTransparente.addEventListener("click", () =>{
    topTitle.classList.toggle("fondo-transparente");
    bottomTitle.classList.toggle("fondo-transparente");
});  */

  
//MODO CLARO - MODO OSCURO
const body = document.querySelector("body");
const textoBotonModo = document.querySelector(".texto-modo");

botonModo.addEventListener("click", () =>{
    body.classList.toggle("modoOscuro");
    body.classList.toggle("modoClaro");
    if(textoBotonModo.textContent == "Modo oscuro"){
        textoBotonModo.textContent = "Modo claro";
    }else{
        textoBotonModo.textContent = "Modo oscuro";
    }
});


/**
 boton.addEventListener("click",()=>{
            body.classList.toggle("modoOscuro");
            body.classList.toggle("modoClaro");
            if(textInfo.textContent == "Modo Oscuro"){
              textInfo.textContent = "Modo Claro";
            }else{
              textInfo.textContent = "Modo Oscuro";
            }
        })
 */





































//El botonModo tiene que agregar y quitar la clase .claro al contenedor pricipal