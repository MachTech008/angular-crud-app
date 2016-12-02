app.controller('cartController', function ($scope, orderService) {
	
	$scope.shoppingCart = [];

	orderService.getShoppingCart(function (data){
		$scope.shoppingCart = data;
	});

	$scope.removeFromCart = function ($index)

});
