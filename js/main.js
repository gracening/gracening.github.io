//Autoscroll
$(document).ready(function () {
	$('.link').click(function(e) {
		e.preventDefault();
		var selected = $($(this).attr('href'));
		$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
	});

	$('.art-grid li a').magnificpopup({
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true
		}
	});
});
