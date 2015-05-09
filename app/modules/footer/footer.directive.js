angular.module('EdenAndMePhotography.footer',[])
.directive('emFooter', [function () {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/footer/footer.html'
	};
}]);