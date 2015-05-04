angular.module('EdenAndMePhotography.header',[])
.directive('emHeader', ['$location', function ($location) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/header/header.html',
		link: function ($scope) {
			$scope.navigateTo = function (url) {
				url = url ? url : '';
				$location.url('/' + url);
				$scope.toggleMenu(false);
			};

			$scope.navigateTo('/');
		}
	};
}]);