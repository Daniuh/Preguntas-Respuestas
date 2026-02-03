import { cargarInicio } from "./components/index.js";
const main = document.getElementById('app');

main.innerHTML = `
<main>
    <section id='inicio'>
    </section>
</main>`;

cargarInicio();