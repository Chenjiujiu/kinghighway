"use strict";
~function(){
	new WOW().init();
	$('body').scrollspy({ target: '.navbar-collapse' });
	$('#home-slide').on('slide.bs.carousel', function () {
		$('#home-slide .carousel-inner .carousel-caption').children().addClass('animated');
		
	})
}();
