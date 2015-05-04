'use strict';

angular.module('EdenAndMePhotography', ['ngMaterial', 'EdenAndMePhotography.header', 'EdenAndMePhotography.routes'])

.run(['$rootScope', '$mdMedia', '$mdSidenav', function ($scope, $mdMedia, $mdSidenav) {
	$scope.toggleMenu = function (value) {
		if(!value && value !== false){
			$mdSidenav('left').toggle();
		}
		else if(value){
			$mdSidenav('left').open();
		}
		else if(!value){
			$mdSidenav('left').close();
		}
	};

	$scope.$mdMedia = $mdMedia;
}]);

// Template module definition
angular.module('EdenAndMePhotography.templates', []);
