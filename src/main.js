import { renderVista, cargarPreguntas, obtenerVistas } from './modules/index.js';
import '../src/assets/styles/index.css';

const main = document.getElementById('app');

main.innerHTML = `
<main class='main'>
    <section id='appCargado'>
    </section>
</main>`;

document.addEventListener('DOMContentLoaded', async () => {
    await cargarPreguntas();
    renderVista();
});
window.addEventListener("popstate", () => {obtenerVistas('reglas')});
window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = '';
});