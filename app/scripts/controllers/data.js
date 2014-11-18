'use strict';

angular.module('yo.data', [])

.provider('Collections', [function () {
	this.$get = ['$resource', function($resource) {
		var Users = $resource('http://localhost:3000/api/users');

		return Users;
	}];
}]);