
const operacionSeleccionada = document.querySelector('#operaciones');
const operacion = document.querySelector('.operacion');
const resultado = document.querySelector('.resultado');
const numero1 = document.querySelector('#num-1');
const numero2 = document.querySelector('#num-2');
const btnCalcular = document.querySelector('.calcular');


numero1.addEventListener('input', (e) => {
    console.log(e)
    numero1.textContent = parseInt(e.target.value);
});

numero2.addEventListener('input', (e) => {
    numero2.textContent = parseInt(e.target.value);
});


btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    const n1 = parseInt(numero1.textContent);
    const n2 = parseInt(numero2.textContent);
    if(validar(n1, n2) === false){
        resultado.textContent = 'Debe ingresar dos números';
        return;
    }

    switch (operacionSeleccionada.value) {
        case 'suma':
            resultado.textContent = sumar(n1, n2);
            break;
        case 'resta':
            resultado.textContent = restar(n1, n2);
            break;
        case 'multiplicacion':
            resultado.textContent = multiplicar(n1, n2);
            break;
        case 'division':
            resultado.textContent = dividir(n1, n2);
            break;
        default:
            break;
    }
});


operacionSeleccionada.addEventListener('change', (e) => {
    if(e.target.value == 'suma'){
        operacion.textContent = '+';
    }
    else if(e.target.value == 'resta'){
        operacion.textContent = '-';
    }
    else if(e.target.value == 'multiplicacion'){
        operacion.textContent = '*';
    }
    else if(e.target.value == 'division'){
        operacion.textContent = '/';
    }
});


const sumar = (num1, num2) => {
    return num1 + num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}
const multiplicar = (num1, num2) => {

    return num1 * num2;
}
const dividir = (num1, num2) => {

    if(num2 == 0){
        return 'No se puede dividir entre 0';
    }
    return num1 / num2;
}


const validar = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)){
        return false;
    }
}
