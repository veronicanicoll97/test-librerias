/*Se utilizara jsonplaceholder para ejemplos
Este servicio de JSON ofrece ejemplos de prueba*/

const {Router} = require('express');
const router = Router();
/*Modulo utilizado para hacer peticiones 
get, post, delete a otros servicios desde
nodejs*/
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    /*realizamos una petición FETCH a
    una direccion url.
    Sólo el: 
    fetch('https://jsonplaceholder.typicode.com/users')
    es una petición asíncrona, por lo que tardará para
    obtener los datos. Por lo tanto, se utiliza el 
    método async / await para decir que esa petición 
    va tardar y que espere*/

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    /*Debemos convertir el string que estamos reciiendo
    en un JSON*/
    const users = await response.json()
    //console.log(users);
    //res.send('users');
    res.json(users);
});

module.exports = router;