var express = require('express');
var app = express();
var port = 3000;
var swig = require('swig');
// var fs = require('fs');

app.listen(port, function () {
  console.log("Listening on Port: ", port);
});


app.use(function (req, res, next) {
  console.log(req.method, req.url);
  console.log(res.statusCode);
  next();
});

app.get('/', function (req, res, next) {
  // console.log(res.u);
  var renderer = swig.renderFile('./views/index.html', {
        title: 'An Example',
        people: ['Shafiq', 'Raf', 'Yustin'],
    });
  // next();
  res.send(renderer);
});
