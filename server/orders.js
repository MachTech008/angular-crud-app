'use strict'

var express = require('express');
var request = require('request');

var router = express.Router();
var baseURL = 'http://ec2-54-183-169-236.us-west-1.compute.amazonaws.com:8000'

//Server based instance of shoppingCart
var myShoppingCart = {'inventory': [], 'subtotal': 0};
var myOrder = {};

//Routes
router.get('/orders', function(req, res) {
  var url = `${baseURL}/orders`;

  getOrders(url, res);

})

router.get('/shoppingCart', function (req, res){
	getCart(req, res);
})

router.post('/shoppingCart/add', function (req, res){
  addToCart(req.body, res);
})

router.post('/shoppingCart/removeItem', function (req, res){
	removeItemFromCart(req.body, res);
})

router.post('/shoppingCart/checkout', function (req, res){
	checkoutCart(req.body, res);
})

//Order Controller method
function getOrders(url, res) {

  request.get(url, function(err, response, body) {
    if (err) {
      console.error(err);
    }

    res.set('Content-Type', 'application/json');
    res.send(body);
  });
}

function getCart(req, res){
	res.json(myShoppingCart);
}

function addToCart(req, res){
  myShoppingCart.inventory.push(req);
  myShoppingCart.subtotal += req.price;
  res.json(req);
}

function removeItemFromCart(req, res){
	myShoppingCart.subtotal -= myShoppingCart.inventory[myShoppingCart.inventory.indexOf(req).price];
	myShoppingCart.inventory.splice(myShoppingCart.inventory.indexOf(req), 1);
	res.json("Removed Item");
}

function checkoutCart(req, res){
	myOrder = req;
	myShoppingCart = [];
	res.json(req);

}


module.exports = router;
