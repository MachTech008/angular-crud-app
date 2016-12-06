'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var products = require('./server/products');
var orders = require('./server/orders');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// bundle

app.get('/products', products);
app.get('/orders', orders);
app.get('/shoppingCart', orders);
app.post('/shoppingCart/add', orders);
app.post('/shoppingCart/removeItem', orders);
app.post('/shoppingCart/checkout', orders);


app.listen(port, function () {
  console.log('express listening on port 3000');
});

module.exports = app;
