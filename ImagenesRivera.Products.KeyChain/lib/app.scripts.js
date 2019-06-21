( function($) {
  'use strict';
$(document).ready(function() {
	$('#collopse-button').click(function() {
	   $(this).toggleClass('active');
	   $('#overlay-menu').toggleClass('open');
	  });
});


  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){

		$('.loader').fadeOut();

    	var wow = new WOW({
		    offset: 100,          
		    mobile: false
		  }
		);
		wow.init();
	});

	/*-------------------------------------------------------------------------------
	  Progress Bars
	-------------------------------------------------------------------------------*/



	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}
			
		});
	}



	/*-------------------------------------------------------------------------------
	  Counter
	-------------------------------------------------------------------------------*/



	function counter() {
		
		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {
		
			$(".counter .counter-value:in-viewport").each(function() {
				
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});	
				}
			
			});
			
		}
	}



	/*-------------------------------------------------------------------------------
	  Windows scroll
	-------------------------------------------------------------------------------*/



	$(window).scroll(function() {
		progress_bars();
		counter();
	});
	
	/*-------------------------------------------------------------------------------
	  Flex Slider
	-------------------------------------------------------------------------------*/
	
	$('.slider-bg').flexslider({
		mode: 'fade',
		auto: true,
		controlNav: false,
		keyboard: true
	});
	
	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/
	
	jQuery.stellar({
	   horizontalScrolling: false,
	   scrollProperty: 'scroll',
	   positionProperty: 'position',
	});
	
})(jQuery);
