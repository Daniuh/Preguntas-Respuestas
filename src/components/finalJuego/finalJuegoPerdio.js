import { obtenerVistas } from '../../modules/index.js';

export async function cargarFinalJuegoPerdio() {
    const respuesta = await fetch('./html/finalJuegoPerdio.html');
    const html      = await respuesta.text();
    document.getElementById('appCargado').innerHTML = html;

    eventosCargarFinalJuegoPerdio();
}

function eventosCargarFinalJuegoPerdio() {
    const botonVolverJugar      = document.querySelector('.buttonFinalP');
    const botonSalir            = document.querySelector('.buttonSalirFinalP');

    clickBtn(botonVolverJugar, botonSalir);
}

function clickBtn(btnVolverJugar, btnSalir) {
    btnVolverJugar.addEventListener('click', () => {
        obtenerVistas('reglas');
        setPreguntasYaRealizadas([]);
    });

    btnSalir.addEventListener('click', () => {
        obtenerVistas('inicio');
        setPreguntasYaRealizadas([]);
    });
}