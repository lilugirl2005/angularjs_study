var myMod = angular.module('myMode', []);
myMod.value('modMsg', 'Hello from My Module');
myMod.controller('controllerB', ['$scope', 'modMsg', function ($scope, msg) {
  $scope.message = msg;
}]);

var myApp = angular.module('myApp', ['myMode']).run(function ($rootScope) {
  $rootScope.rootValue = 5;
});
myApp.value('appMsg', 'Hello from My App');
myApp.controller('controllerA', ['$scope', 'appMsg', 'modMsg', '$rootScope', function ($scope, msg, msg2, $rootScope) {
  $scope.message = msg;
  $scope.message2 = msg2;
  $scope.value = 12;
  $scope.difference = function () {
    console.log('difference', $rootScope.rootValue - $scope);
    return $rootScope.rootValue - $scope;

  }
}])