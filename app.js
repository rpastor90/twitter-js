var express = require('express');
var app = express();
var port = 3000;

app.listen(port, function () {
  console.log("Listening on Port: ", port);
});

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  console.log(res.statusCode);
  next();
});

app.get('/', function (req, res) {
  // console.log(res.u);
  res.send('Hello World!');
});
