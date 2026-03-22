import { getPreguntas } from '../modules/index.js';

let pregunta, respuesta, preguntaFiltrada;
let preguntaRandom = [];
let preguntasYaRealizadas = [];

export async function obtenerPregunta(respuestaUsuario) {
    const preguntas = getPreguntas();
    filtrarTipo(respuestaUsuario, preguntas);
}

function filtrarTipo(respuestaUsuario, objPreguntas) {
    const filtradas = objPreguntas.filter(
        p => p.tipoIndice === respuestaUsuario
    );

    elegirPreguntaAlea(filtradas);
}

function elegirPreguntaAlea(preguntaFiltro) {
    if (preguntaFiltro.length === 0) {
        console.log("No hay preguntas de ese tipo");
        return;
    }

    generarPreguntaRandom(preguntaFiltro);
}

function generarPreguntaRandom(preguntaF) {
    const randomIndex = Math.floor(Math.random() * preguntaF.length);
    preguntaRandom = preguntaF[randomIndex];

    verificarPreguntaNoRepita(preguntaRandom, preguntaF);
}

function verificarPreguntaNoRepita(preguntaA, preguntaFiltro) {
    if(preguntasYaRealizadas.includes(preguntaA.id)) {
      generarPreguntaRandom(preguntaFiltro);
    }else {
        preguntasYaRealizadas.push(preguntaA.id);
        pregunta  = preguntaA.pregunta;
        respuesta = preguntaA.respuesta;
        preguntaFiltrada = preguntaA;
    }
}

export function getPregunta() {
    return pregunta;
}

export function getRespuesta() {
    return respuesta;
}

export function getPreguntaRandom() {
    return preguntaFiltrada;
}

export function getPreguntasYaRealizadas() {
    return preguntasYaRealizadas;
}