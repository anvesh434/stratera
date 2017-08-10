// Code goes here

var app = angular.module('app',[]).controller('appCtrl',function($scope){
  
  $scope.numbers=['999','222','456','123'];
  $scope.add = function(){
    $scope.numbers.push($scope.name);
    $scope.name= '';
  };
});

app.directive('numDirective', function(){
  return {
    restrict:'E',
    templateUrl:'dir.html'
  };
});

app.filter("sortDescending", function () {
    return function (input) {
        return input.sort(function (a,b){return b-a});
    }
});
