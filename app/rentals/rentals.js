'use strict';

angular.module('rentfinds.rentals', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rentals', {
    templateUrl: 'rentals/rentals.html',
    controller: 'RentalsCtrl'
  }).
      when('/details/:id', {
      templateUrl: 'rentals/details.html',
      controller: 'DetailsCtrl'
  }).
      when('/add', {
      templateUrl: 'rentals/add.html',
      controller: 'RentalsCtrl'
  }).
    	when('/edit/:id', {
      templateUrl: 'rentals/edit.html',
      controller: 'EditCtrl'
  })
  
  
}])

.controller('RentalsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  refresh();
  
  var city = $scope.city;
  
	// Define Firebase Collection
  var ref = new Firebase("https://appartmentfinder.firebaseio.com/rentals");
  
  
}])

.controller('DetailsCtrl', [function() {
	console.log('DetailsCtrl Working..');
}])

.controller('EditCtrl', [function() {
	console.log('EditCtrl Working..');
}])