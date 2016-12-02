app.controller('cartController', function (orderService, $location) {
	
	var vm = this;

	vm.shoppingCart = [];
	vm.myOrder;

	orderService.getShoppingCart(function (data){
		vm.shoppingCart = data;
		console.log(data);
	});

	// $scope.removeFromCart = function ($index)

	vm.checkoutCart = function (){
		var order = {};
		order.items = vm.shoppingCart.inventory;
		order.total = vm.shoppingCart.subtotal;
		order.createdAt = new Date();
		if (vm.shoppingCart.length > 0){
			vm.myOrder = order;
		};
		vm.shoppingCart = [];
		// orderService.checkoutCart(order);
		// $location.path('/orders');
	};

});
