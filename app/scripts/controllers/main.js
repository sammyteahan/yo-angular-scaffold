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
			controller: 'HomeCtrl'
		});
	}])
  .controller('HomeCtrl', function ($scope) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
