var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var fs = require('fs');


router.get('/', function (req, res, next) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  next();
});

router.get('/stylesheets/style.css', function (req, res, next) {
  var fileName = req.params.name;
  res.sendFile('../public/stylesheets/style.css', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', fileName);
    }
  });
});

module.exports = router;





