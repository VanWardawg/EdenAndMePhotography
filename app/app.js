'use strict';

angular.module('EdenAndMePhotography', ['ngMaterial', 'EdenAndMePhotography.header', 'EdenAndMePhotography.routes'])
.config(['$mdThemingProvider',function($mdThemingProvider) {

	var specialThemeTeal = $mdThemingProvider.extendPalette('green', {
    	'contrastDefaultColor': 'light'
	});
  	$mdThemingProvider.definePalette('specialGreen', specialThemeTeal);
  $mdThemingProvider.theme('default')
    .primaryPalette('specialGreen', {
    	'default': '200',
    	'hue-1' : '100',
    	'hue-2' : '300',
    	'hue-3' : '400'
    })
    .accentPalette('indigo', {
    	'default' : '200',
    	'hue-1' : '100',
    	'hue-2' : '300',
    	'hue-3' : '400'
    });
}])

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
