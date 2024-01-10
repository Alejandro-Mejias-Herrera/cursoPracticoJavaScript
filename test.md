### Variables

### Responde las siguientes preguntas

- ¿Qué se una variable y para qué sirve?
    Cajitas (espacios de memoria) donde podemos guardar infirmación, dependiendo del tipo de datos y estructuras que soporte nuestro lenguaje de probramación.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    Un detalle, declarar una variable con let permite cambiarla en el futuro. Hacerlo con const impide hacerlo.
    Una cosa es decirle a jacascript que tenemos una variable llamada nombre (let nombre), pero otra cosa es asignarle un valor (let nombre = Alejandro). Lo primero es declarar, lo segundo inicializar.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

- ¿Cuál es el operador que permite sumar números o contatenar strings?
    +.

### Detemine el nombre y tipo de dato para almacenar la variable específica

- Nombre: String
- Apellido: string
- Nombre de usuario en Platzi: string (@fulanito)
- Edad: Number
- Correo electrónico: String (lalala@gmail.com)
- Mayor de edad: Boolean
- Dinero ahorrado: Number
- Deudas: Number

### Traduzca a código JavaScript las variables del ejemplo anterior

let nombre = 'Karla'; 
//nomenclatura camelCase, poy ejemplo "nombre persona" --> nombrePersona
//en JavaScript el 99% de las vaces es opcional terminar con ";".

let esMayorDeEdad 
//Las variables booleanas tienden a comenzar por es (is en inglés). Así es más fácil leerlas.

### Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior

- Nombre completo (nombre y apellido).

    let nombreCompleto = nombre + ' ' + apellido; 
    // ${nombre} ${apellido}
    
    let dineroReal = dineroAhorrado - deudas;

- Dinero real (dinero ahorrado en deudas).

### Funciones

### Responde las siguientes preguntas en la sección de comentarios

- ¿Qué es una función?

    Son objetos que encapsulan un bloque de código para poder reutiizarlo y ejecutarlo en el futuro. Tienen un nombre, parámetros de entrada (cuando corresponde) y una salida.

        Las funciones utilizan parámetros, por ejemplo

    '''
    function nombreCompleto(nombre,apellido) {
        return nombre + ' ' + apellido;
    }
    '''

- ¿Cuándo me sirve usar una función en mi código?

    Cuando se utilizará bloques de código muy parecido, para utilizarlo varias veces.

    Cuando hay un código muy largo. Se encapsula cada parte del código para llegar a un resultado por parte. Hace más fácil leer el código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Las funciones reciben parámetros cuando las creamos y les enviamos argumentos cuando las ejecutamos.


### Condicionales

### Responda las siguientes preguntas

- ¿Qué es un condicional?

    Son la forma en que ejecutamos un bloque de código u otro dependiendo de una condición o validación.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    If (else y else if), switch. 
    El condicional if nos permite hacer validaciones completamente distintas, si así queremos, en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

    Existe también el condicional ternario, por ejemplo
    puntaje >= 6 ? 'Pasaste' : 'Fallaste';

- ¿Se puede combinar funciones con condicionales?

    Sí. Las funciones pueden encapsular cualquier tipo de código, incluyendo condicionales.


### Ciclos

- ¿Qué es un ciclo?

    Forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipo de ciclos existen en Javascript?

    while, do while y for.
    while hace una validación y luego ejecuta una línea de código. Se sigue haciendo mientras se cumpla la condición. 
    do while es lo mismo, pero la primera vez se ejecuta el código sin preguntar. Se pregunta después, para repetirlo.
    El ciclo for obliga a crear una variable y la va cambiando en cada caso.

- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación de nuestros condicionales nunca se cumple y termina toteando (dañando) la aplicación (ej. cuando el navegador ya no puede más de tanta ejecución de ese bloque de código).

- ¿Puedo mezclar ciclos y condicionales?

    Sí, aunque los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro de un ciclo.

### Listas

- ¿Qué es un array?

    Es una lista de elementos.


'''
    const array = [1, 'jajaja', true, false]
'''

- ¿Qué es un objeto?

    Es una lista de elementos, pero cada elemento tiene un nombre clave

'''
    const obj = {
        nombre: 'Fulanito',
        edad: 35,
    };
'''

- ¿Cuándo es mejor usar objetos o arrays?

    Arrays, cuando lo que haremos en un elemento es lo mismo que en todos los demás, mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    Sí. Los arrays pueden guardar objetos y los objetos pueden guardar arrays entre sus propiedades.

### Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

'''
function imprimirPrimerElementoArray(arr) {
    console.log(arr[0]);
'''

### Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

'''
function imprimirElementoPorElemento(arr) {
  for(i=0;i<arr.length;i++) {
    console.log(arr[i])
  }
}
'''

### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

'''
function imprimirElementoPorElementoObjeto(obj) {
  const arr = Object.values(obj);
  for(i=0;i<arr.length;i++) {
    console.log(arr[i])
  }
}
'''

'''
function objeto(object) {
    for (var item in object) {
        console.log(object[item]);
    }
}
'''


### Preguntas bonus

- Condicional sólo con if

'''
function conseguirTipoSuscripcion(suscripcion) {
  if(suscripcion == 'Free'){
    console.log('Sólo puedes tomar los cursos gratis');
		return;	
  }
	if (suscripcion == 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
		return;
  }
	if (suscripcion == 'Expert') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
		return;
  }
	console.warn('Ese tipo de suscripción no existe');	
}	
,,,

- Con un sólo condicional

'''
const tipoDeSuscripciones = {
  free: 'Sólo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
} 

function conseguirTipoSuscripcion(suscripcion) {
  if (tipoDeSuscripciones[suscripcion]) {
    console.log(tipoDeSuscripciones[suscripcion]);
        return;
  }
    console.warn('Ese tipo de suscripción no existe');
} 
'''

