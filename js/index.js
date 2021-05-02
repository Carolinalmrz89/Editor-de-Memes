"use strict";

//CONTAINER
const container = document.getElementById("container");

//BOTONES NAV
const botonImg = document.getElementById("boton-img");
const botonTexto = document.getElementById("boton-texto");
const botonModo = document.getElementById("boton-modo");

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

//CAMBIAR PANEL EN SECTION ASIDE
const panelAside = document.getElementById("paneles");
const panelImg = document.getElementById("img-panel");
const panelTexto = document.getElementById("texto-panel");

botonImg.addEventListener("click", ()=>{
    panelTexto.classList.add("ocultar");
    panelImg.classList.remove("ocultar");
});
botonTexto.addEventListener("click", ()=>{
    panelImg.classList.add("ocultar");
    panelTexto.classList.remove("ocultar");
});


//FUNCIONALIDADES EN PANEL DE TEXTO

//MODIFICAR TOP TEXT
const topTitle = document.querySelector(".title-top");
const topText = document.getElementById("top-text");

topText.addEventListener("input", () =>{
    topTitle.innerText = topText.value;
});

//OCULTAR TOP TEXT
const textoSuperior = document.getElementById("textoSuperior");

textoSuperior.addEventListener("change", () =>{
    if(textoSuperior.checked){
        topTitle.classList.add("ocultar");
        topText.disabled = true;
    }else{
        topTitle.classList.remove("ocultar");
        topText.disabled = false;
    }
});

//MODIFICAR BOTTOM TEXT
const bottomTitle = document.querySelector(".title-bottom");
const bottomText = document.getElementById("bottom-text");

bottomText.addEventListener("input", () =>{
    bottomTitle.innerText = bottomText.value;
});

//OCULTAR BOTTOM TEXT
const textoInferior = document.getElementById("textoInferior");

textoInferior.addEventListener("change", () =>{
    if(textoInferior.checked){
        bottomTitle.classList.add("ocultar");
        bottomText.disabled = true;
    }else{
        bottomTitle.classList.remove("ocultar");
        bottomText.disabled = false;
    }
});

//ESTILO FUENTE TEXTOS
const selectFuente = document.getElementById("select-fuente");

selectFuente.addEventListener("input", () =>{
    topTitle.style.fontFamily = selectFuente.value;
    bottomTitle.style.fontFamily = selectFuente.value;
});

//TAMAÑO DE TEXTO
const tamanioFuente = document.getElementById("tamanio-fuente");

tamanioFuente.addEventListener("input", () =>{
    const selectTamanioFuente = tamanioFuente.value;
    topTitle.style.fontSize = `${selectTamanioFuente}px`;
    bottomTitle.style.fontSize = `${selectTamanioFuente}px`;
});

//ALINEACIÓN DE TEXTO
const botonLeft = document.getElementById("btn-left");
const botonCenter = document.getElementById("btn-center");
const botonRight = document.getElementById("btn-right");

botonLeft.addEventListener("click", () =>{
    topTitle.style.textAlign = "left";
    bottomTitle.style.textAlign = "left";
});

botonCenter.addEventListener("click", () =>{
    topTitle.style.textAlign = "center";
    bottomTitle.style.textAlign = "center";
});

botonRight.addEventListener("click", () =>{
    topTitle.style.textAlign = "right";
    bottomTitle.style.textAlign = "right";
});

//CONTORNO DE TEXTO

const botonNinguno = document.getElementById("btn-ninguno");
const botonClaro = document.getElementById("btn-claro");
const botonOscuro = document.getElementById("btn-oscuro");

botonNinguno.addEventListener("click", () =>{
    topTitle.style.textShadow = "none";
    bottomTitle.style.textShadow = "none";
});

botonClaro.addEventListener("click", () =>{
    topTitle.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
    bottomTitle.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
});

botonOscuro.addEventListener("click", () =>{
    topTitle.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
    bottomTitle.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
});


//ESTILO COLOR Y FONDO TEXTOS
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
const fondoTransparente = document.getElementById("fondo-transparente");

fondoTransparente.addEventListener("change", () =>{
    if(fondoTransparente.checked){
        topTitle.style.backgroundColor = 'transparent'; 
    }else{
        topTitle.style.backgroundColor = colorFondoFuente.value;
    }
});

fondoTransparente.addEventListener("change", () =>{
    if(fondoTransparente.checked){
        bottomTitle.style.backgroundColor = 'transparent'; 
    }else{
        bottomTitle.style.backgroundColor = colorFondoFuente.value;
    }
});

//ESPACIADO DE TEXTO
const espaciado = document.getElementById("texto-espaciado");

espaciado.addEventListener("input", () =>{
    const textoEspaciado = espaciado.value;
    topTitle.style.padding = `${textoEspaciado}px 20px`;
    bottomTitle.style.padding = `${textoEspaciado}px 20px`;
});

//INTERLINEADO DE TEXTO
const interlineado = document.getElementById("texto-interlineado");

interlineado.addEventListener("input", () =>{
    topTitle.style.lineHeight = interlineado.value;
    bottomTitle.style.lineHeight = interlineado.value;
});
  








































//El botonModo tiene que agregar y quitar la clase .claro al contenedor pricipal