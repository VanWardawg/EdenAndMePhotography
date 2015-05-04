angular.module('EdenAndMePhotography.routes').requires.push('EdenAndMePhotography.routes.gallery');

angular.module('EdenAndMePhotography.routes.gallery').config([
	'$stateProvider',
function ($stateProvider) {
	'use strict';
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'modules/routes/gallery/gallery.html',
		onEnter: function ($rootScope) {
			$rootScope.currentPage = '/';
		}
	}).state('home.gallery', {
		url: 'gallery',
		templateUrl: 'modules/routes/gallery/gallery.html',
		onEnter: function ($rootScope) {
			$rootScope.currentPage = '/';
		}
	});
}]);
