angular.module('EdenAndMePhotography.image-organizer')
.factory('ImageOrganizer', [function () {
	'use strict';

	var _headerLogo = '/assets/images/Eden&MeLogo.png';
	
	var _galleryImages = [
				{
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
					src:'/assets/images/baird-family-2.jpg',
					span: {
						row:2,
						col:3
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
				}];


	var _servicesImages = {
		family: '/assets/images/baird-family-2.jpg',
		portrait: '/assets/images/baird-family-2.jpg',
		newborn: '/assets/images/baird-family-2.jpg',
		wedding: '/assets/images/baird-family-2.jpg'
	}
	return {
		get galleryImages() {
			return _galleryImages;
		},
		get headerLogo() {
			return _headerLogo;
		},
		get servicesImages() {
			return _servicesImages;
		}
	};

}]);