angular.module('EdenAndMePhotography.gallery-grid-view')
.directive('galleryGridView', [ '$mdDialog',function ($mdDialog) {
	'use strict';

	return {
		restrict: 'E',
		templateUrl: 'modules/gallery-grid-view/gallery-grid-view.html',
		link: function ($scope) {
			$scope.gallery = {
				items:[{
					src:'/modules/gallery-grid-view/liam-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/modules/gallery-grid-view/liam-2.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/modules/gallery-grid-view/liam-3.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/modules/gallery-grid-view/jordyn-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/modules/gallery-grid-view/tytan-1.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/modules/gallery-grid-view/baird-family-1.jpg',
					span: {
						row:3,
						col:2
					}
				}]
			};

			function DialogController($scope, $mdDialog, item) {
				$scope.item = item;
			}

			$scope.showAdvanced = function(ev, item) {
			    $mdDialog.show({
			      controller: DialogController,
			      templateUrl: '/modules/gallery-grid-view/gallery-modal.html',
			      targetEvent: ev,
			      locals:{
			      	item:item
			      }
			    });
			  };
		}
	};
}]);