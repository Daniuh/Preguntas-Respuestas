import { cargarModalOpcion, cargarModalPerdio, getElementoJuego } from '../index.js';

export function pintarRespuesta(esCorrecta, opcion, respuesta) {
    if (esCorrecta) {
        eleccionCorrecta(respuesta);
        cargarModalOpcion();
    } else {
        eleccionIncorrecta(respuesta, opcion);
        cargarModalPerdio();
    }
}

function eleccionCorrecta(respuestaCorrecta)  {
    const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
    const puntos         = document.querySelector('.pJuego');

    htmlRespuestaC.classList.add('respuestaCorrecta');
    htmlRespuestaC.classList.remove('opcion');

    sumarPuntaje(puntos);
}

function sumarPuntaje(puntos) {
    const puntosGanados  = 50;
    const puntosActuales = Number(localStorage.getItem('puntajeUsuario'));

    const totalPuntos = puntosActuales + puntosGanados;
    localStorage.setItem('puntajeUsuario', totalPuntos);
    puntos.innerText = totalPuntos;
}

function eleccionIncorrecta(respuestaCorrecta, op) {
    const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
        const htmlRespuestaI = document.querySelector(`[data-indice="${op}"]`);
        const puntos         = document.querySelector('.pJuego');

        htmlRespuestaC.classList.remove('opcion');
        htmlRespuestaC.classList.add('respuestaCorrecta');

        htmlRespuestaI.classList.remove('opcion');
        htmlRespuestaI.classList.add('respuestaIncorrecta');

        quitarPuntaje(puntos);
}

function quitarPuntaje(puntos) {
    localStorage.setItem('puntajeUsuario', 0);
    const puntosPerdidos = localStorage.getItem('puntajeUsuario');
    puntos.innerText = puntosPerdidos;
}