
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const img1 = document.createElement('img');
const estudioEscarlata = document.getElementById('estudio-escarlata');
const img2 = document.createElement('img');
const orientExpress = document.getElementById('orient-express');

//InnerHtml permite modificar un elemento del DOM. Permite insertar no sólo texto, sino otras etiquetas.
//InnerText inserta sólo como texto.
h1.innerHTML= 'Escribir en HTML desde JavaScript';
p.innerText = 'Lista de escritores de novela policial y algunos de sus libros';

//getAttribute obtiene el atributo de la etiqueta. En el ejemplo, obtiene la clase de p. Para mostrarlo, usamos un console.log
p.getAttribute('class');
console.log(p.getAttribute('class'));

//setAttribute cambia el valor del atributo. En el ejemplo, cambia el nombre de la clase, pasando de verde a rojo. Para mostrarlo, usamos un console.log
p.setAttribute('class','rojo');
console.log(p.getAttribute('class'));

//classList permite modificar clases. En el ejemplo, agregar y quitar.
//Problema. si hay dos elementos con esa clase, sólo modifican el primero.
ul.classList.add('autor');
ul.classList.remove('ciencia');

//también se puede preguntar si contiene una clase. Devolverá true o false.
console.log(ul.classList.contains('autor'));

//Se puede modificar de inmediato un atributo de un input, como el placeholder o value
input.placeholder = "Nombre completo";

//Se inserta una imagen dentro de un elemento. Primero, se crea la variable (lo hice arriba para mayor orden).
img1.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Gfsvx9JUsg7LLOs0gNSRuHQRImTJuDs8jewJcwwiR0RBohRdWJavkeR5HW0L2pHKXEM&usqp=CAU');
console.log(img1);

//Si quisiera eliminar el texto y dejar sólo la immagen, se puede generar un strig vacío primero.
//estudioEscarlata.innerHTML = "";
estudioEscarlata.append(img1);

//Segunda imagen
img2.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddAkjIBln4ReFqYyG1LsUmgLj7oYlXR4xSaeRQu-HcerR28v2OBw__RopN7-SJaLdsP0&usqp=CAU');

//Método alternativo para eliminar el nombre y colocar la imagen 
//orientExpress.replaceWith(img2);
orientExpress.append(img2);