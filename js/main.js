$(document).ready(function () {
  // autoscroll
  $('.scroll').click(function(e) {
    e.preventDefault();
    var selected = $($(this).attr('href'));
    $("html, body").animate({ scrollTop: selected.offset().top -50 }, 1000);
  });

  // pop up
  $('.art-grid li a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
      navigateByImgClick: true
    }
  });
});

