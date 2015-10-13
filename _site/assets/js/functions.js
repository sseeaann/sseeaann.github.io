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
  }).on('mouseover', function(){
    $(this).addClass('pulse').one(animationEnd,function(){
      $(this).removeClass('pulse');
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

// Contact Us Overlay
  $('.writeMe').on('click', function(){
    $('.overlay').addClass('is-open');
    $('body').css('overflow','hidden');
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
    $('body').css('overflow','initial');
    $('#contactForm')[0].reset();
  });

// Form submit
  $('#contactForm').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
      email: {
        required: true,
        email: true
      },
      message: "required"
    },
    messages: {
      _replyto: "* Um... I kind of need a valid email",
      message: "* What, cat got your tongue?"
    },
    errorLabelContainer: '#errorMessages',
    submitHandler: function(){
      swal({
        title: "Thanks!",
        text: "I heard ya loud and clear.",
        imageUrl: "assets/img/jumpMe.png",
        imageSize: "200x200",
        confirmButtonColor: "#80170f"
      });
      $('.overlay').removeClass('is-open');
      $('body').css('overflow','initial');
      $('#contactForm')[0].reset();
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
        $('header').fadeIn(500);
      } else {
        $('header').fadeOut(200);
      }
      this.previousTop = currentTop;
    });
  };

});
