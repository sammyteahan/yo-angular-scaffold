'use strict';

/**
 * @ngdoc function
 * @name yoAngularScaffoldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularScaffoldApp
 */
angular.module('yo.about', ['ui.router'])
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider.state( 'about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		});
	}])
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
