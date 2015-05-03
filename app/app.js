'use strict';

angular.module('EdenAndMePhotography', ['ngMaterial'])

.run(['$rootScope', '$mdMedia', '$mdSidenav', function ($scope, $mdMedia, $mdSidenav) {
	$scope.toggleMenu = function () {
		$mdSidenav('left').toggle();
	};

	$scope.$mdMedia = $mdMedia;
}]);

// Template module definition
angular.module('EdenAndMePhotography.templates', []);
