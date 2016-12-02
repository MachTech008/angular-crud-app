app.controller('productListController', function (contentService, $interval) {

	this.products = [];

  contentService.getProducts(function (data){
    this.products = data;
    console.log(this.products);
  });

  

  this.addToCart = function (product){
  	console.log(product);
  };

});

