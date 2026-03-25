import { getPreguntas, getPreguntasYaRealizadas, obtenerVistas, setPreguntasYaRealizadas } from '../../modules/index.js';

export async function cargarFinalJuegoRetirarse() {
    const respuesta = await fetch('html/finalJuegoRetirarse.html');
    const finalJuego = await respuesta.text();
    document.getElementById('appCargado').innerHTML = finalJuego;

    eventosFinalJuego();
}

function eventosFinalJuego() {
    const botonVolverJugar    = document.querySelector('.buttonJugarFinal');
    const botonRegresarInicio = document.querySelector('.buttonSalirFinal');

    clickBtnJugar(botonVolverJugar);
    clickBtnSalir(botonRegresarInicio);
    mostrarResultados();
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

function mostrarResultados() {
    console.log(getPreguntasYaRealizadas());
    console.log(getPreguntas());
}
