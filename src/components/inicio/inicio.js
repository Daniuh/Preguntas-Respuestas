import {cargarReglas} from '../index.js';

export async function cargarInicio() {
    const respuesta = await fetch('html/inicio.html');
    const inicio = await respuesta.text();
    document.getElementById('inicio').innerHTML = inicio;

    eventos();
}

function eventos() {
    const inputNombreUsuario = document.querySelector('#inputNombreUsuario');
    const buttonInicio = document.querySelector('#buttonInicio');

    if (!buttonInicio || !inputNombreUsuario) {return};

    obtenerClick(buttonInicio, inputNombreUsuario);
    ocultarMensajeError(inputNombreUsuario);
}

function obtenerClick(buttonInicio, inputNombreUsuario){    
    const nameUsuario = inputNombreUsuario;
    
    buttonInicio.addEventListener('click', () => {
        verificarName(nameUsuario);
    })
}

function verificarName(nameUsuario) {
    const name = nameUsuario.value.trim();
    const mensajeExistente = document.querySelector('.nameVacio');

    if (mensajeExistente){mensajeExistente.remove()};

    if (name == ''){ 
        const error = document.createElement('span');
        error.textContent = 'Por favor ingrese un nombre';
        error.classList.add('nameVacio');

        nameUsuario.after(error);
        return;
    }
        
    verificarNameNoRepita(name);
}

function ocultarMensajeError(inputNombreUsuario) {
    inputNombreUsuario.addEventListener('click', () => {
        const mensajeError = document.querySelector('.nameVacio');
        if(mensajeError){
            mensajeError.classList.add('noMostrarMensaje');
        }
    })
}

function verificarNameNoRepita(name) {
    if (!localStorage.getItem('nombreUsuario')) {
            localStorage.setItem('nombreUsuario', name);    
            //DONE: Aquí se llama la función que imprimira lo siguiente al guardar el nombre
            cargarReglas();
        }else{
            localStorage.setItem('nombreUsuario', name);
        }
}
