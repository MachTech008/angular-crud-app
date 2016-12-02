app.controller('productListController', function (contentService, orderService) {

  var vm = this;

	vm.products = [];

  contentService.getProducts(function (data){
    vm.products = data;
  });


  vm.addToCart = function (product){
    orderService.addToCart(product);
  };

});

