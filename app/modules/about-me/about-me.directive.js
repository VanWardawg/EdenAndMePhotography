angular.module('EdenAndMePhotography.about-me')
.directive('aboutMe', ['ImageOrganizer', function (ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/about-me/about-me.html',
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