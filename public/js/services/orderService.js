app.service('orderService', function ($http, $q){

	this.orders = [];
	
	this.getShoppingCart = function (callback){
		$http.get('/shoppingCart')
			.then(function (response){
				callback(response.data);
			})
			.catch(function (err){
				console.log(err);
			})
	};

	this.addToCart = function (product){
		$http.post('/shoppingCart/add', product)
	      .then(function (response){
			// shoppingCart.inventory.push(response.data);
			// shoppingCart.subtotal += response.data.price;
			console.log(response.data);
	    }).catch(function (err){
	      console.error(err);
	    });
	 
	};

	this.removeItem = function (item, callback){
		$http.post('/shoppingCart/removeItem', item)
			.then(function (response){
				callback(response.data);
			}).catch(function (err){
				console.log(err);
			})	
	};

	this.checkoutCart = function (cartData, callback){
		$http.post('/shoppingCart/checkout', cartData)
			.then(function (response){
				callback(response.data);
			}).catch(function (err){
				console.log(err);
			})
		// this.orders.push(cartData);
		// this.shoppingCart = {'inventory': [], 'subtotal': 0};
	};

	// this.getOrders = function (callback){
	// 	callback(this.orders);
	// }


});