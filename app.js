var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'tile-list/index.html');
});

app.locals.basedir = path.join(__dirname, '/');
