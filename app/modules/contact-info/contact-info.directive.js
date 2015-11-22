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

			$scope.Request = {
				'Name':'',
				'Email':'',
				'Phone':'',
				'Message':''
			};

			$scope.normal = angular.copy($scope.Request);

			$scope.SendMessage = function() {
				var link = 'mailto:EdenAndMePhoto@gmail.com' +
				             '?cc=' + $scope.Request.Email +
				             '&subject=' + escape('Website Inquiry from ' + $scope.Request.Name) +
				             '&body=' + escape('Phone: ' + $scope.Request.Phone + '\n' + $scope.Request.Message);
				window.location.href = link;

				$scope.Request = angular.copy($scope.normal);
			};

		}
	};
}]);