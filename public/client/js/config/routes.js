app.config(function ($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../../index.html'
  })
  .when('/products', {
    templateUrl: '../../partials/productList.html'
  })
  .when('/cart', {
    templateUrl: '../../partials/cart.html',
    controller: cartController
  })
  .otherwise('/');
})
