/*const: define una consante*/

// const operacion = require('./operaciones.js');

/*Es para ver que es lo que se guarda en la 
constante operacion*/

// console.log(operacion)

/*require: importa funciones de otros archivos, 
se le debe especificar la ruta en donde está alojado
el archivo*/

// console.log(operacion.add(1, 3));
// console.log(operacion.substact(1, 3));
// console.log(operacion.multiply(1, 3));
// console.log(operacion.divide(1, 3));
// console.log(operacion.divide(1, 0));


/*
Considere el lenguaje reducido math que acepta expresiones aritméticas 
incluyendo números sin signo (enteros o con punto flotante), 
operadores aritméticos (+, -, * y /), paréntesis abierto y cerrado, variables 
(inician con una letra y pueden venir seguido de letras o dígitos), y el operador de asignación (=).

EJ: y=3*x+10
*/


const regexA = /[a-zA-Z=][a-zA-Z|0-9|0-9\.0-9][+|-|*|/][a-zA-Z|0-9|0-9\.0-9]|[(a-zA-Z|0-9|0-9\.0-9][+|-|*|/][a-zA-Z|0-9|0-9\.0-9)]|[0-9|0-9\.0-9]/
const regexB = /[a-zA-Z=][a-zA-Z|0-9|0-9\.0-9]*[+|-|*|/]|[()]*[a-zA-Z|0-9|0-9\.0-9]*[+|-|*|/]|[0-9|0-9\.0-9]/
const regexC = /[a-zA-Z=][a-zA-Z|0-9|\.0-9]*[+|-|*|/]|[()]*/
const eje1 = 'y=3*x+10'
const eje2 = 'x=(y+10)/20'
const eje3 = 'x=20.1+1'
const eje4 = 'x=20+1'
const eje5 = 'x=201'
const eje6 = 'x=20.1'
const eje7 = 'x=20.1y'

console.log("Ejemplo 1: ", regexC.test(eje1));
console.log("Ejemplo 2: ", regexC.test(eje2));
console.log("Ejemplo 3: ", regexC.test(eje3));
console.log("Ejemplo 4: ", regexC.test(eje4));
console.log("Ejemplo 5: ", regexC.test(eje5));
console.log("Ejemplo 6: ", regexC.test(eje6));
console.log("Ejemplo 7: ", regexC.test(eje7));



const corchete= /\[/
console.log('Corechete: ', corchete.test('['));