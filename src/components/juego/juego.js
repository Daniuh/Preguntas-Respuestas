import { getPreguntaRandom } from '../../modules/index.js'; 

export async function cargarJuego() {
    const respuesta = await fetch('html/juego.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosJuegos();
}

function eventosJuegos() {
    console.log(getPreguntaRandom());
    
}