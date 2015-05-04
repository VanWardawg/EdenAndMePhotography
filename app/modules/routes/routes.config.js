angular.module('EdenAndMePhotography.routes').config([
	'$urlRouterProvider',
function ($urlRouterProvider) {
	'use strict';

	$urlRouterProvider.otherwise('/');
}]);
