app.controller('productListController', function () {

  console.log('Hit the product Controller');


  this.products = [
  		{'name': 'dogbone', 'price': 16 },
  		{'name': 'coffee', 'price': 2 }
  ];


  this.addToCart = function (product){
  	console.log(product);
  };

});
