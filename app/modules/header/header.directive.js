angular.module('EdenAndMePhotography.header',[])
.directive('emHeader', ['$location', '$state', 'ImageOrganizer', function ($location, $state, ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/header/header.html',
		link: function ($scope) {
			$scope.ImageOrganizer = ImageOrganizer;
			$scope.navigateTo = function (url) {
				url = url ? url : '';
				$location.url('/' + url);
				$scope.toggleMenu(false);
			};
			$scope.state = $state;
			$scope.navigateTo('/');
		}
	};
}]);