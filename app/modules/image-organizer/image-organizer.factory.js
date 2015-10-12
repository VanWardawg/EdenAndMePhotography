angular.module('EdenAndMePhotography.image-organizer')
.factory('ImageOrganizer', [function () {
	'use strict';

	var _headerLogo = '/assets/images/Eden&MeLogo.png';

	var _myImages = [
		{
			src: '/assets/images/Eden28.jpg'
		},
		{
			src: '/assets/images/Eden24.jpg'
		},
		{
			src: '/assets/images/Eden25.jpg'
		},
		{
			src: '/assets/images/Eden23.jpg'
		}
	];

	var _galleryImagesLarge = [
				{
					src:'/assets/images/Eden6.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden7.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/assets/images/Eden12.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden18n.jpg',
					src2:'/assets/images/Eden18.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/Eden15.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					box:'pink',
					span: {
						row:1,
						col:1
					}
				},{
					src:'/assets/images/Eden20.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden4n.jpg',
					src2:'/assets/images/Eden4.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/Eden14.jpg',
					span: {
						row:2,
						col:3
					}
				},
				//second wave of boxes
				{
					src:'/assets/images/Eden9.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden8.jpg',
					span: {
						row:2,
						col:3
					}
				},{
					src:'/assets/images/Eden22.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden29n.jpg',
					src2:'/assets/images/Eden29.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/Eden2.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					box:'blue',
					span: {
						row:1,
						col:1
					}
				},{
					src:'/assets/images/Eden3.jpg',
					span: {
						row:3,
						col:2
					}
				},{
					src:'/assets/images/Eden5n.jpg',
					src2:'/assets/images/Eden5.jpg',
					span: {
						row:2,
						col:2
					}
				},
				{
					src:'/assets/images/Eden27.jpg',
					span: {
						row:2,
						col:3
					}
				}];
	var pink = {
			box:'pink',
			span: {
				row:1,
				col:1
			}
		};
	var blue = {
			box:'blue',
			span: {
				row:1,
				col:1
			}
		};
	var yellow = {
			box:'yellow',
			span: {
				row:1,
				col:1
			}
		};
	var green = {
			box:'green',
			span: {
				row:1,
				col:1
			}
		};

	var _galleryImagesMedium = angular.copy(_galleryImagesLarge);
	_galleryImagesMedium.splice(4,0,angular.copy(yellow));
	_galleryImagesMedium.splice(9, 0, angular.copy(green),angular.copy(blue));
	_galleryImagesMedium.splice(13,0, angular.copy(green), angular.copy(pink), angular.copy(yellow),angular.copy(blue));
	_galleryImagesMedium.splice(24,0,angular.copy(green), angular.copy(pink));
	_galleryImagesMedium.splice(26,0,angular.copy(blue), angular.copy(yellow));
	_galleryImagesMedium.splice(29, 0, angular.copy(green), angular.copy(pink),angular.copy(blue), angular.copy(yellow));
	var _galleryImagesSmall = angular.copy(_galleryImagesLarge);
	_galleryImagesSmall.splice(3,0,angular.copy(yellow));
	_galleryImagesSmall.splice(5, 0, angular.copy(green),angular.copy(blue));
	_galleryImagesSmall.splice(10,0, angular.copy(green), angular.copy(yellow));
	_galleryImagesSmall.splice(17,0,angular.copy(green));
	_galleryImagesSmall.splice(19,0, angular.copy(pink), angular.copy(yellow));
	_galleryImagesSmall.splice(24,0,angular.copy(yellow), angular.copy(pink));


	var _servicesImages = {
		family:{
			name: 'Family',
			image: '/assets/images/Eden32.jpg',
			background: 'pink',
			text: {
				title:'Family Session',
				price: '$100',
				info:[
				'One Hour of Shooting Time',
				'One Location of Your Choice' ,
				'A Disk of Your Images']
			},
			layout: 'left'
		},
		portrait:{
			name: 'Portraits',
			image: '/assets/images/Eden30.jpg',
			background: 'blue',
			text: {
				title:'Individual Portraits',
				price: '$90',
				info: [
				'One Hour of Shooting Time',
				'Up to 2 Locations of Your Choice',
				'Up to 2 Outfit Changes',
				'Disk of Your Images']
			},
			layout: 'right'
		},
		newborn:{
			name: 'Newborn',
			image: '/assets/images/Eden33.jpg',
			background: 'yellow',
			text: {
				title:'Newborn/Toddler Session',
				price:'$150',
				info:[
				'2 Hours of Allotted Time',
				'Up to 2 Locations of Your Choice',
				'Up to 3 Outfit Changes',
				'Access and Use of My Props',
				'Disk of Your Images']
			},
			layout: 'left'
		},
		wedding:{
			name: 'Wedding',
			image: '/assets/images/Eden16.jpg',
			background: 'green',
			text: {
				title:'Engagement Session',
				price:'$120',
				info:[
				'1-2 Hours of Shooting Time',
				'Up to 2 Locations of Your Choice',
				'One Outfit Change',
				'Disk of Your Images',
				'~Email me about Wedding/Bridal Packages if interested.~']
			},
			layout: 'right'
		}
	};
	return {
		get galleryImagesLarge() {
			return _galleryImagesLarge;
		},
		get galleryImagesMedium() {
			return _galleryImagesMedium;
		},
		get galleryImagesSmall() {
			return _galleryImagesSmall;
		},
		get headerLogo() {
			return _headerLogo;
		},
		get servicesImages() {
			return _servicesImages;
		},
		get myImages() {
			return _myImages;
		}
	};

}]);