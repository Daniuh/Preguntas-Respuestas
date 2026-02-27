export function verificarRespuesta(respuesta) {
    const opciones = document.querySelectorAll('.opcion');

    listeners(opciones, respuesta);
}

function listeners(opciones, opCorrecta) {
    console.log(opCorrecta);

    validarOpcionSelec(opciones, opCorrecta);
}

function validarOpcionSelec(opcion, respuesta) {
    opcion.forEach(opcion => {
        opcion.addEventListener('click', () => {
            const indice = Number(opcion.dataset.indice);
            
            let esCorrectaResp = true;

            if(indice === respuesta){
                esCorrectaResp
                
            } else {
                esCorrectaResp = !esCorrectaResp;
                
            }
        });
    });
}


