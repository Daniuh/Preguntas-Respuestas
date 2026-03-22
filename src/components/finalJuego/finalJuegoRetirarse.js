import { obtenerVistas } from '../../modules/index.js';
import { getUsuarioRetirarse } from '../index.js';

export function cargarFinalJuegoRetirarse() {
    elegirVista();
}

async function elegirVista() {
    console.log(getUsuarioRetirarse());
    if (getUsuarioRetirarse()) {
        const respuesta = await fetch('html/finalJuegoRetirarse.html');
        const finalJuego = await respuesta.text();
        document.getElementById('appCargado').innerHTML = finalJuego;

        eventosFinalJuego();
        return;    
    }else{
        const respuesta = await fetch('html/finalJuegoRetirarse.html');
        const finalJuego = await respuesta.text();
        document.getElementById('appCargado').innerHTML = finalJuego;
    }
}

function eventosFinalJuego() {
    const botonVolverJugar = document.querySelector('.buttonJugarFinal');
    const botonRegresarInicio = document.querySelector('.buttonSalirFinal');


    clickBtnJugar(botonVolverJugar);
    clickBtnSalir(botonRegresarInicio);
}

function clickBtnJugar(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('reglas');
    });
}

function clickBtnSalir(btn) {
    btn.addEventListener('click', () => {
        obtenerVistas('inicio');
    });
}

