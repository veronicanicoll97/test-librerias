const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
/*process.env.PORT: en caso que haya un puerto 
definido por el sistema,o por el servicio de 
la nube, que tome ese puerto, caso contrario, 
que utilice el puerto 3000*/    
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routs
app.use(require('./routs/index'));
app.use('/api/movies', require('./routs/movies'));
app.use('/api/users', require('./routs/users'));

//starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});