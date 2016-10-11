//Autoscroll
$('.link').click(function(e) {
	e.preventDefault();
	var selected = $($(this).attr('href'));
	$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
});
