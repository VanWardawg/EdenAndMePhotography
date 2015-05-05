angular.module('EdenAndMePhotography.gallery-grid-view')
.directive('galleryGridView', [ '$mdDialog',function ($mdDialog) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/gallery-grid-view/gallery-grid-view.html',
		link: function ($scope) {
			$scope.gallery = {
				items:[{
					src:'/assets/images/liam-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/liam-2.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/assets/images/liam-3.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/jordyn-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/tytan-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/baird-family-1.jpg',
					span: {
						row:3,
						col:2
					}
				}]
			};

			

			$scope.showAdvanced = function(ev, item) {
			    $mdDialog.show({
			      controller: ['$scope', '$mdDialog', 'item', function DialogController($scope, $mdDialog, item) {
						$scope.item = item;
					}],
			      templateUrl: 'modules/gallery-grid-view/gallery-modal.html',
			      targetEvent: ev,
			      locals:{
			      	item:item
			      }
			    });
			  };
		}
	};
}]);