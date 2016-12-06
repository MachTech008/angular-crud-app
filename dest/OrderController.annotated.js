app.controller('OrderController', ['$scope', 'orderService', function ($scope, orderService) {
  $scope.orders = [];

  orderService.getOrders(function (data) {
    $scope.orders = data;
  });

}]);
