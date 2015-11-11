var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');
var path = require('path');

router.use(function (req, res, next){
	filePath = path.join(__dirname, "../public", req.path);
	var checkFile = fs.lstat(filePath, function(err, stats){
		if(!err && stats.isFile()){
			res.sendFile(filePath, next);
		}
		else(next());
	});
})

router.get('', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js',  name: tweets.name, tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  console.log("name", name)
  console.log("list", list)
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

router.get('/users/:name/tweets/:id', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  console.log("name", name)
  console.log("list", list)
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

module.exports = router;





