app.service('contentService', function ($http, $q){

  var products = [
      {'name': 'dogbone', 'price': 16, 'description': 'A succulent chewing toy.'},
      {'name': 'coffee', 'price': 3, 'description': 'Brown water.'},
      {'name': 'macbook', 'price': 1400, 'description': 'Useful.'}
   ];

  this.getProducts = function (callback){
    callback(products);
  };

});