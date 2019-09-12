/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: Liuyi
 * @Date: 2019-09-12 15:26:10
 * @LastEditors: Liuyi
 * @LastEditTime: 2019-09-12 15:37:09
 */
var app=angular.module('myApp',[]);
app.factory('MyCache',function($cacheFactory){
  return $cacheFactory('myCache',{capacity:5})
});
app.controller('myController',['$scope','MyCache',function($scope,cache){
  cache.put('myValue',55);
}]);
app.controller('myController2',['$scope','MyCache',function($scope,cache){
  $scope.value=cache.get('myValue');
}])