'use strict';

angular.module('EdenAndMePhotography', ['ngMaterial', 'EdenAndMePhotography.header', 'EdenAndMePhotography.routes','EdenAndMePhotography.image-viewer'])
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

    $scope.isLarge = function() {
        var isLarge = $scope.$mdMedia('gt-md');
        return isLarge;
    };


    $scope.isMedium = function() {
        var isMedium = $scope.$mdMedia('gt-sm') && !$scope.isLarge();
        return isMedium;
    };


    $scope.isSmall = function() {
        var isSmall = $scope.$mdMedia('sm');
        return isSmall;
    };
    $scope.showImageViewer = false; 

    $scope.$on('showImage', function(event, image, imageList) {
        $scope.image = image;
        $scope.imageList = imageList;
        $scope.showImageViewer = true;
    });

    $scope.hideOverlay = function() {
        if($scope.showImageViewer) {
            $scope.showImageViewer = false;
        }
    };
}]);

// Template module definition
angular.module('EdenAndMePhotography.templates', []);
