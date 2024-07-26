"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

  
	const personsSwiper = new Swiper(".sPersons__slider--js", {

		slidesPerView: 1,
		spaceBetween: 50,
		navigation: {
			nextEl: ".sPersons__slider--js .swiper-button-next",
			prevEl: ".sPersons__slider--js .swiper-button-prev",
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true, 
		},
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
	});

    
	const personsSwiper2 = new Swiper(".sPersons__slider--js-2", {

		slidesPerView: 1,
		spaceBetween: 50,
		navigation: {
			nextEl: ".sPersons__slider--js-2 .swiper-button-next",
			prevEl: ".sPersons__slider--js-2 .swiper-button-prev",
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true, 
		},
	});

	const applySwiper = new Swiper(".sApply__slider--js", {

		slidesPerView: 1,
		spaceBetween: 50,
		navigation: {
			nextEl: ".sApply__slider--js .swiper-button-next",
			prevEl: ".sApply__slider--js .swiper-button-prev",
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true, 
		},
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
