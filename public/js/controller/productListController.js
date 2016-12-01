app.controller('productListController', ['contentService', function (contentService) {

	function getProducts(products){
		contentService.getProducts()
	}

  // this.products = [
  // 		{'name': 'dogbone', 'price': 16 },
  // 		{'name': 'coffee', 'price': 2 }
  // ];


  this.addToCart = function (product){
  	console.log(product);
  };

}]);
