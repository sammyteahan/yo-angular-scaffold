'use strict';

angular.module('yo.data', [])

.provider('Users', [function () {
	this.$get = ['$resource', function($resource) {
		var Users = $resource('http://localhost:3000/api/users');
		var Admins = $resource('http://localhost:3000/api/admins');

		return {
			Users: Users,
			Admins: Admins
		};
	}];
}])

.provider('Admins', [function () {
	this.$get = ['$resource', function($resource) {
		var Admin = $resource('http://localhost:3000/api/admins');
		return {
			admins : admins
		};
	}];
}]);