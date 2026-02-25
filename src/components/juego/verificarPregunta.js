export function verificarRespuesta(respuesta) {
    const opcion1  = document.querySelector('.divLi1');
    const opcion2  = document.querySelector('.divLi2');
    const opcion3  = document.querySelector('.divLi3');
    const opcion4  = document.querySelector('.divLi4');

    listeners(opcion1, opcion2, opcion3, opcion4, respuesta);
}

function listeners(op1, op2, op3, op4, opCorrecta) {
    let valor = 0;

    op1.addEventListener('click', () => {
        valor = 0;

        if (valor === opCorrecta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });

    op2.addEventListener('click', () => {
        valor = 1;

        if (valor === opCorrecta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });

    op3.addEventListener('click', () => {
        valor = 1;

        if (valor === opCorrecta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });

    op4.addEventListener('click', () => {
        valor = 1;

        if (valor === opCorrecta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });
}