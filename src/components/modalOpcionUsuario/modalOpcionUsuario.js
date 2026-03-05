import modalHtml from '../../../public/html/modalOpcionUsuario.html?raw';
import { obtenerPregunta, obtenerVistas } from '../../modules/index.js';

let modal;

export const mostrarModal = () => {
    modal?.classList.remove('ocultarModal');
}

export const ocultarModal = () => {
    modal?.classList.add('ocultarModal');
}

export const cargarModalOpcion = (elemento) => {
    modal = document.createElement('section');
    modal.innerHTML = modalHtml;
    modal.className = 'modalOpciones';

    elemento.append(modal);

    eventosModal();
}

function eventosModal() {
    clicks();
}

function clicks() {
    const continuarButton = document.querySelector('.buttonContinuar');
    const retirarseButton = document.querySelector('.buttonRetirarse');

    continuar(continuarButton, retirarseButton);
    retirarse(retirarseButton);
}

function continuar(c, r) {
    c.addEventListener('click', () => {
        cambiarVistaModal(c, r);
    });
}

function retirarse(r) {
    r.addEventListener('click', () => {
        obtenerVistas('inicio');
        //TODO: Se debe de cambiar al final el parametro que se envia al llamar la función por el del final del juego donde se muestra el historial
    });
}

function cambiarVistaModal(c, r) {
    const textoP  = document.querySelector('.pModal');
    const textoH1 = document.querySelector('.h1Modal');

    textoH1.innerText = 'Elige una opción primero';
    textoP.innerText  = 'Ahora escoge si deseas cambiar la categoría de la pregunta o continuar con la misma.'
    c.innerText       = 'Cambiar tipo';
    r.innerText       = 'Continuar con el mismo tipo';

    cambiarTipo(c);
    continuarConElMismo(r);
}

function cambiarTipo(c) {
    c.addEventListener('click', () => {
        obtenerVistas('tipo');
    })
}

function continuarConElMismo(r) {
    r.addEventListener('click', () => {
        const tipoActual = Number(localStorage.getItem('TipoActual'));

        obtenerVistas('juego');
        obtenerPregunta(tipoActual);
    });
}