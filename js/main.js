//Autoscroll
$('.link').click(function(e) {
	e.preventDefault();
	var selected = $($(this).attr('href'));
	$("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
});

//Animate progress bars
$(function() {
	$('#skills').waypoint({	
		handler: function() {
			$(".bar > span").each(function() {
				$(this)
					.data("origWidth", $(this).data("percent"))
					//.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});
			this.destroy();
		},
		offset: '20%'
	})
});
