var a = {
  name: 'liuyi',
  age: 0
}

var b = angular.copy(a);

var objArr = [{
  score: 95
}, {
  score: 98
}, {
  score: 92
}];

var scores = [];
angular.forEach(objArr, function (value, key) {
  console.log('key', key);
  console.log('value', value);
  this.push(value);
}, scores);

console.log('scores', scores);
console.log('objArr', objArr);

console.log(angular.isDefined(a.age));