var express = require('express');
var path = require('path');
var app = express();

//app.use = use this url para diriguirse a los archivos siguiente (__dirname /nombre del directorio)
app.use('/static', express.static(path.join(__dirname, 'node_modules')));//?????
app.use('/static', express.static(path.join(__dirname, 'assets'))); //genera un path

//setear el puerto
  app.set('port', (process.env.PORT || 5000));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
  
})//.listen(8000);

app.listen(app.get('port'), function(){
          
console.log('Node app is running on port', app.get('port'));
           })