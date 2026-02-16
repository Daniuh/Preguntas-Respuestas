import { renderVista } from './modules/index.js';
import '../src/assets/styles/index.css';

const main = document.getElementById('app');

main.innerHTML = `
<main class='main'>
    <section id='appCargado'>
    </section>
</main>`;

document.addEventListener('DOMContentLoaded', renderVista);
window.addEventListener("popstate", renderVista);
