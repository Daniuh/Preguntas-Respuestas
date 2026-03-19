import { obtenerVistas } from '../../modules/cargarVistaA.js';

export async function cargarFinalJuego() {
    const respuesta = await fetch('html/finalJuego.html');
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
        obtenerVistas('tipo');
    })
}

function clickBtnSalir(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('inicio');
    })
}

