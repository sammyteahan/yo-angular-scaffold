'use strict';

angular.module('yo.data', [])

.provider('Users', [function () {
	this.$get = ['$resource', function($resource) {
		var Users = $resource('http://localhost:3000/api/users');

		return Users;
	}];
}])

.provider('Admins', [function () {
	this.$get = ['$resource', function($resource) {
		var Admins = $resource('http://localhost:3000/api/admins');
		
		return Admins;
	}];
}]);