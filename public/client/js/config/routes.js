app.config(function($routeProvider){
  $routeProvider
  .when('/products', {
    templateUrl: '../partials/productList.html',
    controller: 'productListController'
  })
  .when('/cart', {
    templateUrl: '../partials/cart.html',
    controller: 'cartController'
  })
  .otherwise({
    redirectTo: '/'
  })
});
