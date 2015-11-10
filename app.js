var express = require('express');
var app = express();
var port = 3000;
var swig = require('swig');
var people;
// var fs = require('fs');
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('title', 'An Example');
app.set('people', ['Shafiq', 'Raf', 'Yustin']);
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

app.listen(port, function () {
  console.log("Listening on Port: ", port);
});


app.use(function (req, res, next) {
  console.log(req.method, req.url);
  console.log(res.statusCode);
  next();
});

app.use('/', function (req, res, next) {
  app.get('title');
  res.render('index', {people: app.get('people'), title: app.get('title')});
});

