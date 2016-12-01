app.controller('productListController', ['contentService', 'orderService', function (contentService, orderService) {

	this.products = [];

  contentService.getProducts(function (data){
    this.products = data;
  });
  

  this.addToCart = function (product){
  	console.log(product);
  };

}]);
