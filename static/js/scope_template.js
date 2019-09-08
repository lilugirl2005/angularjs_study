angular.module('myApp', []).
controller('SimpleTemplate', function ($scope) {
  $scope.name = 'liuyi',
    $scope.valueA = 5;
  $scope.valueB = 7;
  $scope.valueC = 12;
  $scope.watchedItem = 'myItem';
  $scope.counter = 0;
  $scope.$watch('name', function (newValue, oldValue) {
    console.log('newvalue', newValue);
    console.log('oldvalue', oldValue);
    $scope.counter += 1;
  })
  $scope.addValues = function (v1, v2) {
    var v = angular.$rootScope;
    $scope.valueC = v1 + v2;
  }
});