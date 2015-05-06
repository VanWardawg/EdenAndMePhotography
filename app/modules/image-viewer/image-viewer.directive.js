angular.module('EdenAndMePhotography.image-viewer')
.directive('imageViewer', ['$rootScope', function($rootScope) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/image-viewer/image-viewer.html',
		scope: {
			'image': '=',
			'previous': '=',
			'next' : '='
		},
		link: function($scope) {
			console.log($scope.image);
			$scope.isLarge = $rootScope.isLarge;
			$scope.isMedium = $rootScope.isMedium;
			$scope.isSmall = $rootScope.isSmall;
		}
	};
}]);