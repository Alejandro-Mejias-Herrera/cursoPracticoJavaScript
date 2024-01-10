
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');
const btnSuma = document.querySelector('#btnsuma');
const btnResta = document.querySelector('#btnresta');
const btnMultiplicacion = document.querySelector('#btnmultiplicacion');
const btnDivision = document.querySelector('#btndivision');
const resultado = document.querySelector('#resultado');

function realizarSuma() {
    const suma = parseFloat(numero1.value) + parseFloat(numero2.value);
    resultado.innerHTML = suma;
}

function realizarResta() {
    const resta = parseFloat(numero1.value) - parseFloat(numero2.value);
    resultado.innerHTML = resta;
}

function realizarMultiplicacion() {
    const multiplicacion = parseFloat(numero1.value) * parseFloat(numero2.value);
    resultado.innerHTML = multiplicacion; 
}

function realizarDivision() {
    const division = parseFloat(numero1.value) / parseFloat(numero2.value);
    resultado.innerHTML = division;
}