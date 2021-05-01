"use strict"
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
const selectTamanioFuente = document.getElementById("tamanio-fuente");

selectFuente.addEventListener("input", () =>{
    topTitle.style.fontFamily = selectFuente.value;
    bottomTitle.style.fontFamily = selectFuente.value;
});
selectTamanioFuente.addEventListener("input", () =>{
    topTitle.style.fontSize = selectTamanioFuente.value;
});

//ESTILO COLOR TEXTOS
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
  








































//El botonModo tiene que agregar y quitar la clase .claro al contenedor pricipal