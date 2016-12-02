app.controller('productListController', function ($scope, contentService, orderService) {

	$scope.products = [];

  contentService.getProducts(function (data){
    $scope.products = data;
  });


  $scope.addToCart = function (product){
    orderService.addToCart(product);
  };

});

