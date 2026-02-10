export async function cargarReglas() {
    const ocultarSeccionInicio = document.querySelector('.inicio');
    ocultarSeccionInicio.classList.add('ocultarContenido');

    const respuesta = await fetch('html/reglas.html');
    const inicio = await respuesta.text();
    document.getElementById('app').innerHTML = inicio;

    eventosReglas();
}

function eventosReglas() {

}