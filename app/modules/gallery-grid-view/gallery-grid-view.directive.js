angular.module('EdenAndMePhotography.gallery-grid-view')
.directive('galleryGridView', [ 'ImageOrganizer', function (ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/gallery-grid-view/gallery-grid-view.html',
		link: function ($scope) {
			$scope.ImageOrganizer = ImageOrganizer;
			
			$scope.showAdvanced = function(ev, item, imageList) {
				ev.stopPropagation();
				$scope.$emit('showImage',item, imageList);
			};
			
		}
	};
}]);