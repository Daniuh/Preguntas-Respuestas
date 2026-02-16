import { obtenerVistas } from '../../modules/index.js';

export async function cargarTipo() {
    const respuesta = await fetch('html/elegirTipo.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosTipo();
}

function eventosTipo() {
    
}