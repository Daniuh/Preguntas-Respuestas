import { cargarModalOpcion } from '../index.js';
import { cargarModalPerdio } from '../index.js';

export function pintarRespuesta(esCorrecta, opcion, respuesta, elemento) {
    console.log(esCorrecta, opcion, respuesta);

    pintarRespuestaCorrectaUsuario(esCorrecta, respuesta, opcion, elemento);
}

function pintarRespuestaCorrectaUsuario(resultEleccion, respuestaCorrecta, op, elemento) {

    if (resultEleccion) {
        eleccionCorrecta(respuestaCorrecta);
        cargarModalOpcion(elemento);
    } else {
        eleccionIncorrecta(respuestaCorrecta, op);
        cargarModalPerdio(elemento);
    }
}

function eleccionCorrecta(respuestaCorrecta)  {
    const htmlRespuestaC = document.querySelector(`[data-indice="${respuestaCorrecta}"]`);
    const puntos         = document.querySelector('.pJuego');

    htmlRespuestaC.classList.add('respuestaCorrecta');
    htmlRespuestaC.classList.remove('opcion');

    let puntosGanados  = 50;
    let puntosActuales = Number(localStorage.getItem('puntajeUsuario'));

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

        localStorage.setItem('puntajeUsuario', 0);
        const puntosPerdidos = localStorage.getItem('puntajeUsuario');
        puntos.innerText = puntosPerdidos;
}