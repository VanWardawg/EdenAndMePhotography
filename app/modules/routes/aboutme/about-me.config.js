angular.module('EdenAndMePhotography.routes').requires.push('EdenAndMePhotography.routes.about-me');

angular.module('EdenAndMePhotography.routes.about-me').config([
	'$stateProvider',
function ($stateProvider) {
	'use strict';
	$stateProvider
	.state('aboutme', {
		url: '/aboutme',
		templateUrl: 'modules/routes/aboutme/about-me.html'
	});
}]);
