import { obtenerVistas } from '../../modules/index.js';
import { obtenerPregunta } from '../../modules/obtenerPregunta.js';

export async function cargarTipo() {
    const respuesta = await fetch('html/elegirTipo.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosTipo();
}

function eventosTipo() {
    const tipoCienciaNaturaleza = document.querySelector('#imgCienciaYNaturaleza');
    const tipoHistoriaGeografia = document.querySelector('#imgHistoriaYGeografia');
    const tipoArteLiteratura    = document.querySelector('#imgArteYLiteratura');
    const tipoDeporteEntreten   = document.querySelector('#imgDeporteYEntretenimiento');
    const tipoCulturaGeneral    = document.querySelector('#imgCulturaGeneral');

    clicks(tipoCienciaNaturaleza, tipoHistoriaGeografia, tipoArteLiteratura, tipoDeporteEntreten, tipoCulturaGeneral);
}

function clicks(cn, hg, al, de, cg) {

    cn.addEventListener('click', () => {
        const respuesta = 'cienciaynaturaleza';

        obtenerVistas('juego');
        obtenerPregunta(respuesta);
    });

    hg.addEventListener('click', () => {
        const respuesta = 'historiaygeografi';

        obtenerVistas('juego');
        obtenerPregunta(respuesta);
    });

    al.addEventListener('click', () => {
        const respuesta = 'arteyliteratura';

        obtenerVistas('juego');
        obtenerPregunta(respuesta);
    });

    de.addEventListener('click', () => {
        const respuesta = 'deportesyentretenimiento';

        obtenerVistas('juego');
        obtenerPregunta(respuesta);
    });

    cg.addEventListener('click', () => {
        const respuesta = 'culturageneralvariada';

        obtenerVistas('juego');
        obtenerPregunta(respuesta);
    });
}