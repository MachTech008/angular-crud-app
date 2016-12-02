app.controller('orderController', function ($scope, orderService){
	$scope.orders = [];

	orderService.getOrders(function (data){
		$scope.orders = data;
	});

});