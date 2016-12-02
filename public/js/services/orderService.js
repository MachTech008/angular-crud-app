app.service('orderService', function ($http, $q){

	this.shoppingCart = {inventory: [], subtotal: 0};
	this.orders = [];

	this.removeItem = function (item, callback){

	};

	this.addToCart = function (product){
		this.shoppingCart.inventory.push(product);
		this.shoppingCart.subtotal += product.price;
	};

	this.checkoutCart = function (cartData){
		this.orders.push(cartData);
		this.shoppingCart = {inventory: [], subtotal: 0};
	};

	this.getShoppingCart = function (callback){
		callback(this.shoppingCart);
	};

	this.getOrders = function (callback){
		callback(this.orders);
	};


});
