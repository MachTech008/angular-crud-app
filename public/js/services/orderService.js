app.service('orderService', function ($http, $q){

	this.shoppingCart = [];

	// this.getOrders = function (callback){
	// 	callback()
	// };
	
	this.addToCart = function (product, callback){
		this.shoppingCart.push(product);
		console.log(this.shoppingCart);

	};
	this.getShoppingCart = function (callback){
		callback(this.shoppingCart);
	};
});