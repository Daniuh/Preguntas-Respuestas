export async function cargarModalOpcion() {
    const respuesta = await fetch('html/modalOpcionUusario.html');
    const inicio = await respuesta.text();
    document.getElementById('appCargado').innerHTML = inicio;

    eventosModal();
}

function eventosModal() {
    
}