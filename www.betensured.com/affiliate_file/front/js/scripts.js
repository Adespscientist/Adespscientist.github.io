jQuery(function($){var interval=null;var isFirstTime=true;'use strict';$(window).on('scroll',function(){if($(this).scrollTop()>60){$('.navbar').addClass('affix');}else{$('.navbar').removeClass('affix');}});$(function(){$(document).on('click','a.page-scroll',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-60},900,'easeInOutExpo');event.preventDefault();});});$(".navbar-nav li a").on("click",function(event){if(!$(this).parent().hasClass('dropdown'))
$(".navbar-collapse").collapse('hide');});$('.navbar-nav .nav-link').on("click",function(event){$('.navbar-nav .nav-link').removeClass('active');$(this).addClass('active');})
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});$('.client-testimonial').owlCarousel({loop:false,margin:30,items:1,nav:true,dots:false,responsiveClass:true,autoplay:false,autoplayHoverPause:true,lazyLoad:true,})
$('.product-carousel').owlCarousel({loop:true,margin:30,dots:true,nav:false,autoplay:true,responsive:{0:{items:1},768:{items:3},991:{items:3},1200:{items:4},1920:{items:4}}});$(function(){var countSelector=$('.single-counter > span, .single-card > h3');if(countSelector.length){initCounter(countSelector);}});function initCounter(countSelector){var startingTop=countSelector.offset().top-window.innerHeight;if(startingTop>0){$(window).on('scroll',function(){if(isFirstTime&&$(window).scrollTop()>startingTop){startCounting();isFirstTime=false;}});}else{startCounting();}}
function incrementValue(value){var incVal=0;if(Math.ceil(value/2)<=5){incVal=1;}
else if(Math.ceil(value/10)<=10){incVal=10;}
else if(Math.ceil(value/100)<=10){incVal=25;}
else if(Math.ceil(value/100)<=100){incVal=50;}
else if(Math.ceil(value/1000)<=100){incVal=150;}
else{incVal=500;}
return incVal;}
function count(counters,start,value,id){var localStart=start;var inc=incrementValue(value);interval=setInterval(function(){if(localStart<value){localStart=localStart+inc;counters[id].innerHTML=localStart;}},40);}
function startCounting(){var counters=$(".single-counter > span, .single-card > h3");var countersQuantity=counters.length;var counter=[];for(var i=0;i<countersQuantity;i++){counter[i]=parseInt(counters[i].innerHTML);}
for(var j=0;j<countersQuantity;j++){count(counters,0,counter[j],j);}}
$('.client-testimonial-1').owlCarousel({loop:true,margin:30,nav:true,dots:false,responsiveClass:true,autoplay:true,autoplayHoverPause:true,lazyLoad:true,items:1,});$('.clients-carousel').owlCarousel({autoplay:true,loop:true,margin:15,dots:true,slideTransition:'linear',autoplayTimeout:4500,autoplayHoverPause:true,autoplaySpeed:4500,responsive:{0:{items:2},500:{items:3},600:{items:4},800:{items:5},1200:{items:6}}})
$(document).ready(function(){$(".player").YTPlayer();});function wowAnimation(){new WOW({offset:100,mobile:true}).init()}
wowAnimation()});