$(document).ready( function () {
	

	// Scroll Functionality

	
	$(window).scroll(function () {
		$('.site-header').slideDown('fast');
	});
	

	
	$(window).scroll( function () {
		// Portfolio Items
		if ($(window).scrollTop() > $(window).height() ) {
			var delay = 0,
				increment = 300;
			$('.portfolio-item').each(function() {
				$(this).delay(delay).fadeTo(800, 1);
				delay += increment;
			});
		}
	});

	

	// Nav-toggle
	$('.nav-toggle').on("click", function () {
	       $(this).toggleClass('toggle-open');
	       $('.nav-menu').fadeToggle();
	});
});