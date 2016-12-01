app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
   templateUrl: '../partials/productList.html',
    controller: 'productListController as productController'
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
  
  $locationProvider
    .html5Mode(true);
});
