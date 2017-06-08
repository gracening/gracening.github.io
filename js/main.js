$(document).ready(function () {
	var scrolled;
	var lastScrollTop = 0;
	var navHeight = $('header').outerHeight();

	// autoscroll
	$('.link').click(function(e) {
		e.preventDefault();
		var selected = $($(this).attr('href'));
		$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
	});
	
	// nav bar
	$(window).scroll(function(event){
		scrolled = true;
	});

	setInterval(function() {
		if (scrolled) {
			moveNav();
			scrolled = false;
		}
	}, 250);

	function moveNav() {
		var st = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - st) <= 5)
			return;
		
		if (st > lastScrollTop && st > navHeight){
			// scroll Down
			$('header').removeClass('nav-down').addClass('nav-up');
		} 
		else {
			// scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('header').removeClass('nav-up').addClass('nav-down');
			}
		}
		
		lastScrollTop = st;
	}
	
	// pop up
	$('.art-grid li a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});
});

