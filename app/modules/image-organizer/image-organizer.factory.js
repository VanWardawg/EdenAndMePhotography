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

	var _galleryImages = [
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
					src:'/assets/images/Eden18.jpg',
					span: {
						row:1,
						col:2
					}
				},{
					src:'/assets/images/Eden20.jpg',
					span: {
						row:3,
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
					src:'/assets/images/Eden4.jpg',
					span: {
						row:1,
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
					src:'/assets/images/Eden29.jpg',
					span: {
						row:1,
						col:2
					}
				},{
					src:'/assets/images/Eden11.jpg',
					span: {
						row:3,
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
					src:'/assets/images/Eden5.jpg',
					span: {
						row:1,
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


	var _servicesImages = {
		family:{
			name: 'Family',
			image: '/assets/images/Eden5.jpg',
			background: 'pink',
			text: {
				title:'Family Session',
				price: '$80',
				info:[
				'One Hour of Shooting Time',
				'One Location of Your Choice' ,
				'A Disk of Your Images']
			},
			layout: 'left'
		},
		portrait:{
			name: 'Portraits',
			image: '/assets/images/Eden8.jpg',
			background: 'blue',
			text: {
				title:'Senior Portraits',
				price: '$75',
				info: [
				'1-2 Hours of Shooting Time',
				'Up to 2 Locations of Your Choice',
				'Up to 2 Outfit Changes',
				'Disk of Your Images']
			},
			layout: 'right'
		},
		newborn:{
			name: 'Newborn',
			image: '/assets/images/Eden21.jpg',
			background: 'yellow',
			text: {
				title:'Newborn/Toddler Session',
				price:'$120',
				info:[
				'2 Hours of Time',
				'One Location of Your Choice',
				'Access and Use of My Props',
				'Pictures of Your Spouse and/or Yourself with child',
				'A Disk of at least 12 edited and beautiful images',
				'(Please email me with specific questions , and realize that for specifically newborn styled pictures I ask for the infant to be between one to eight weeks old)']
			},
			layout: 'left'
		},
		wedding:{
			name: 'Wedding',
			image: '/assets/images/Eden16.jpg',
			background: 'green',
			text: {
				title:'Engagement Session',
				price:'$100',
				info:[
				'1-2 Hours of Shooting Time',
				'Up to 2 Locations of Your Choice',
				'1 Outfit Changes',
				'Disk of Your Images',
				'(ask about wedding packages if interested in both wedding and engagement coverage) ',
				'Wedding Coverage:',
				'Email me for the prices for',
				'wedding day packages and offers']
			},
			layout: 'right'
		}
	};
	return {
		get galleryImages() {
			return _galleryImages;
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