import modalHtml from '../../../public/html/modalPerdio.html';
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

}