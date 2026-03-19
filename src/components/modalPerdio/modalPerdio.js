import modalHtml from '../../../public/html/modalPerdio.html?raw';
import { obtenerVistas } from '../../modules/index.js';

let modal;

export const mostrarModalPerdio = () => {
    modal?.classList.remove('ocultarModalPerdio');
}

export const ocultarModalPerdio = () => {
    modal?.classList.add('ocultarModalPerdio');
}

export const cargarModalPerdio = (elemento) => {
    modal = document.createElement('section');
    modal.innerHTML = modalHtml;
    modal.className = 'modalPerdio';

    elemento.append(modal);

    eventosModalPerdio();
}

function eventosModalPerdio() {
    const h1Modal     = document.querySelector('.h1ModalPerdio');
    const botonPerdio = document.querySelector('.buttonPerdio');

    imrpimirInfo(h1Modal);
    clickBtn(botonPerdio);
}

function imrpimirInfo(h1) {
    h1.innerText = `Lo sentimos ${localStorage.getItem('nombreUsuario')}, pero has perdido.`
}

function clickBtn(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('finalJuego');
    })
}