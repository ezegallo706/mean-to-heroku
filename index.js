'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

 mongoose.Promise = global.Promise;
 mongoose.connect('mongodb://eze:eze123@ds139632.mlab.com:39632/minodejsdatabase') 
         .then(() => { 
                console.log('Conexión a la base de datos establecida...')
                app.listen(port, () => {
                    console.log('servidor corriendo en el puerto 3700')
                });
            })
         .catch(err => console.log(err));


