export async function obtenerPregunta(respuestaUsuario) {
    const res = await fetch('server/preguntas.json');
    const preguntas = await res.json();

    const respuestaU = respuestaUsuario;
    console.log(respuestaUsuario);

    //console.log (preguntas.preguntas[35].pregunta);

    //TODO: Generar las preguntas por el tipo y de forma aleatoria
    filtrarTipo(respuestaUsuario, preguntas.preguntas);
}

function filtrarTipo(respuestaUsuario, objPreguntas) {
    const filtradas = objPreguntas.filter(
        p => p.tipo === respuestaUsuario
    );

    elegirPreguntaAlea(filtradas);
}

function elegirPreguntaAlea(preguntaFiltro) {
    if (preguntaFiltro.length === 0) {
        console.log("No hay preguntas de ese tipo");
        return;
    }

    const randomIndex = Math.floor(Math.random() * filtradas.length);
    const preguntaRandom = filtradas[randomIndex];

    console.log(preguntaRandom);
}