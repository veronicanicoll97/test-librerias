/*Modulo OS y algunas funciones*/

const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log(os.uptime());
console.log(os.version());

const fs = require('fs');


//Crear un archivo
fs.writeFile('./texto.txt', 'hola bebé',
    function(err){
        if(err){
            console.log(err);
        }
        console.log('Archivo creado');
    }
);

console.log('ultima linea del código');

/*Leer un archivo*/

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

 /*Modulo HTTP*/

const http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, { //puedo usar 40
        'Content-type': 'text/html' //puedo usar plain
    });
    res.write('<h1>HOLA BIENVENIDO</h1>');
    res.end();
}).listen(3000);

/*Otra forma de hacer lo de arriba */

const http = require('http');
const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, { /*puedo usar 404*/
       'Content-type': 'text/html' /* puedo usar plain*/
    });
    res.write('<h1>HOLA BIENVENIDO</h1>');
    res.end();
}

const serverA = http.createServer(handleServer);

serverA.listen(3000, function(){
    console.log('server en el puerto 3000'.rainbow);
});


/*Utilzación de EXPRESS.js para crear un servidor*/
const express = require('express');
const colors = require('colors');

const serverB = express();

serverB.get('/', function(req, res){
    res.send('<h1>HOLA BIENVENIDO</h1>');
    res.end();
})

serverB.listen(3000, function(){
    console.log('server on port 3000'.red);
});