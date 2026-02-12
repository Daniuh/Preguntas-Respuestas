import {cargarInicio} from '../index.js';

export async function cargarReglas() {
    const respuesta = await fetch('html/reglas.html');
    const inicio = await respuesta.text();
    document.getElementById('app').innerHTML = inicio;

    eventosReglas();
}

function eventosReglas() {
    const buttonRegresar  = document.querySelector('.bRegresarReglas');
    const buttonContinuar = document.querySelector('.bContinuarReglas');

    if(!buttonRegresar || !buttonContinuar) {return};

    regresar(buttonRegresar);
    continuar(buttonContinuar);
}

function regresar(buttonR) {
    buttonR.addEventListener('click', () => {
        cargarInicio();
    });
}

function continuar(buttonC) {
    buttonC.addEventListener('click', () => {
        juego();
    });
}