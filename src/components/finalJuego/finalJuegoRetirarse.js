import { obtenerVistas } from '../../modules/index.js';

export async function cargarFinalJuegoRetirarse() {
    const respuesta = await fetch('html/finalJuegoRetirarse.html');
    const finalJuego = await respuesta.text();
    document.getElementById('appCargado').innerHTML = finalJuego;

    eventosFinalJuego();
}

function eventosFinalJuego() {
    const botonVolverJugar = document.querySelector('.buttonJugarFinal');
    const botonRegresarInicio = document.querySelector('.buttonSalirFinal');


    clickBtnJugar(botonVolverJugar);
    clickBtnSalir(botonRegresarInicio);
}

function clickBtnJugar(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('reglas');
    });
}

function clickBtnSalir(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('inicio');
    });
}

