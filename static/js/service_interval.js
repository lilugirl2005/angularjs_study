/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: Liuyi
 * @Date: 2019-09-12 15:26:10
 * @LastEditors: Liuyi
 * @LastEditTime: 2019-09-12 16:29:12
 */
var app=angular.module('myApp',[]);

app.controller('myController',['$scope','$interval',function($scope,$interval){
  $scope.seconds=0;
  var myInterval=$interval(function(){
    $scope.seconds++;
  },1000,10,true);
 
 $scope.$on('$destroy',function(){
   $scope.cancel(myInterval);
 })
}]);
