angular.module('EdenAndMeHeader',[])
.directive('eamHeader', ['$location', function ($location) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/EdenAndMeHeader/EdenAndMeHeader.html',
		link: function ($scope) {
			$scope.navigateTo = function () {
				$location.url('/');
			};
		}
	};
}]);