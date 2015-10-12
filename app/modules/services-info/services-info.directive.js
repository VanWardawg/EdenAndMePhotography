angular.module('EdenAndMePhotography.services-info')
.directive('servicesInfo', ['ImageOrganizer', function (ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/services-info/services-info.html',
		link : function($scope) {
			$scope.ImageOrganizer = ImageOrganizer;
			$scope.hide = true;
			setTimeout(function() {
				$scope.hide = false;
				$scope.$apply();
			},500);
		}
	};
}]);