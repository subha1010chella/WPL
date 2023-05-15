angular.module('Services', [])
.controller('ServicesController', function($scope, $location, $timeout) {
$scope.loc=$location.absUrl();
$scope.head="I'd rather be lost in the lights, lost in the lights, I'm out of my mind";
$timeout(function(){
$scope.head="Can you help me numb the pain? Each night, you spin me up high, emotions on ice~";
},5000)
});
