app.config(function($routeProvider){

  $routeProvider
  .when('/', {
   templateUrl: '../partials/productList.html'
  })
  .when('/cart', {
    templateUrl: '../partials/cart.html'
  })
  .when('/orders', {
    templateUrl: '../partials/orders.html'
  })
  .otherwise({
    redirectTo: '/'
  })
  
});
