'use strict'

var express = require('express');
var request = require('request');

var router = express.Router();
var baseURL = 'http://ec2-54-183-169-236.us-west-1.compute.amazonaws.com:8000'

//Server based instance of shoppingCart
var myShoppingCart = {'inventory': [], 'subtotal': 0};

//Routes
router.get('/products', function(req, res) {
  var url = `${baseURL}/products`;
  getProducts(url, res);
})

router.post('/shoppingCart/add', function (req, res){
  addToCart(req.body, res);
})

//Server Controller methods
function getProducts(url, res) {
  request.get(url, function(err, response, body) {
    if (err) {
      console.error(err);
    }

    res.set('Content-Type', 'application/json');
    res.send(body);
  });
}

function addToCart(req, res){
  myShoppingCart.inventory.push(req);
  myShoppingCart.subtotal += req.price;
  res.json(req);
}



module.exports = router;
