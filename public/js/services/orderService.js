app.service('orderService', function ($http, $q){

	this.shoppingCart = {'inventory': [], 'subtotal': 0};
	var cartReset = this.shoppingCart;
	this.orders = [];

	// this.getOrders = function (callback){
	// 	callback()
	// };
	
	this.addToCart = function (product){
		this.shoppingCart.inventory.push(product);
		this.shoppingCart.subtotal += product.price;
		console.log(this.shoppingCart);

	};

	// this.checkoutCart = function (cartData){
	// 	this.orders.push(cartData);
	// 	this.shoppingCart = cartReset;
	// };

	this.getShoppingCart = function (callback){
		callback(this.shoppingCart);
	};

	this.getOrders = function (callback){
		callback(this.orders);
	}


});