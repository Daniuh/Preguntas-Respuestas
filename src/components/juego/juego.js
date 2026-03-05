import { obtenerVistas, getPregunta, getRespuesta, getPreguntaRandom } from '../../modules/index.js'; 
import { verificarRespuesta } from '../index.js';

export async function cargarJuego() {
    const respuesta = await fetch('html/juego.html');
    const inicio = await respuesta.text();
    const elemento = document.getElementById('appCargado');

    elemento.innerHTML = inicio;

    eventosJuegos(elemento);
}

function eventosJuegos(elemento) {
    const preguntaH1 = document.querySelector('.h1Juego');
    const preguntas  = document.querySelectorAll('.preguntas');
    const puntaje    = document.querySelector('.pJuego');

    if(!getPregunta()){
      return obtenerVistas('tipo'); 
    }

    flujoJuego(preguntaH1, getPregunta(), preguntas, puntaje, getRespuesta(), elemento);
}

function flujoJuego(preguntaH1, pregunta, preguntas, puntaje, respuesta, elemento) {
    pintarPregunta(preguntaH1, pregunta);
    pintarRespuestas(preguntas);

    iniciarPuntaje();
    pintarPuntaje(puntaje);

    verificarRespuesta(respuesta, elemento);
    
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
    }
}

function pintarPuntaje(pPuntaje) {
    const puntaje = localStorage.getItem('puntajeUsuario');

    pPuntaje.innerText = puntaje;
}