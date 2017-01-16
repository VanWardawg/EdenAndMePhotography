angular.module('EdenAndMePhotography.header',[])
.directive('emHeader', ['$location', '$state', 'ImageOrganizer', function ($location, $state, ImageOrganizer) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/header/header.html',
		link: function ($scope) {
			$scope.ImageOrganizer = ImageOrganizer;
			$scope.navigateTo = function (url) {
				if(url === 'blog') {
					window.open('http://edenandmephotography.blogspot.com/', '_blank');
					return;
				}
				url = url ? url : '';
				$location.url('/' + url);
				$scope.toggleMenu(false);
			};
			
			setTimeout(function() {
				alert("Website is under construction, please check back after January 31, 2017 for updated pricing and portfolio");
			},500);
			$scope.state = $state;
			$scope.navigateTo('/');
		}
	};
}]);