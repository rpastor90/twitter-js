var express = require('express');
var app = express();
var port = 3000;
var swig = require('swig');
var mime = require('mime');
var fs = require('fs');
var people;
var routes = require('./routes/index');
// var fs = require('fs');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// app.set('title', 'An Example');
// app.set('people', ['Shafiq', 'Raf', 'Yustin']);
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:

app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

app.listen(port, function () {
  console.log("Listening on Port: ", port);
});

// app.use(function (req, res, next) {
//   var options = {
//     root: __dirname + '/public/',
//     dotfiles: 'deny',
//     headers: {
//         'x-timestamp': Date.now(),
//         'x-sent': true
//     }
//   };
//   res.sendFile(req.path, options, function (err) {
//     if (err) {
//       console.log(err);
//       next();
//     }
//     else {
//       console.log('Sent:', req.path);
//     }
//   });

// });

app.use('/', routes);

