var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

router.use(function (req, res, next){
  filePath = path.join(__dirname, "../public", req.path);
  var checkFile = fs.lstat(filePath, function(err, stats){
    if(!err && stats.isFile()){
      res.sendFile(filePath, next);
    }
    else(next());
  });
});


router.get('', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
  // next();
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  console.log(text);
  res.redirect('/');
});

router.get('/users/:name/tweets/:id', function (req, res) {
  var name = req.params.name;
  var id = req.params.id;
  console.log("id: ",id);
  var list = tweetBank.find({id: id});
  console.log("list: ", list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

module.exports = router;





