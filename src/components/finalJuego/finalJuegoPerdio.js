import { obtenerVistas } from '../../modules/index.js';

export async function cargarFinalJuegoPerdio() {
    const respuesta = await fetch('./html/finalJuegoPerdio.html');
    const html      = await respuesta.text();
    document.getElementById('appCargado').innerHTML = html;

    eventosCargarFinalJuegoPerdio();
}

function eventosCargarFinalJuegoPerdio() {
    const boton = document.querySelector('.buttonFinalP');

    clickBtn(boton);
}

function clickBtn(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('reglas');
        setPreguntasYaRealizadas([]);
    });
}