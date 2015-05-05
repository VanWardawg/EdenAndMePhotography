angular.module('EdenAndMePhotography.header',[])
.directive('emHeader', ['$location', '$state', function ($location, $state) {
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
			$scope.state = $state;
			$scope.navigateTo('/');
		}
	};
}]);