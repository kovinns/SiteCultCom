
$(document).ready(function() {
  $(window).stellar();
  $('#myCarousel').carousel({
    interval: 40000
  });

  $("html").niceScroll({
    cursorcolor:"rgba(30,30,30,.5)",
    zindex:999,
    scrollspeed:100,
    mousescrollstep:50,
    cursorborder:"0px solid #fff",
  });




  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration:200,
    numVisible:3
  });


  autoplay();

  // move next carousel
  $('.moveNextCarousel').click(function(e){
     e.preventDefault();
     e.stopPropagation();
     $('.carousel').carousel('next');
  });

  // move prev carousel
  $('.movePrevCarousel').click(function(e){
     e.preventDefault();
     e.stopPropagation();
     $('.carousel').carousel('prev');
  });

    $('.tabs').tabs();



});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
