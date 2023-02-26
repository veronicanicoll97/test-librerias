const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json');
console.log('movies');

router.get('/', (req, res) => {
    res.json(movies);
});

/*POST: es para cargar datos nuevos.
  PUSH: es para guardar datos nuevos.
  DELETE: es para eliminar datos
  PUT: se utiliza para actualizar
  los datos en el arreglo*/
router.post('/', (req, res) => {
    //console.log(req.body);
    const {movie, director, year, rating} = req.body;
    if(movie && director && year && rating){
        //suma un 1 al id
        const id = movies.length + 1; 
        //pasa los objetos del req al objeto del body
        const newMovie = {...req.body, id};
        console.log(newMovie);
        //se guarda la nueva película
        movies.push(newMovie); 
        res.json(movies);
        //res.json('guardado');
    }else {
        //res.send('no encontrado');
        /*Indica que el servidor ha tenido 
        un error a la hora de procesar los datos.
        Le envia el numero del error y un mensaje
        de que ha ocurrido*/
        res.status(500).json({error: "Ha ocurrido un error."});
    }
}
);

router.put('/:id', (req, res) =>{
    /*Desde req.params se obtiene el id 
    de la película*/
    const {id} = req.params;
    /*Datos que quiero actualizar*/
    const {movie, director, year, rating} = req.body;
    /*Comprobamos que existan los datos*/
    if(movie && director && year && rating){
        //Recorremos la lista
        _.each(movies, (req, res) => {
            if(movie.id == id) {
                movie.movie = movie;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        //Envia las peliculas actualizadas
        res.json(movies);
    }else {
        res.status(500).json({error: "Ha ocurrido un error."});
    }

});

//Eliminar un objeto JSON
router.delete('/:id', (req, res) => {
    /*params: recibe todos los parametros
    del objeto*/
    /*Desde req.params se obtiene el id 
    de la película*/
    const {id} = req.params;
    //console.log(req.params);
    /*Recorre el arreglo de películas,
    por cada recorrido en el arreglo
    obtiene el id de la pelicula, luego
    verifica si ese ID existe y procede a
    removerlo*/
    _.each(movies, (movie, i) =>{
        if(movie.id == id){
            /*SPLICE: se utilza para remover
            elemento de un arreglo*/
            movies.splice(i, 1); 
        }
    });
    res.send(movies);
})

module.exports = router;