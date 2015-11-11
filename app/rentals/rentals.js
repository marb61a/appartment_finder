'use strict';

angular.module('rentfinds.rentals', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rentals', {
    templateUrl: 'rentals/rentals.html',
    controller: 'RentalsCtrl'
  });
}])

.controller('RentalsCtrl', [function() {
	console.log('RentalsCtrl Working..');
}]);