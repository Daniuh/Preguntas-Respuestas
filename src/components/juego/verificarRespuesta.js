import { pintarRespuesta } from '../index.js';

export function verificarRespuesta(respuesta, elemento) {
    const opciones = document.querySelectorAll('.opcion');

    listeners(opciones, respuesta, elemento);
}

function listeners(opciones, opCorrecta, elemento) {
    console.log(opCorrecta);

    validarOpcionSelec(opciones, opCorrecta, elemento);
}

function validarOpcionSelec(opcion, respuesta, elemento) {
    opcion.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const indice = Number(opcion.dataset.indice);
            
            let esCorrectaResp = true;

            if(indice === respuesta){
                esCorrectaResp;

               return pintarRespuesta(esCorrectaResp, indice, respuesta, elemento);
            } else {
                esCorrectaResp = !esCorrectaResp; 

                return pintarRespuesta(esCorrectaResp, indice, respuesta, elemento);
            }
        });
    });
}


