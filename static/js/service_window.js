/*
 * @Module: 
 * @FileName: 
 * @Description: 
 * @Author: Liuyi
 * @Date: 2019-09-12 15:26:10
 * @LastEditors: Liuyi
 * @LastEditTime: 2019-09-12 16:14:10
 */
var app=angular.module('myApp',[]);

app.controller('myController',['$scope','$window',function($scope,window){
 window.alert(
   'Your screen is：\n'+
   window.screen.availWidth+'X'+window.screen.availHeight
 );
}]);
