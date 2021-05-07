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
const panelImg = document.getElementById("img-panel");
const panelTexto = document.getElementById("texto-panel");
const botonSalirImg = document.getElementById("btn-salir-img");
const botonSalirTexto = document.getElementById("btn-salir-texto");


botonImg.addEventListener("click", ()=>{
    // panelTexto.classList.add("ocultar");
    panelImg.style.zIndex = "4";
    panelImg.style.visibility = "visible";
    panelTexto.style.zIndex = "3";
    botonSalirImg.style.visibility = "visible";
    
    // panelImg.classList.remove("ocultar");
});
botonTexto.addEventListener("click", ()=>{
    panelTexto.style.zIndex = "4";
    panelTexto.style.visibility = "visible";
    panelImg.style.zIndex = "3";
    botonSalirTexto.style.visibility = "visible";
    // panelImg.classList.add("ocultar");
    // panelTexto.classList.remove("ocultar");
});

//MOBILE
//VERSIÓN MOBILE
const cerrarPaneles = () =>{
    panelImg.style.zIndex = "0";
    panelTexto.style.zIndex = "0";
    panelImg.style.visibility = "hidden";
    panelTexto.style.visibility = "hidden";
};

botonSalirImg.addEventListener("click", cerrarPaneles);
botonSalirTexto.addEventListener("click", cerrarPaneles);


//FUNCIONALIDADES EN PANEL DE IMAGEN

//AGREGAR URL
const imgMeme = document.querySelector(".img-meme");
const imgUrl = document.getElementById("url-img");

imgUrl.addEventListener("input", () =>{
    const addUrl = imgUrl.value;
    imgMeme.style.backgroundImage = `url(${addUrl})`;
});

//COLOR FONDO IMAGEN
const colorImg = document.getElementById("color-img");
const spanFondoImg = document.getElementById("span-fondo-img");

colorImg.addEventListener("input", () =>{
    imgMeme.style.backgroundColor = colorImg.value;
    spanFondoImg.textContent = colorImg.value;
});

// MODO DE MEZCLA FONDO IMAGEN
const modoMezcla = document.getElementById("fondo-mezcla");

modoMezcla.addEventListener("input", () =>{
    imgMeme.style.backgroundBlendMode = modoMezcla.value;
});

//FILTROS DE IMAGEN
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const grises = document.getElementById("grises");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");

const addFiltros = () =>{
    imgMeme.style.filter = `brightness(${brillo.value}) 
    opacity(${opacidad.value}) contrast(${contraste.value}%) 
    blur(${desenfoque.value}px) grayscale(${grises.value}%) 
    sepia(${sepia.value}%) hue-rotate(${hue.value}deg) 
    saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener("change", addFiltros);
opacidad.addEventListener("change", addFiltros);
contraste.addEventListener("change", addFiltros);
desenfoque.addEventListener("change", addFiltros);
grises.addEventListener("change", addFiltros);
sepia.addEventListener("change", addFiltros);
hue.addEventListener("change", addFiltros);
saturado.addEventListener("change", addFiltros);
negativo.addEventListener("change", addFiltros);

//REESTABLECER FILTROS
const botonReestablecer = document.getElementById("btn-reestablecer");
const resetFiltros = () =>{
    brillo.value = 1; opacidad.value = 1; contraste.value = 100;
    desenfoque.value = 0; grises.value = 0; sepia.value = 0;
    hue.value = 0; saturado.value = 100; negativo.value = 0;
};

botonReestablecer.addEventListener("click", () =>{
    imgMeme.style.filter = "none";
    resetFiltros();
});

//DESCARGAR IMAGEN
const botonDescargar = document.querySelector(".btn-download");
const imgContainer = document.querySelector(".generator");

botonDescargar.addEventListener("click", () =>{
    domtoimage.toBlob(imgContainer)
        .then(function (blob) {
        window.saveAs(blob, 'meme.png');
      });
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
const spanColorText = document.getElementById("span-color-texto");
const spanFondoTexto = document.getElementById("span-fondo-texto");

colorFuente.addEventListener("input", () =>{
    topTitle.style.color = colorFuente.value;
    bottomTitle.style.color = colorFuente.value;
    spanColorText.textContent = colorFuente.value;
});
colorFondoFuente.addEventListener("input", () =>{
    topTitle.style.backgroundColor = colorFondoFuente.value;
    bottomTitle.style.backgroundColor = colorFondoFuente.value;
    spanFondoTexto.textContent = colorFondoFuente.value;
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









  








































