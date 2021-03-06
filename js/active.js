// banner area owlCarousel 
$('.banner-active').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	dots: false,
	items: 1 ,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
}),
//animation  
new WOW().init();


// for offcanvas menu 
$("#offcanvas").offcanvasmenu({
    // trigger element
    menuTrigger: "trigger",
    // or 'left'
    position: "left",
    // animation speed
    speed: "0.3",
    // menu width
    width: "220px"
});


(function ($) {
"use strict";
// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: '991',
});
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});
// css preloader 
$(window).on('load', function () {
		//$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(500);
});
//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

})(jQuery);

