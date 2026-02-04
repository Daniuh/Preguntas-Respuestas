
export async function cargarInicio() {
    const respuesta = await fetch('html/inicio.html');
    const inicio = await respuesta.text();
    document.getElementById('inicio').innerHTML = inicio;
}