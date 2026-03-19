export async function cargarFinalJuego() {
    const respuesta = await fetch('html/finalJuego.html');
    const finalJuego = await respuesta.text();
    document.getElementById('appCargado').innerHTML = finalJuego;

    eventosFinalJuego();
}

function eventosFinalJuego() {
    
}
