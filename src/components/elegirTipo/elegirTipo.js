import { obtenerVistas } from '../../modules/index.js';
import { obtenerPregunta } from '../../modules/obtenerPregunta.js';

export async function cargarTipo() {
    const respuesta = await fetch('html/elegirTipo.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosTipo();
}

function eventosTipo() {
    const tipos = document.querySelectorAll('.articleElegirT');

    clickTipo(tipos);
}

function clickTipo(tiposP) {
    tiposP.forEach(tiposP => {
        tiposP.addEventListener('click', () => {
            const respuesta = Number(tiposP.dataset.indice);

            obtenerVistas('juego');
            obtenerPregunta(respuesta);
        });
    });
}