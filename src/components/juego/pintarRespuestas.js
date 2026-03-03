export function pintarRespuesta(esCorrecta, opcion, respuesta) {
    console.log(esCorrecta, opcion, respuesta);
    const opciones = document.querySelector('.opcion');

    pintarRespuestaCorrectaUsuario(esCorrecta, respuesta, opciones);
}

function pintarRespuestaCorrectaUsuario(resultEleccion, respuestaCorrecta, opciones) {
    if (resultEleccion) {
        
    } else {

    }

}