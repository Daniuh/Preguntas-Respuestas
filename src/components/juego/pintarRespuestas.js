export function pintarRespuesta(esCorrecta, opcion, respuesta) {
    console.log(esCorrecta, opcion, respuesta);

    pintarRespuestaCorrectaUsuario(esCorrecta, respuesta, opcion);
}

function pintarRespuestaCorrectaUsuario(resultEleccion, respuestaCorrecta, op) {

    if (resultEleccion) {
        const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
        htmlRespuestaC.classList.remove('opcion');

        htmlRespuestaC.classList.add('respuestaCorrecta');
    } else {
        const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
        const htmlRespuestaI = document.querySelector(`[data-indice="${op}"]`);

        htmlRespuestaC.classList.remove('opcion');
        htmlRespuestaC.classList.add('respuestaCorrecta');

        htmlRespuestaI.classList.remove('opcion');
        htmlRespuestaI.classList.add('respuestaIncorrecta');
    }
}