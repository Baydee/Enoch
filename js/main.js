 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1,
			touchDrag: false, 
			mouseDrag: false, 
	      },
	      600:{
	        items:1,
			touchDrag: true,
            mouseDrag: true,
	      },
	      1000:{
	        items:1,
			touchDrag: true,
            mouseDrag: true,
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

$('#ftco-nav').on('shown.bs.collapse hidden.bs.collapse', function() {
	var isExpanded = $('.navbar-toggler').attr('aria-expanded') === 'true';
	$('.navbar-toggler .oi')[isExpanded ? 'addClass' : 'removeClass']('oi-x');
  });

  
  const storageKey = 'theme-preference'

  const onClick = () => {
	// flip current value
	theme.value = theme.value === 'light'
	  ? 'dark'
	  : 'light'
  
	setPreference()
  }
  
  const getColorPreference = () => {
	if (localStorage.getItem(storageKey))
	  return localStorage.getItem(storageKey)
	else
	  return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
  }
  
  const setPreference = () => {
	localStorage.setItem(storageKey, theme.value)
	reflectPreference()
  }
  
  const reflectPreference = () => {
	document.firstElementChild
	  .setAttribute('data-theme', theme.value)
  
	document
	  .querySelector('#theme-toggle')
	  ?.setAttribute('aria-label', theme.value)
  }
  
  const theme = {
	value: getColorPreference(),
  }
  
  // set early so no page flashes / CSS is made aware
  reflectPreference()
  
  window.onload = () => {
	// set on load so screen readers can see latest value on the button
	reflectPreference()
  
	// now this script can find and listen for clicks on the control
	document
	  .querySelector('#theme-toggle')
	  .addEventListener('click', onClick)
  }
  
  // sync with system changes
  window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', ({matches:isDark}) => {
	  theme.value = isDark ? 'dark' : 'light'
	  setPreference()
	})
	const darkModeColors = {
		'--modeblue': '#007bff',
		'--modeindigo': '#6610f2',
		'--modepink': '#e83e8c',
		'--modered': '#dc3545',
		'--modeorange': '#fd7e14',
		'--modeyellow': '#ffc107',
		'--modegreen': '#28a745',
		'--modeteal': '#20c997',
		'--modecyan': '#17a2b8',
		'--modewhite': '#ffffff',
		'--modegray': '#6c757d',
		'--modegraydark': '#343a40',
		'--modeicon-fill': '#121212',
		'--modeicon-fill-hover': '#666666',
		'--modetable-primary': '#b8daff',
		'--modetable-primary-hover': '#9fcdff',
		'--modetable-secondary': '#d6d8db',
		'--modetable-secondary-hover': '#c8cbcf',
		'--modetable-success': '#c3e6cb',
		'--modetable-success-hover': '#b1dfbb',
		'--modetable-info': '#bee5eb',
		'--modetable-info-hover': '#abdde5',
		'--modetable-warning': '#ffeeba',
		'--modetable-warning-hover': '#ffe8a1',
		'--modetable-danger': '#f5c6cb',
		'--modetable-danger-hover': '#0e4f44',
		'--mode-table-light': '#fdfdfe',
		'--modetable-light-border': '#fbfcfc',
		'--modetable-light-hover': '#ececf6',
		'--modetable-dark': '#c6c8ca',
		'--modetable-dark-border': '#95999c',
		'--modetable-dark-hover': '#b9bbbe',
		'--modeblack' : '#000000',
		'--background-colorrand':'#212529',
		'--formcolorborder' : '#80bdff',
		'--modeiconsocial' :'#ffffff1a',
		'--textaboutsome' : 'rgba(255, 255, 255, 0.1)',
		'--greytoblack': 'rgba(255, 255, 255, 0.7)'
	  };
	  const lightModeColors = {
		'--modeblue': '#007bff', // Blue stays unchanged
		'--modeindigo': '#99ef0d', // Inverted
		'--modepink': '#17c173',
		'--modered': '#23caba',
		'--modeorange': '#0281eb',
		'--modeyellow': '#003ef8',
		'--modegreen': '#d758ba',
		'--modeteal': '#df3668',
		'--modecyan': '#e85d47',
		'--modewhite': '#000000',
		'--modegray': '#938a82',
		'--modegraydark': '#cbc5bf',
		'--modeicon-fill': '#ededed',
		'--modeicon-fill-hover': '#999999',
		'--modetable-primary': '#b8daff', // Blue remains the same
		'--modetable-primary-hover': '#9fcdff',
		'--modetable-secondary': '#292724',
		'--modetable-secondary-hover': '#373430',
		'--modetable-success': '#3c1934',
		'--modetable-success-hover': '#4e2044',
		'--modetable-info': '#651a20',
		'--modetable-info-hover': '#54221a',
		'--modetable-warning': '#001769',
		'--modetable-warning-hover': '#00175e',
		'--modetable-danger': '#0a3934',
		'--modetable-danger-hover': '#0e4f44',
		'--mode-table-light': '#020201',
		'--modetable-light-border': '#040303',
		'--modetable-light-hover': '#191909',
		'--modetable-dark': '#393735',
		'--modetable-dark-border': '#6a6663',
		'--modetable-dark-hover': '#464441',
		'--modeblack' : '#ffffff',
		'--background-colorrand':'#ffffff',
		'--formcolorborder' : '#000000',
		'--modeiconsocial' :'#0000001a',
		'--textaboutsome' : 'rgba(0, 0, 0, 0.1)',
		'--greytoblack' : '#000'
	  };
let darkMode = true;

function toggleMode() {
	try {
	  // Get DOM elements with null checks
	  const root = document.documentElement;
	  if (!root) throw new Error('Root element not found');
	  
	  const contactForm = document.querySelector('.contact-form');
	  const themeToggle = document.getElementById('theme-toggle');
	  if (!themeToggle) throw new Error('Theme toggle button not found');
  
	  // Get stored theme or default to true
	  darkMode = localStorage.getItem('darkMode') === 'false' ? false : true;
  
	  // Determine colors and classes to use
	  const colors = darkMode ? lightModeColors : darkModeColors;
	  const removeClass = darkMode ? 'bg-dark' : 'bg-secondary';
	  const addClass = darkMode ? 'bg-secondary' : 'bg-dark';
  
	  // Update colors
	  Object.keys(colors).forEach(key => {
		root.style.setProperty(key, colors[key]);
	  });
  
	  // Update form classes if form exists
	  if (contactForm) {
		contactForm.classList.remove(removeClass);
		contactForm.classList.add(addClass);
	  }
  
	  // Toggle and save state
	  darkMode = !darkMode;
	  localStorage.setItem('darkMode', darkMode);
  
	} catch (error) {
	  console.error('Error toggling theme:', error);
	}
  }
  
  // Add event listener with error handling
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', toggleMode);
  
  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('darkMode');
	if (savedTheme !== null) {
	  darkMode = savedTheme === 'true';
	  toggleMode();
	}
  });
  // Add this after your existing jQuery code
$(document).ready(function() {
  // Close navbar when clicking outside
  $(document).click(function(event) {
    const clickover = $(event.target);
    const opened = $('.navbar-collapse').hasClass('show');
    if (opened && !clickover.hasClass('navbar-toggler') && !clickover.closest('.navbar-collapse').length) {
      $('.navbar-toggler').click();
    }
  });

  // Close navbar when clicking a nav item
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
});

