var express = require('express');
var app = express();
var port = 3000;
var swig = require('swig');
var mime = require('mime');
var fs = require('fs');
var people;
var routes = require('./routes/index');
var bodyParser = require('body-parser');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);

swig.setDefaults({ cache: false });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, function () {
  console.log("Listening on Port: ", port);
});

app.use('/', routes);

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});


