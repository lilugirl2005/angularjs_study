angular.module('myApp', [])
  .controller('myController', function ($scope) {
    $scope.title = "myApplication";
    $scope.myFunc = function () {
      console.log("out");
    }
  }).directive('myDirective', function () {
    return {
      scope: {
        title: '=',
        newFunc: "&myFunc",
        info: '@'
      },

      template: '<div ng-click="newFunc()">{{title}}:{{info}}</div>',

    }
  })