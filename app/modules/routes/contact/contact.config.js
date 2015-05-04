angular.module('EdenAndMePhotography.routes').requires.push('EdenAndMePhotography.routes.contact');

angular.module('EdenAndMePhotography.routes.contact').config([
	'$stateProvider',
function ($stateProvider) {
	'use strict';
	$stateProvider
	.state('contact', {
		url: '/contact',
		templateUrl: 'modules/routes/contact/contact.html',
		onEnter: function ($rootScope) {
			$rootScope.currentPage = '/contact';
		}
	});
}]);
