'use strict';

/**
 * @ngdoc overview
 * @name yoAngularScaffoldApp
 * @description
 * # yoAngularScaffoldApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularScaffoldApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'yo.data',
    'yo.home',
    'yo.about'
  ])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( '/home' );
  }]);