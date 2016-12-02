app.config(function($routeProvider){

  $routeProvider
  .when('/', {
   templateUrl: '../partials/productList.html',
    controller: 'productListController'
  })
  .when('/cart', {
    templateUrl: '../partials/cart.html',
    controller: 'cartController'
  })
  .when('/orders', {
    templateUrl: '../partials/orders.html',
    controller: 'orderController'
  })
  .otherwise({
    redirectTo: '/'
  })
  
});
