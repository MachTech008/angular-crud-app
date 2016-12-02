app.service('contentService', function ($http, $q){

  this.getProducts = function (callback){
    $http.get('/products')
      .then(function (response){
        callback(response.data)
    }).catch(function (err){
      console.error(err);
    });
  };

});
