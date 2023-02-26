//Creando un objeto

const Math = {};

//Funciones de operaciones básicas.

function add(x1, x2) {
    return x1 + x2; 
}

function substact(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if (x2 == 0){
        console.log('NO SE PUEDE DIVIDIR ENTRE 0')
    } else {
        return x1 / x2;
    }
}

/*Aquí se crean los objetos del tipo Math, Y 
en vez de hacer un "exports" nada más, se exporta el 
modulo "Math"*/

Math.add = add;
Math.substact = substact;
Math.multiply = multiply;
Math.divide = divide;

/*"module.exports" también se utiliza para exportar 
funciones, variables, etc.*/
module.exports = Math;

/*exports: exporta las funciones junto con
un alías. Exporta una propiedad de un 
objeto*/

exports.add = add;
exports.substact = substact;
exports.multiply = multiply;
exports.divide = divide;
