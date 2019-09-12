/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: Liuyi
 * @Date: 2019-09-12 15:26:10
 * @LastEditors: Liuyi
 * @LastEditTime: 2019-09-12 15:55:11
 */
var app=angular.module('myApp',['ngCookies']);
app.controller('myController',['$scope','$cookieStore',function($scope,cookieStore){
  $scope.favCookie='';
  $scope.myFavCookie='';
  $scope.setCookie=function(){
    if($scope.favCookie==='None'){
      cookieStore.remove('myAppCookie')
    }else{
      cookieStore.put('myAppCookie',{flavor:$scope.favCookie});
    }
    $scope.myFavCookie=cookieStore.get('myAppCookie');
  }
}]);
