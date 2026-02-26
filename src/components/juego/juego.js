import { getPreguntaRandom, obtenerVistas } from '../../modules/index.js'; 
import { verificarRespuesta } from '../index.js';

export async function cargarJuego() {
    const respuesta = await fetch('html/juego.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosJuegos();
}

function eventosJuegos() {
    const preguntaH1 = document.querySelector('.h1Juego');
    const preguntas  = document.querySelectorAll('.preguntas');
    const puntaje    = document.querySelector('.pJuego');

    const pregunta = getPreguntaRandom().pregunta;

    if(!pregunta){
      return obtenerVistas('tipo'); 
    }

    const respuesta = Number(getPreguntaRandom().respuesta);

    flujoJuego(preguntaH1, pregunta, preguntas, puntaje, respuesta);
}

function flujoJuego(preguntaH1, pregunta, preguntas, puntaje, respuesta) {
    pintarPregunta(preguntaH1, pregunta);
    pintarRespuestas(preguntas);

    iniciarPuntaje();
    pintarPuntaje(puntaje);

    verificarRespuesta(respuesta);
}

function pintarPregunta(preguntaH1, pregunta) {
    preguntaH1.innerText = pregunta;
}

function pintarRespuestas(preguntas) {
    preguntas.forEach(preguntas => {
        const indice = Number(preguntas.dataset.indice);

        preguntas.innerText = getPreguntaRandom().opciones[indice];
    });
}

function iniciarPuntaje() {
    if(!localStorage.getItem('puntajeUsuario')){
        localStorage.setItem('puntajeUsuario', 0);
    } else {
        localStorage.setItem('puntajeUsuario', 0);
    }
}

function pintarPuntaje(pPuntaje) {
    const puntaje = localStorage.getItem('puntajeUsuario');

    pPuntaje.innerText = puntaje;
}