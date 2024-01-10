
// querySelector pide indicar qué etiqueta/id/clase de html queremos seleccionar. Es algo similar a lo que hace css
//querySelectorAll selecciona a todos los elementos que cumplan con la condición. querySelector sólo selecciona al primero.   
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});