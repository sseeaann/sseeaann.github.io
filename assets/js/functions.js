$( document ).ready(function() {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

// Easter Egg 1:
  $('.logo').on('click', function(){
    $('.yipee').show().addClass('rollIn').one(animationEnd, function(){
      $(this).removeClass('rollIn').addClass('rollOut').one(animationEnd, function(){
        $(this).removeClass('rollOut').hide();
      });
    });
  });
// Easter Egg 2:
  $('#heart').on('click', function(){
    $('.easter-egg').show().addClass('zoomInDown').one(animationEnd, function(){
      $(this).removeClass('zoomInDown').addClass('zoomOutUp').one(animationEnd, function(){
        $(this).removeClass('zoomOutUp').hide();
      });
    });
  });

// Toggle Mobil Navbar:
  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav-toggle, .mobile-nav').toggleClass('is-open');
    if($('.mobile-nav').hasClass('is-open')){
      $('a').on('click', function(){
        $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
      });
    }
  });

// Smooth Scroll:
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

// Hide Navbar on scroll down:
  if ($(window).width() <= 775) {
    $(window).scroll({
      previousTop: 0
    },
    function() {
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {
        $('header').slideDown();
      } else {
        $('header').slideUp();
      }
      this.previousTop = currentTop;
    });
  };

});
