angular.module('EdenAndMePhotography.contact-info')
.directive('contactInfo', ['ImageOrganizer', function (ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/contact-info/contact-info.html',
		link: function ($scope) {
			$scope.pictures = ImageOrganizer.myImages;

			var selectedIndex = 0;
			$scope.selectedPicture = $scope.pictures[selectedIndex];

			function changePicture() {
				setTimeout(function(){
					var index = Math.floor(Math.random() * $scope.pictures.length);
					if(selectedIndex === index) {
						selectedIndex++;
					}
					$scope.selectedPicture = $scope.pictures[selectedIndex];
					$scope.$digest();
					changePicture();
				}, 10000);
			}

			//changePicture();

		}
	};
}]);