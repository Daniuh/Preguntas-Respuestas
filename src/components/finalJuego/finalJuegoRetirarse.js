import { getPreguntas, getPreguntasYaRealizadas, obtenerVistas, setPreguntasYaRealizadas } from '../../modules/index.js';

export async function cargarFinalJuegoRetirarse() {
    const respuesta = await fetch('html/finalJuegoRetirarse.html');
    const finalJuego = await respuesta.text();
    document.getElementById('appCargado').innerHTML = finalJuego;

    eventosFinalJuego();
}

function eventosFinalJuego() {
    const botonVolverJugar     = document.querySelector('.buttonJugarFinal');
    const botonRegresarInicio  = document.querySelector('.buttonSalirFinal');
    const puntajeFinal         = document.getElementById('puntajeFinal');

    clickBtnJugar(botonVolverJugar);
    clickBtnSalir(botonRegresarInicio);
    mostrarResultados(puntajeFinal);
}

function clickBtnJugar(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('reglas');
        setPreguntasYaRealizadas([]);
    });
}

function clickBtnSalir(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('inicio');
        setPreguntasYaRealizadas([]);
    });
}

function mostrarResultados(puntajeFinal) {
    puntajeFinal.innerText = localStorage.getItem('puntajeUsuario');

    const preguntasYaRealizadas = getPreguntasYaRealizadas();
    const preguntasFiltradas    = getPreguntas().filter(pregunta => preguntasYaRealizadas.includes(pregunta.id));

    pintarTablaResultados(preguntasFiltradas);
}

function pintarTablaResultados(preguntas) {
    const tabla = document.querySelector('.trFinal');

    preguntas.forEach(p => {
        const pregunta = p.pregunta;
        const respuestaCorrecta = p.opciones[p.respuesta];

        const tr = document.createElement('tr');
    
        tr.innerHTML = `
            <td class="tdPregunta">${pregunta}</td>
            <td class="tdRespuesta">${respuestaCorrecta}</td>
        `;

        tabla.appendChild(tr);
});
}
