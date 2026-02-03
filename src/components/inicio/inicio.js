
const inicio = document.getElementById('inicio');

export async function cargarInicio() {
    const respuesta = fetch('html/inicio.html');
    const inicio = await respuesta.text();
    inicio.innerHTML = inicio;
}