'use strict';

/**
 * @ngdoc function
 * @name yoAngularScaffoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularScaffoldApp
 */
angular.module('yo.home', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state( 'home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl',
      resolve: {
        'Users': ['Users', function(Users) {
          return Users.query();
        }]
      }
		});
	}])

  .controller('HomeCtrl', function ($scope, Users) {
  	
    $scope.users = Users;

    $scope.users.forEach(function(index) {
      console.log(index);
    });    

  });