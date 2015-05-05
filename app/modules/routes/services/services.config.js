angular.module('EdenAndMePhotography.routes').requires.push('EdenAndMePhotography.routes.services');

angular.module('EdenAndMePhotography.routes.services').config([
	'$stateProvider',
function ($stateProvider) {
	'use strict';
	$stateProvider
	.state('services', {
		url: '/services&prices',
		templateUrl: 'modules/routes/services/services.html'
	});
}]);
