import modalHtml from '../../../public/html/modalOpcionUsuario.html?raw';
import { obtenerPregunta, obtenerVistas } from '../../modules/index.js';
import { getElementoJuego } from '../index.js';

let modal;

export const mostrarModal = () => {
    modal?.classList.remove('ocultarModal');
}

export const ocultarModal = () => {
    modal?.classList.add('ocultarModal');
}

export const cargarModalOpcion = () => {
    modal = document.createElement('section');
    modal.innerHTML = modalHtml;
    modal.className = 'modalOpciones';

    getElementoJuego().append(modal);

    clicks();
}

function clicks() {
    const continuarButton = document.querySelector('#buttonContinuar');
    const retirarseButton = document.querySelector('#buttonRetirarse');

    continuar(continuarButton, retirarseButton);
    retirarse(retirarseButton);
}

function continuar(continuar, retirarse) {
    continuar.addEventListener('click', () => {
        conteoRondas();
        cambiarVistaModal(continuar, retirarse);
    });
}

function retirarse(retirarse) {
    retirarse.addEventListener('click', () => {
        obtenerVistas('finalJuego');
    });
}

function cambiarVistaModal(continuar, retirarse) {
    const textoP  = document.querySelector('.pModal');
    const textoH1 = document.querySelector('.h1Modal');

    textoH1.innerText = 'Elige una opción primero';
    textoP.innerText  = 'Ahora escoge si deseas cambiar la categoría de la pregunta o continuar con la misma.';

    retirarse.classList.remove('buttonRetirarse');
    retirarse.classList.add('buttonContinuarMismoTipo');

    continuar.innerText       = 'Cambiar tipo';
    retirarse.innerText       = 'Continuar con el mismo tipo';

    cambiarTipo(continuar);
    continuarConElMismo(retirarse);
}

function cambiarTipo(continuar) {
    continuar.addEventListener('click', () => {
        obtenerVistas('tipo');
    })
}

function continuarConElMismo(continuarMismoTipo) {
    continuarMismoTipo.addEventListener('click', () => {
        const tipoActual = Number(localStorage.getItem('TipoActual'));

        obtenerVistas('juego');
        obtenerPregunta(tipoActual);
    });
}

function conteoRondas() {
    let rondas = Number(localStorage.getItem('rondasUsuario')) || 0; 
    rondas++;

    const conteoGlobal = Number(localStorage.getItem('rondasUsuario'));

    if(conteoGlobal === 10){
        obtenerVistas('finalJuego');
    }else {
        localStorage.setItem('rondasUsuario', rondas);
    }
}