var firstApp = angular.module('firstApp', []).config(function ($provide, $filterProvider) {
  $provide.value("startTime", new Date());
  $filterProvider.register('myFilter', function () {

  });

}).run(function (startTime, $rootScope) {
  $rootScope.rootValue = 5;
  console.log('startTime', startTime);
});

firstApp.constant('cID', 'ABC');
firstApp.value('counter', 0);
firstApp.value('image', {
  name: 'box.jpg',
  height: 12,
  width: 20
})
firstApp.controller('FirstController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.first = 'Liu';
  $scope.last = 'Yi';
  $scope.heading = 'Message';

  $scope.rootValue = $rootScope.rootValue;
  $scope.updateMessage = function () {
    console.log('click');
    $scope.message = ' Hello ' + $scope.first + ' ' + $scope.last + '!';
  }


}]);