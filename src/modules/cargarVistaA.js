import {cargarInicio, cargarTipo, cargarReglas, cargarJuego} from '../components/index.js';

const vistas = {
    'inicio' : cargarInicio,
    'tipo' : cargarTipo,
    'reglas' : cargarReglas,
    'juego' : cargarJuego
}

export function obtenerVistas(view) {
    const parametros = new URLSearchParams({view}).toString();

    window.history.pushState({}, "", `?${parametros}`);

    renderVista();
}

function obtenerVistaDesdeURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("view") || "inicio";
}

export function renderVista() {
  const vista = obtenerVistaDesdeURL();
  const render = vistas[vista];

  if (render) {
    render();
    }else cargarInicio();
}