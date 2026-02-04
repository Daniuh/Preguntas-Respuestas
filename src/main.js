import { cargarInicio } from "./components/index.js";
import '../src/assets/styles/index.css';

const main = document.getElementById('app');

main.innerHTML = `
<main class='main'>
    <section id='inicio'>
    </section>
</main>`;

cargarInicio();