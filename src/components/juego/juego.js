import { obtenerVistas, getPregunta, getRespuesta, getPreguntaRandom } from '../../modules/index.js'; 
import { verificarRespuesta } from '../index.js';

let elemento;

export async function cargarJuego() {
    const respuesta = await fetch('html/juego.html');
    const inicio = await respuesta.text();
    elemento = document.getElementById('appCargado');

    elemento.innerHTML = inicio;

    eventosJuegos(elemento);
}

function eventosJuegos(elemento) {
    const preguntaH1 = document.querySelector('.h1Juego');
    const opciones   = document.querySelectorAll('.preguntas');
    const puntaje    = document.querySelector('.pJuego');

    if(!getPregunta()){
      return obtenerVistas('tipo'); 
    }

    flujoJuego(preguntaH1, getPregunta(), opciones, puntaje, getRespuesta(), elemento);
}

function flujoJuego(preguntaH1, pregunta, opciones, puntaje, respuesta, elemento) {
    pintarPregunta(preguntaH1, pregunta);
    pintarOpciones(opciones);

    iniciarPuntaje();
    pintarPuntaje(puntaje);

    verificarRespuesta(respuesta);
    
}

function pintarPregunta(preguntaH1, pregunta) {
    preguntaH1.innerText = pregunta;
}

function pintarOpciones(opciones) {
    opciones.forEach(opciones => {
        const indice = Number(opciones.dataset.indice);

        opciones.innerText = getPreguntaRandom().opciones[indice];
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

export function getElementoJuego() {
    return elemento;
}