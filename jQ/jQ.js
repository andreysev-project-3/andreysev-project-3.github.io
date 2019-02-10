$(document).ready(function(){	
	$("#open").click(function(){
		var burger = $(".wrapper-burger-menu");
		burger.slideDown(500);
	});

	$("#close").click(function(){
		var burger = $(".wrapper-burger-menu");
		burger.slideUp(500);
	});

	$(document).ready(function(){
		// Плавный скролл по якорям
		$('#scrol-content').on('click', function(e){
			$('html,body').stop().animate({ scrollTop: $('.section-1').offset().top }, 1000);
			e.preventDefault();
		});
	});

	/*menu*/

		/*кнопка на верх*/
		
	$(function(){
		$('.top-button').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('.body').offset().top }, 1000);
		  e.preventDefault();
		});
	});

	/*preloder*/
	$(".dws-progress-bar").circularProgress({
        color: "#50c3af",
        line_width: 1,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);

    /*a modal window player*/

    $(".img-section-2").click(function(){
		var burger = $(".wrapper-modal-window");
		burger.slideDown(500);
	});

	$("#close-modal-window").click(function(){
		var burger = $(".wrapper-modal-window");
		burger.slideUp(500);
	});
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});

/*slick slider*/

$(document).ready(function(){
  $('.section-4-wrapper-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  autoplay: true,
	  variableWidth: true
  });
});

/*VIDEO*/

$(document).ready(function(){
  	$(".section-1-play").click(function(){
		var video = $(".video");
		var imgvideo = $(".section-1-wrapper-rgba")
		var imgclose = $(".section-1-close-video")
		imgclose.fadeIn(500);
		imgvideo.slideUp(500);
		video.slideDown(500);
	});

	$(".section-1-img-close-video").click(function(){
		var video = $(".video");
		var imgvideo = $(".section-1-wrapper-rgba")
		var imgclose = $(".section-1-close-video")
		imgclose.fadeOut(500);
		imgvideo.slideDown(500);
		video.slideUp(500);
	});
});


