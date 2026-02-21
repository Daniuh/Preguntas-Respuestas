import { getPreguntaRandom, obtenerVistas } from '../../modules/index.js'; 

export async function cargarJuego() {
    const respuesta = await fetch('html/juego.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosJuegos();
}

function eventosJuegos() {
    const preguntaH1 = document.querySelector('.h1Juego');
    const opcion1Li  = document.querySelector('.li1');
    const opcion2Li  = document.querySelector('.li2');
    const opcion3Li  = document.querySelector('.li3');
    const opcion4Li  = document.querySelector('.li4');

    const pregunta = getPreguntaRandom().pregunta;

    if(!pregunta){
      return obtenerVistas('tipo'); 
    }

    const opcion1  = getPreguntaRandom().opciones[0];
    const opcion2  = getPreguntaRandom().opciones[1];
    const opcion3  = getPreguntaRandom().opciones[2];
    const opcion4  = getPreguntaRandom().opciones[3];

    pintarPregunta(preguntaH1, pregunta);
    pintarRespuestas(opcion1, opcion1Li, opcion2, opcion2Li, opcion3, opcion3Li, opcion4, opcion4Li);
}

function pintarPregunta(preguntaH1, pregunta) {
    preguntaH1.innerText = pregunta;
}

function pintarRespuestas(op1, opL1, op2, opL2, op3, opL3, op4, opL4) {
    opL1.innerText = op1;
    opL2.innerText = op2;
    opL3.innerText = op3;
    opL4.innerText = op4;
}