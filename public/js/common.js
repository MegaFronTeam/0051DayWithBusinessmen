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

  /* flip card */
  // const cards = document.querySelectorAll('.flip-card');
  // if (cards.length) {

  //   cards.forEach((cardWrap) => {
  //     function flipCard() {
  //       cardWrap.querySelector('.card').classList.toggle('is-flipped');
  //     }
  //     // cardWrap.addEventListener( 'click', flipCard)
  //     cardWrap.addEventListener( 'mouseenter', flipCard)
  //     cardWrap.addEventListener( 'mouseleave', flipCard)
  //   });
  // }
  const cards = document.querySelectorAll('.flip-card');

// Function to determine if the device is a mobile device
  function isMobileDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  if (cards.length) {
    cards.forEach((cardWrap) => {
      function flipCard() {
        cardWrap.querySelector('.card').classList.toggle('is-flipped');
      }
      
      if (isMobileDevice()) {
        cardWrap.addEventListener('click', flipCard);
      } else {
        cardWrap.addEventListener('mouseenter', flipCard);
        cardWrap.addEventListener('mouseleave', flipCard);
      }
    });
  }

  // Optional: Add a listener to handle changes in media query and update the event listeners accordingly
  const mediaQuery = window.matchMedia("(pointer: coarse)");
  mediaQuery.addEventListener('change', () => {
    const isMobile = mediaQuery.matches;
    
    cards.forEach((cardWrap) => {
      const card = cardWrap.querySelector('.card');
      const flipCardHandler = () => card.classList.toggle('is-flipped');

      // Remove all event listeners
      cardWrap.removeEventListener('click', flipCardHandler);
      cardWrap.removeEventListener('mouseenter', flipCardHandler);
      cardWrap.removeEventListener('mouseleave', flipCardHandler);
      
      // Add appropriate event listeners based on device type
      if (isMobile) {
        cardWrap.addEventListener('click', flipCardHandler);
      } else {
        cardWrap.addEventListener('mouseenter', flipCardHandler);
        cardWrap.addEventListener('mouseleave', flipCardHandler);
      }
    });
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
