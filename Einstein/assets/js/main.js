(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        //Water js
        $('.water').ripples({
            imageUrl: null,
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.04,
            interactive: true
          });

          // YT Player
          $("#bgndVideo").YTPlayer();
          
        /*bottom to top*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        // menu button function 
        $(function(){
            $('.menu-btn > i').click(function(){
                $('#main_menu').slideToggle();
            })
        })

        // // Product deal countdown
        // $('[data-countdown]').each(function () {
        //     var $this = $(this),
        //         finalDate = $(this).data('countdown');
        //     $this.countdown(finalDate, function (event) {
        //         $this.html(event.strftime('<span>%D : <small>Days</small></span> <span>%H : <small>Hrs</small></span>  <span>%M : <small>Min</small></span> <span>%S <small>Sec</small></span>'));
        //     });
        // });
        
        // // counter section activation
        // var $counternumber = $(".count-number");
        // $counternumber.counterUp({
        //     delay: 30,
        //     time: 5000
        // });


        // testimonial carousel activation 
        var testimonialCarousel = $('.testimonial-carosel');
        testimonialCarousel.owlCarousel({
            loop: true,
            autoplay: false,
            margin:30,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });


    // Hero Area Slider
    var $game_time_slide = $('.game-time-slider');
    $game_time_slide.owlCarousel({
        loop: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        nav: true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

        // smoth scroll
        $(function () {
            $('.navigation .navbar-nav a').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top -80
                }, 1000);
                event.preventDefault();
            });
        });
    });

    // window Scroll functions
    $(window).on('scroll', function () {
        /*--show and hide scroll to top --*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 500) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
        // sticky menu activation
        var mainMenuTop = $('.navigation');
        if ($(window).scrollTop() > 300) {
            mainMenuTop.addClass('stiky-nav');
        } else {
            mainMenuTop.removeClass('stiky-nav');
        }
    });


    // window load functions
    $(window).on('load', function () {
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
    });


    // venobox function
    $(function(){
        $('.venobox').venobox(); 
    });
    

    $(document).ready(function() {
        var owl = $('.owl-carousel');
        owl.owlCarousel({
          margin: 10,
          nav: true,
          loop: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }
        });
      });

      $(document).ready(function() {
		var seconds = 6;
		var minutes = 1;

		function calculate() {
			setTimeout(calculate, 1000);
			$('#showDate').html(' expires after ' + minutes + ' minutes ' + seconds + ' seconds ');
			seconds--;
			if (seconds < 0) {
				seconds = 59;
				minutes--;
				if (minutes < 0) {
					minutes = 0;
					seconds = 0;
				}
			}
		}
		calculate();
	});


//TASK MATCH TIME CONTDOWN
const matchs = document.querySelectorAll('.match-time');
matchs.forEach(function(match) {
  const timeVal = match.children[1].getAttribute('value');
  let timeNum = parseInt(timeVal);

  function countDown() {
    let min = Math.floor(timeNum / 60);
    let remSec = timeNum % 60;
    if (min < 10) {
      min = '0' + min;
    }
    if (remSec < 10) {
      remSec = '0' + remSec;
    }
    if (timeNum > 0) {
      timeNum = timeNum - 1;
    }
    match.children[1].textContent = `${min} : ${remSec}`;
    if (timeNum == 0) {
      clearInterval(count);
      match.innerHTML = '<span class="tag is-success">Live now</span>';
    }
  }
  const count = setInterval(function() {
    countDown();
  }, 1000);
});


// Set the date we're counting down to
var counters=document.getElementById('date-count');
var countDownDate = new Date("July 13   , 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
 var days=Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("Days").innerHTML = days + "d ";
  document.getElementById("Sec").innerHTML = seconds + "s ";
  document.getElementById("Hours").innerHTML = hours + "h ";
  document.getElementById("Minutes").innerHTML = minutes + "m ";

  document.getElementById("dayss").innerHTML = days + "d ";
  document.getElementById("secs").innerHTML = seconds + "s ";
  document.getElementById("hourss").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "No Livematch";
  }
}, 1000);


}(jQuery));	