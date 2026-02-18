export async function obtenerPregunta() {
    const res = await fetch('server/preguntas.json');
    const preguntas = await res.json();

    console.log (preguntas.preguntas[35].pregunta);

    //TODO: Generar las preguntas por el tipo y de forma aleatoria
}