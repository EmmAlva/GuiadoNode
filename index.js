var express = require('express');
var path = require('path');
var app = express();

//app.use = use this url para diriguirse a los archivos siguiente (__dirname /nombre del directorio)
app.use('/static', express.static(path.join(__dirname, 'node_modules')));//?????
app.use('/static', express.static(path.join(__dirname, 'assets'))); //genera un path

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
}).listen(8000);