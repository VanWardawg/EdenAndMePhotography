angular.module('EdenAndMePhotography.image-viewer')
.directive('imageViewer', ['$rootScope', function($rootScope) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/image-viewer/image-viewer.html',
		scope: {
			'image': '=',
			'imageList': '='
		},
		link: function($scope) {
			$scope.index = 0;
			$scope.previousImage = function (event) {
				event.stopPropagation();
				$scope.image = $scope.imageList[--$scope.index];
			};

			$scope.nextImage = function(event) {
				event.stopPropagation();
				$scope.image = $scope.imageList[++$scope.index];
			};

			if ($scope.imageList) {
				for(var i = 0; i < $scope.imageList.length; i++) {
					if($scope.imageList[i] === $scope.image) {
						$scope.index = i;
						break;
					}
				}
			}
			$scope.isLarge = $rootScope.isLarge;
			$scope.isMedium = $rootScope.isMedium;
			$scope.isSmall = $rootScope.isSmall;
		}
	};
}]);