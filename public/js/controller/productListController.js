app.controller('productListController', function (contentService, orderService) {

  var vm = this;
  var tempObjArray;

  vm.products = [];

  var dataClean = function (data){
    tempObjArray = [];
    for (var i = 0; i < data.Items.length; i++){
      var newObj = {};
      newObj.name = data.Items[i].name.S;
      newObj.price = parseInt(data.Items[i].price.N);
      newObj.description = data.Items[i].description.S;
      tempObjArray.push(newObj);
    }
  };

  contentService.getProducts(function (data){
    // dataClean(data);
    // vm.products = tempObjArray;
    vm.products = data;
  });


  vm.addToCart = function (product){
    orderService.addToCart(product);
  };

});
