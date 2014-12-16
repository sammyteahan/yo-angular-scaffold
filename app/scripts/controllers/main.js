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
        }],
        'Admins':['Admins', function(Admins) {
          return Admins.query();
        }]
      }
		});
	}])

  .controller('HomeCtrl', function ($scope, Users, Admins) {
  	
    $scope.users = Users;
    $scope.users.forEach(function(index) {
      console.log(index);
    });

    $scope.admins = Admins;
    $scope.admins.forEach(function(index) {
      console.log(index);
    });

    // Not necessarily a correct way to post info to 
    // a resolved $resource object
    $scope.submitUser = function() {
      console.log($scope.formName + ' ' + $scope.formEmail);
      var newUser = new Users();
      newUser.name = $scope.formName;
      newUser.email = $scope.formEmail;
      newUser.save();
    };

    $scope.newAdmin = function() {
      var newAdmin = new Admins();
      newAdmin.name = $scope.formName;
      newAdmin.email = $scope.formEmail;
      console.log(newAdmin);
    };

  });