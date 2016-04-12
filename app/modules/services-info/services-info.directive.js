angular.module('EdenAndMePhotography.services-info')
.directive('servicesInfo', ['ImageOrganizer', '$mdDialog', function (ImageOrganizer, $mdDialog) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/services-info/services-info.html',
		link : function($scope) {
			$scope.ImageOrganizer = ImageOrganizer;
			$scope.hide = true;

			setTimeout(function() {
				$scope.hide = false;
				var alert = $mdDialog.alert({
			        title: 'Warning: Price Change!',
			        content: 'These prices are about to go up!Book a session before May 1st to keep these prices!',
			        ok: 'Got it!'
			      });
				$mdDialog
				.show( alert )
				.finally(function() {
				  alert = undefined;
				});

				// $mdDialog.show({
		  //         clickOutsideToClose: true,
		  //         scope: $scope,        // use parent scope in template
		  //         preserveScope: true,  // do not forget this if use parent scope
		  //         // Since GreetingController is instantiated with ControllerAs syntax
		  //         // AND we are passing the parent '$scope' to the dialog, we MUST
		  //         // use 'vm.<xxx>' in the template markup
		  //         template: '<md-dialog>' +
		  //           '  <md-dialog-content class = "dialog-padding"><h3  class = "dialog-header">Warning: Price Change!</h3> ' +
		  //           '<p>These prices are about to go up!<br>' +
		  //           'Book a session before May 1st to keep these prices!</p></md-dialog-content>' +
		  //           '  <div class="md-actions">' +
		  //           '    <md-button class="md-primary" ng-click="closeDialog()">' +
		  //           '      Got it!' +
		  //           '    </md-button>' +
		  //           '  </div>' +
		  //           '</md-dialog>',
		  //         controller: function DialogController($scope, $mdDialog) {
		  //           $scope.closeDialog = function() {
		  //             $mdDialog.hide();
		  //           };
		  //         }
		  //      }).then(function(answer) {
		  //      	$scope.hide = false;
		  //      	$scope.$apply();
		  //      });

				$scope.$apply();
			},500);
		}
	};
}]);