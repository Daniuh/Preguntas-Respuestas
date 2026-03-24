
export async function cargarFinalJuegoPerdio() {
    const respuesta = await fetch('./html/finalJuegoPerdio.html');
    const html      = await respuesta.text();
    document.getElementById('appCargado').innerHTML = html;

    eventosCargarFinalJuegoPerdio();
}

function eventosCargarFinalJuegoPerdio() {

}