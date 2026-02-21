let preguntas = [];

export async function cargarPreguntas() {
    if (preguntas.length > 0) {return}

    const res = await fetch('server/preguntas.json');
    const data = await res.json();

    preguntas = data.preguntas;
}

export function getPreguntas() {
    return preguntas;
}