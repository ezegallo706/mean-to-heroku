'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas 
// app.get('/', (req, res) => {
//   res.status(200).send(
//     "<h1> pagina de inicio</h1>"
//   );
// });

// app.get('/projects', (req, res) => {
//   res.status(200).send({
//     message: "hola mundo desde mi API node.js"
//   });
// });

app.use('/api', project_routes);

// Index Route
app.get('/api', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


//exportar
module.exports = app;