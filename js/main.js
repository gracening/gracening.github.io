//Autoscroll
$('.link').click(function(e) {
	e.preventDefault();
	var selected = $($(this).attr('href'));
	$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
});

$('.art-grid li a').magnificPopup({
    type: 'image',
    gallery: {
    	enabled: true,
		navigateByImgClick: true
    }
});

//$(function() {
//	$('#portfolio').waypoint({	
//		handler: function() {
//			$(".art-grid li").each(function() {
//				$(this)
//					.fadeIn(");
//			});
//			this.destroy();
//		},
//		offset: '20%'
//	})
//});
