

(function($) {
	'use strict'; 

	// NICE SELECT
	$('#selector').niceSelect();
	$('#selector-type').niceSelect(); 
	$('#slider-selector').niceSelect(); 
	$('#count-pages').niceSelect(); 


	AOS.init();

 
	// loader
	$(window).on( "load", function() {
		$('.preloader').fadeOut(1000);
	});
 
	new Swiper(".wppool-swiper", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			} ,
			320: {
				slidesPerView: 1,
			} 
		},
	});

	/*END SWIPER JS*/	


	// tab menu
	$(".bar-icon").click(function() {
		$(".tab-menu__area").addClass("tab-menu__area-open")
	})
	$(".tab-menu__title-times-btn").click(function() {
		$(".tab-menu__area").removeClass("tab-menu__area-open") 
	})

 
	var fixed_top = $(".common_sticky_menu");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			fixed_top.addClass("sticky-menu animated fadeInDown");
		} else {
			fixed_top.removeClass("sticky-menu animated fadeInDown");
		}
	});
	var m_fixed_top = $(".mobile_common_sticky_menu");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			m_fixed_top.addClass("mobile-sticky-menu animated fadeInDown");
		} else {
			m_fixed_top.removeClass("mobile-sticky-menu animated fadeInDown");
		}
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').css({
				'bottom': '2%',
				'opacity': '1',
				'transition': 'all .5s ease'
			});
		} else {
			$('.scrollToTop').css({
				'bottom': '-30%',
				'opacity': '0',
				'transition': 'all .5s ease'
			})
		}
	});

	//Click event to scroll to top
	$('a.scrollToTop').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	// scroll bottom
	$('.scrollToBottom').on('click', function () {
		$("html, body").animate({ scrollTop: $("html, body").prop("scrollHeight") }, 1000);
	});
	 

	$(document).ready(function(){
		$(".header-item-right span").click(function(){
		$(".header-item-right").toggleClass("bar_open");
			$(".header-bottom").toggleClass("open");
		});
	});
		
	$(".header-menu ul li ul").parent("li").addClass("m");
	$('.header-menu ul li a').on('click', function(e) {
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp("swing");
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown("swing");
			element.siblings('li').children('ul').slideUp("swing");
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp("swing");
		}
	});		

})(jQuery);


