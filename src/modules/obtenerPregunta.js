import { getPreguntas } from '../modules/index.js';

let preguntaRandom = [];

export async function obtenerPregunta(respuestaUsuario) {
    const preguntas = getPreguntas();
    //TODO: Generar las preguntas por el tipo y de forma aleatoria
    filtrarTipo(respuestaUsuario, preguntas);
}

function filtrarTipo(respuestaUsuario, objPreguntas) {
    const filtradas = objPreguntas.filter(
        p => p.tipo === respuestaUsuario
    );

    elegirPreguntaAlea(filtradas);
}

function elegirPreguntaAlea(preguntaFiltro) {
    if (preguntaFiltro.length === 0) {
        console.log("No hay preguntas de ese tipo");
        return;
    }

    const randomIndex = Math.floor(Math.random() * preguntaFiltro.length);
    preguntaRandom = preguntaFiltro[randomIndex];
}

export function getPreguntaRandom() {
    return preguntaRandom;
}