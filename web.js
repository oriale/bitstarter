var express = require('express');

//0 cal fer un require de fs
var fs = require('fs');

var app = express.createServer(express.logger());

//1 obrir fitxer index.html en sync
//2 llegir contingut amb fs.readFileSync(fitxer) , sense ops pq entrega un buffer X
var data = fs.readFileSync(  "./index.html" );

app.get('/', function(request, response) {
 // response.send('Hello World2!'); //posar entre () el Buffer.toString del buffer X
    response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//queda per resoldre quin es el path de l'arxiu index.html

