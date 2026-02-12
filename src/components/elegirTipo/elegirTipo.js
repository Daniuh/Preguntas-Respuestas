
export async function cargarTipo() {
    const respuesta = await fetch('html/elegirTipo.html');
    const inicio = await respuesta.text();
    document.getElementById('app').innerHTML = inicio;

    eventosTipo();
}

function eventosTipo() {
    
}