'use strict'

var express = require('express');
var request = require('request');

var router = express.Router();
var baseURL = 'http://ec2-54-183-169-236.us-west-1.compute.amazonaws.com:8000'

function handleRequest(url, res) {

  request.get(url, function(err, response, body) {
    if (err) {
      console.error(err);
    }

    res.set('Content-Type', 'application/json');
    res.send(body);
  });
}

router.get('/orders', function(req, res) {
  var url = `${baseURL}/orders`;

  handleRequest(url, res);

})

module.exports = router;
