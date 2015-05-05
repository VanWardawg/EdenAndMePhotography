angular.module('EdenAndMePhotography.contact-info')
.directive('contactInfo', [ function () {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/contact-info/contact-info.html',
		link: function ($scope) {
			$scope.pictures = [{
				src: '/assets/images/taylor-1.jpg'},{
				src: '/assets/images/taylor-2.jpg'}];

			$scope.selectedPicture = $scope.pictures[0];

			function changePicture() {
				setTimeout(function(){
					var index = Math.floor(Math.random() * $scope.pictures.length);
					$scope.selectedPicture = $scope.pictures[index];
					$scope.$digest();
					changePicture();
				}, 10000);
			}

			changePicture();

		}
	};
}]);