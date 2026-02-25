export function verificarRespuesta(respuesta) {
    const opcion1  = document.querySelector('.divLi1');
    const opcion2  = document.querySelector('.divLi2');
    const opcion3  = document.querySelector('.divLi3');
    const opcion4  = document.querySelector('.divLi4');

    listeners(opcion1, opcion2, opcion3, opcion4, respuesta);
}

function listeners(op1, op2, op3, op4, opCorrecta) {
    let valor = 0;

    console.log(opCorrecta);

    validarOp1(op1, opCorrecta, valor);
    validarOp2(op2, opCorrecta, valor);
    validarOp3(op3, opCorrecta, valor);
    validarOp4(op4, opCorrecta, valor);
}

function validarOp1(op1, respuesta, valorOp) {
    op1.addEventListener('click', () => {
        valorOp = 0;

        if (valorOp === respuesta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });
}

function validarOp2(op2, respuesta, valorOp) {
    op2.addEventListener('click', () => {
        valorOp = 1;

        if (valorOp === respuesta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });
}

function validarOp3(op3, respuesta, valorOp) {
    op3.addEventListener('click', () => {
        valorOp = 2;

        if (valorOp === respuesta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });
}

function validarOp4(op4, respuesta, valorOp) {
    op4.addEventListener('click', () => {
        valorOp = 3;

        if (valorOp === respuesta) {
            console.log('Respuesta correcta');
        } else {
            console.log('Respuesta incorrecta');
        }
    });
}