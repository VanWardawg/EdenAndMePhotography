angular.module('EdenAndMePhotography.background-image')
.directive('backImg', [function(){
	'use strict';
    return {
		restrict: 'A',
		link : function(scope, element, attrs){
	        var url = attrs.backImg;
	        element.css({
	            'background-image': 'url(' + url +')',
	            'background-size' : 'cover'
	        });
	    }
	}
}]);