// $("html, body").animate({ scrollTop: $('#title1').height() }, 1000);

$('.link').click(function() {
	var selected = $($(this).attr('href'));
	$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
});