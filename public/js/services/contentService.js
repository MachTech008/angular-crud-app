app.service('contentService', ['$http', '$q', '$log', function ($http, $q, $log) {

  this.getProducts = function (callback) {
    $http.get('/products')
    .then(function (response) {
      callback(response.data);
    }).catch(function (err) {
      $log.error(err);
    });
  };

}]);
