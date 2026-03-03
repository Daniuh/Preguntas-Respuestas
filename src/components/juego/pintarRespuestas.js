export function pintarRespuesta(esCorrecta, opcion, respuesta) {
    console.log(esCorrecta, opcion, respuesta);

    pintarRespuestaCorrectaUsuario(esCorrecta, respuesta, opcion);
}

function pintarRespuestaCorrectaUsuario(resultEleccion, respuestaCorrecta, op) {

    if (resultEleccion) {
        const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
        const puntos         = document.querySelector('.pJuego');

        htmlRespuestaC.classList.remove('opcion');
        htmlRespuestaC.classList.add('respuestaCorrecta');

        let puntosActuales = Number(localStorage.getItem('puntajeUsuario'));
        let puntosGanados  = 50;

        const totalPuntos = puntosActuales + puntosGanados;

        localStorage.setItem('puntajeUsuario', totalPuntos);

        puntos.innerText = totalPuntos;
    } else {
        const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
        const htmlRespuestaI = document.querySelector(`[data-indice="${op}"]`);
        const puntos         = document.querySelector('.pJuego');

        htmlRespuestaC.classList.remove('opcion');
        htmlRespuestaC.classList.add('respuestaCorrecta');

        htmlRespuestaI.classList.remove('opcion');
        htmlRespuestaI.classList.add('respuestaIncorrecta');

        localStorage.setItem('puntajeUsuario', 0);
        const puntosPerdidos = localStorage.getItem('puntajeUsuario');
        puntos.innerText = puntosPerdidos;
    }
}