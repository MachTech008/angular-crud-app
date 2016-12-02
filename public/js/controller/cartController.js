app.controller('cartController', function (orderService, $location) {
	
	var vm = this;

	vm.shoppingCart = [];
	vm.myOrder;

	orderService.getShoppingCart(function (data){
		vm.shoppingCart = data;
		console.log(data);
	});

	vm.removeFromCart = function (item){
		// orderService.removeItem(item, function (data){
		// 	if (data){
				vm.shoppingCart.subtotal -= vm.shoppingCart.inventory[vm.shoppingCart.inventory.indexOf(item)].price;
				vm.shoppingCart.inventory.splice(vm.shoppingCart.inventory.indexOf(item), 1);
		// 	}
		// })
	};
	

	vm.checkoutCart = function (){
		var order = {};
		order.items = vm.shoppingCart.inventory;
		order.total = vm.shoppingCart.subtotal;
		order.createdAt = new Date();
		vm.myOrder = order;

		vm.shoppingCart = [];
		orderService.checkoutCart(order);
		// $location.path('/orders');
	};

});
