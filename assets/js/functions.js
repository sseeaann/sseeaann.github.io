$(function(){

// SVG animations
	function load_leaves(){
		$('.garnish').show();
		var path = document.querySelector('.path-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-2');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-3');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-4');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-5');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-6');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-7');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('.path-8');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 1s .8s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';
	}

	function load_social(){
		$('.contact-icon').show();

	// MAIL ICON
		var path = document.querySelector('#mail-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#mail-2');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

	// GITHUB ICON
		var path = document.querySelector('#git-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

	// LINKEDIN ICON
		var path = document.querySelector('#linkedin-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#linkedin-2');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#linkedin-3');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#linkedin-4');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#linkedin-5');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

	// TWITTER ICON
		var path = document.querySelector('#twitter-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

	// INSTAGRAM ICON
		var path = document.querySelector('#insta-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#insta-2');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#insta-3');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#insta-4');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

	// RESUME ICON
		var path = document.querySelector('#resume-1');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#resume-2');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#resume-3');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#resume-4');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';

		var path = document.querySelector('#resume-5');
		var length = path.getTotalLength();
		// Clear any previous transition
		path.style.transition = path.style.WebkitTransition =
		  'none';
		// Set up the starting positions
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		// Trigger a layout so styles are calculated & the browser
		// picks up the starting position before animating
		path.getBoundingClientRect();
		// Define our transition
		path.style.transition = path.style.WebkitTransition =
		  'stroke-dashoffset 2s ease-in-out';
		// Go!
		path.style.strokeDashoffset = '0';
	}


	function grooveIntro(){
		$('#grooveIntro')[0].load();
		$('#grooveIntro')[0].play();
	}

	function groove(){
		$('#groove')[0].load();
		$('#groove')[0].play();
	}

	function mmmYeah(){
		$('#mmmYeah')[0].load();
		$('#mmmYeah')[0].play();
	}

	function swellMe(){
		$('#swellMe')[0].load();
		$('#swellMe')[0].play();
	}

	function mute(){
		$('audio').prop('muted', true);
	}

	function unmute(){
		$('audio').prop('muted', false);
	}


	function typed(){
		$('#greeting').typed({
			strings: ['...^1700','greetings.^1000','my name is sean','my name is ^750 sseeaann.^1000','this is my portfolio.^1000 <br>enjoy...^1000'],
			typeSpeed: 75,
			backSpeed: 40,
			backDelay: 500,
			showCursor: false,
			callback: function(){
				$('#greeting').fadeOut(2000);
				setTimeout(function(){
					window.location.href = '/home.html';
				}, 2800);
			}
		});
	}

	function checkForCookies(){
		if(docCookies.getItem('muted') !== null){
			eraseAudioCookie();
		}
	}

	function noAudioCookie(){
		docCookies.setItem('muted','true');
	}

	function eraseAudioCookie(){
		docCookies.removeItem('muted');
	}

	function showAudioIcon(){
		if(docCookies.getItem('muted') !== null) {
			$mute.show();
			mute();
		} else {
			$play.show();
		}
	}



	var $play = $('.ion-volume-high'),
		$mute = $('.ion-volume-mute'),
		isMobile = false,
		$folio = $('#folio'),
		$about = $('#about'),
		$navLink = $('.nav-link'),
		$navHome = $('#nav-link-home'),
		$navFolio = $('#nav-link-folio'),
		$navAbout = $('#nav-link-about'),
		$transition = $('.transition'),
		animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		$menuOpen = $('#menu-open'),
		$menuClose = $('#menu-close'),
		$nav = $('nav');

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;
	}

// INDEX PAGE:
	if(isMobile === false && top.location.pathname === '/'){
		checkForCookies();
		grooveIntro();
		setTimeout(function(){
			typed();
		}, 500);
		$play.show();
	} else if(isMobile === true && top.location.pathname === '/') {
		setTimeout(function(){
			typed();
		}, 500);
	}


// HOME PAGE:
	if(isMobile === false && top.location.pathname === '/home.html'){

		load_leaves();
		groove();
		showAudioIcon();

		$folio.hover(function(){
			$about.toggleClass('fade');
		});
		$about.hover(function(){
			$folio.toggleClass('fade');
		});
		$('#myName').hover(function(){
			$('#folio, #about').toggleClass('fade');
		});
	} else if(isMobile === true && top.location.pathname === '/home.html'){
		load_leaves();
	}

	$('#folio, #about').click(function(){
		$transition.fadeIn(750).addClass('dark fade-trans-reverse');
		$('audio').animate({volume: 0}, 3500);
	});

	$folio.click(function(){
		setTimeout(function(){
			window.location.href = '/portfolio.html';
		}, 3500);
	});

	$about.click(function(){
		setTimeout(function(){
			window.location.href = '/about.html';
		}, 3500);
	});

// FOLIO PAGE:
	if(top.location.pathname === '/portfolio.html'){

		var $folioItem = $('.folioItem'),
			$folioInfo = $('.folioInfo');

		if(isMobile === false){
			mmmYeah();
			showAudioIcon();
		}

		$('body').addClass('flow');

		$navLink.click(function(){
			$('body').removeClass('flow');
			$transition.fadeIn(750).addClass('dark');
			$('audio').animate({volume: 0}, 3500);
		});

		$navHome.click(function(){
			$nav.removeClass('is-open');
			$menuClose.addClass('bye-bye').one(animationEnd, function(){
				$(this).hide();
			});
			setTimeout(function(){
				window.location.href = '/home.html';
			}, 3500);
		});

		$navAbout.click(function(){
			$nav.removeClass('is-open');
			$menuClose.addClass('bye-bye').one(animationEnd, function(){
				$(this).hide();
			});
			setTimeout(function(){
				window.location.href = '/about.html';
			}, 3500);
		});

		$folioItem.click(function(){
			$(this).toggleClass('adjust-left').children($folioInfo).toggleClass('info-open');
		});

		if(isMobile === false){
			$folioItem.addClass('grayscale');
		}
		
	}

// ABOUT PAGE:
	if(top.location.pathname === '/about.html'){

		function emailReplace(){
			setTimeout(function(){
				$('#typed1-alt').typed({
					strings: ['seanhaines13[at]gmail[dot]com'],
					showCursor: false
				});
			}, 250);
		}

		if(isMobile === false){
			function aboutIntro(){
				$('#aboutIntro p').fadeOut(2000);
				$('#aboutIntro h1').fadeIn(2000);
				setTimeout(function(){
					$('#aboutIntro h1').addClass('intro-scroll');
				}, 7000);
				setTimeout(function(){
					$('#aboutIntro h1').hide().removeClass('intro-scroll');
				}, 15000);
				setTimeout(function(){
					$('#aboutIntro p').fadeIn(2000);
					setTimeout(function(){
						$('#aboutIntro p').fadeOut(2000);
					}, 2750);
					setTimeout(function(){
						$('#aboutIntro h1').fadeIn(2000);
					}, 4750);
				}, 55000);
			}

			aboutIntro();
			load_social();
			swellMe();
			showAudioIcon();

			setInterval(function(){
				aboutIntro();
			}, 59750);
		} else {
			$('#aboutWords .bigFont').css('display','block');
		}


		$('#typed1').typed({
			stringsElement: $('#typed-mail'),
			showCursor: false,
			startDelay: 2000
		});
		$('#typed2').typed({
			stringsElement: $('#typed-git'),
			showCursor: false,
			startDelay: 2400
		});
		$('#typed3').typed({
			stringsElement: $('#typed-linkedin'),
			showCursor: false,
			startDelay: 2800
		});
		$('#typed4').typed({
			stringsElement: $('#typed-twitter'),
			showCursor: false,
			startDelay: 3200
		});
		$('#typed5').typed({
			stringsElement: $('#typed-instagram'),
			showCursor: false,
			startDelay: 3600
		});
		$('#typed6').typed({
			stringsElement: $('#typed-resume'),
			showCursor: false,
			startDelay: 4000
		});

		$('#typed1').click(function(){
			$(this).hide();
			$('#typed1-alt').show();
			emailReplace();
		});
		

		$navLink.click(function(){
			$('body').removeClass('flow');
			$transition.fadeIn(750).addClass('dark');
			$('audio').animate({volume: 0}, 3500);
			$('#contact-nav').hide();
		});

		$navHome.click(function(){
			$nav.removeClass('is-open');
			$menuClose.addClass('bye-bye').one(animationEnd, function(){
				$(this).hide();
			});
			setTimeout(function(){
				window.location.href = '/home.html';
			}, 3500);
		});

		$navFolio.click(function(){
			$nav.removeClass('is-open');
			$menuClose.addClass('bye-bye').one(animationEnd, function(){
				$(this).hide();
			});
			setTimeout(function(){
				window.location.href = '/portfolio.html';
			}, 3500);
		});
		
	}


	// Mute audio
	$play.click(function(){
		noAudioCookie();
		mute();
		$(this).hide();
		$mute.show();
	});

	// Unmute audio
	$mute.click(function(){
		eraseAudioCookie();
		unmute();
		$(this).hide();
		$play.show();
	});

	$menuOpen.click(function(){
		$(this).addClass('bye-bye').one(animationEnd, function(){
			$(this).removeClass('bye-bye').hide();
			$menuClose.show().addClass('hello').one(animationEnd, function(){
				$(this).removeClass('hello');
			});
		});
		$nav.addClass('is-open');
	});

	$menuClose.click(function(){
		$(this).addClass('bye-bye-up').one(animationEnd, function(){
			$(this).removeClass('bye-bye-up').hide();
			setTimeout(function(){
				$menuOpen.show().addClass('hello').one(animationEnd, function(){
					$(this).removeClass('hello');
				});
			}, 550);
		});
		$nav.removeClass('is-open');
	});
	

});





