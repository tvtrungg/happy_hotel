// import logo from '../src/img/logo.PNG';
// import logo2 from '../src/img/logo2.png';
import $ from 'jquery'; 

$(document).ready(function () {
	$(".image-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: false


	});
});

$(document).ready(function () {
	$(".container_room_types").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 2,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev_suites"><ion-icon name="arrow-back-outline"></ion-icon></button>',
		nextArrow: '<button type="button" class="slick-next_suites"><ion-icon name="arrow-forward-outline"></ion-icon></button>',

	});
});

$(document).ready(function () {
	$(".feedback_container").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		adaptiveHeight: true,
		speed: 700,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev_feedback"><ion-icon name="arrow-back-outline"></ion-icon></button>',
		nextArrow: '<button type="button" class="slick-next_feedback"><ion-icon name="arrow-forward-outline"></ion-icon></button>',
	});
});

/*Tạo active thu gọn header khi cuộn xuống*/
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#header').addClass('active');
		/*thay đổi img của nav_menu_top li  */
		/*How add logo2 inside  .nav_menu_top li img*/
		$('.nav_menu_top li img').attr('src', '../src/img/logo2.png');

	} else {
		$('#header').removeClass('active');
		$('.nav_menu_top li img').attr('src', '../src/img/logo.PNG');
	}
});


/*Hotel Service*/
/** Used Only For Touch Devices **/
// (function (window) {

// 	// for touch devices: add class cs-hover to the figures when touching the items
// 	if (Modernizr.touch) {

// 		// classie.js https://github.com/desandro/classie/blob/master/classie.js
// 		// class helper functions from bonzo https://github.com/ded/bonzo

// 		function classReg(className) {
// 			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
// 		}

// 		// classList support for class management
// 		// altho to be fair, the api sucks because it won't accept multiple classes at once
// 		var hasClass, addClass, removeClass;

// 		if ('classList' in document.documentElement) {
// 			hasClass = function (elem, c) {
// 				return elem.classList.contains(c);
// 			};
// 			addClass = function (elem, c) {
// 				elem.classList.add(c);
// 			};
// 			removeClass = function (elem, c) {
// 				elem.classList.remove(c);
// 			};
// 		}
// 		else {
// 			hasClass = function (elem, c) {
// 				return classReg(c).test(elem.className);
// 			};
// 			addClass = function (elem, c) {
// 				if (!hasClass(elem, c)) {
// 					elem.className = elem.className + ' ' + c;
// 				}
// 			};
// 			removeClass = function (elem, c) {
// 				elem.className = elem.className.replace(classReg(c), ' ');
// 			};
// 		}

// 		function toggleClass(elem, c) {
// 			var fn = hasClass(elem, c) ? removeClass : addClass;
// 			fn(elem, c);
// 		}

// 		var classie = {
// 			// full names
// 			hasClass: hasClass,
// 			addClass: addClass,
// 			removeClass: removeClass,
// 			toggleClass: toggleClass,
// 			// short names
// 			has: hasClass,
// 			add: addClass,
// 			remove: removeClass,
// 			toggle: toggleClass
// 		};

// 		// transport
// 		if (typeof define === 'function' && define.amd) {
// 			// AMD
// 			define(classie);
// 		} else {
// 			// browser global
// 			window.classie = classie;
// 		}

// 		[].slice.call(document.querySelectorAll('ul.grid > li > figure')).forEach(function (el, i) {
// 			el.querySelector('figcaption > a').addEventListener('touchstart', function (e) {
// 				e.stopPropagation();
// 			}, false);
// 			el.addEventListener('touchstart', function (e) {
// 				classie.toggle(this, 'cs-hover');
// 			}, false);
// 		});

// 	}

// })(window);


/*HOTEL NEWS*/
/*Khi scroll đến thì mới hiện ra, bình thường sẽ ẩn đi*/
$(window).scroll(function () {
	if ($(this).scrollTop() > 1950) {		
		$('.hotel_news').addClass('active');
	} else {
		$('.hotel_news').removeClass('active');
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 2630) {		
		$('.hotel_events').addClass('active');
	} else {
		$('.hotel_events').removeClass('active');
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 3230) {		
		$('.hotel_map').addClass('active');
	} else {
		$('.hotel_map').removeClass('active');
	}
});




