
# Observaciones

Caro, felicitaciones por su trabajo. Estoy muy contenta recorriendo tu TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. Este es un trabajo para compartir, publicar, mostrarle a potenciales empleadores y del que estar muy, muy orgullosa. 

Tengo que hacer la misma observación que en el primer TP: tengo poco para decirte, porque este trabajo es excelente y hay poco para aportar de mi lado. Mantené este excelente nivel! 

## Estructura correcta de documento HTML

Excelente, no tengo ni un comentario para hacer en tu HTML. Todo impecable. 

## Respeta el diseño dado

Cumplido. 

## Respeta el funcionamiento

Cumplido

## Responsive funciona correctamente

Cumplidisimo

## Buena estructura de proyecto

Cumplido salvo por la carpeta .vscode, que no se debe subir a github, y la carpeta imagenes, que subis pero no usas en ningun momento. 

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido.

## Buenos nombres de clases

Cumplido en general, aunque tenés la tendencia de usar camelCase para los nombres de clases y de IDs. Comentamos en clase que siempre que esté en html, usamos por convención guiones para separar palabras. Es decir, "boton-texto" en lugar de "botonTexto". camelCase, lo usamos por convención para Javascript. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, aunque te dejo varios comentarios. Repetis varios de los problemas del portfolio: por favor consideralos seriamente para futuras entregas. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

No cumplido, hay muchas decisiones aquí que impactan muy negativamente en la accesibilidad de tu sitio. 

- Le diste "outline: none" a todos tus inputs, urls y botones. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaste a tus usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Te olvidas de usar label, lo reemplazas por h3, que no es lo mismo, o no usas correctamente el label for. 

- Falta aria-label en muchísimos elementos. Te dejo como ejemplo los botones para alinear texto:

```html
<button class="control-text boton-size" id="btn-left">
    <i class="fas fa-align-left"></i>
</button>
<button class="control-text boton-size" id="btn-center">
    <i class="fas fa-align-center"></i>
</button>
<button class="control-text boton-size" id="btn-right">
    <i class="fas fa-align-right"></i>
</button>
```

¿Como puede saber un usuario que depende del lector de pantalla qué son estos elementos? El ícono se ignora, y además tiene el aria-hidden. Ni el id ni el nombre de clase se leen. El usuario que depende del lector de pantalla no tiene idea para qué sirven estos botones. 


## Commits con mensajes adecuados

Cumplido, y menciono tambien el excelente nivel del README. 

# Nota final: 9

