app.service('contentService', function ($http){

	var products = [
  		{'name': 'dogbone', 'price': 16, 'description': 'A succulent chewing toy.'},
  		{'name': 'coffee', 'price': 3, 'description': 'Brown water.'}
 	 ];

	var getProducts = function (){
		console.log('getting products');
		return products;
	};
	
});