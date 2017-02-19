// decor-line reveal onscroll
var $window = $(window),
win_height = $window.height() * 1.1,
isTouch = Modernizr.touch;

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    let scrolled = $window.scrollTop();
    let elem = $(".v-decor-line:not(-active)");

    elem.each(function() {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height > offsetTop) {
				setTimeout(function(){
			    $this.addClass('-active');
			  }, 500);
      }
    });
};

// video
var tag = document.createElement('script');
var player;
var done = false;
var firstScriptTag = document.getElementsByTagName('script')[0];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'qmnncXX-d9E',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.setVolume(20);
}
function onPlayerStateChange(event) {
}
function stopVideo() {
  player.stopVideo();
}

$('.js-video-btn').click(function(){
	$('.v-block__video-desc').addClass('wow slideOutLeft animated');
	setTimeout(function(){
		$('.js-video-btn').addClass('wow fadeOut animated');

    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	}, 1000);
});


// label open-close
let label = document.querySelector('#v-domovoy .v-label__title');
let icons = document.querySelector('#v-domovoy .v-img-icons');
let label2 = document.querySelector('#v-rusalka .v-label__title');
let icons2 = document.querySelector('#v-rusalka .v-img-icons');
let label3 = document.querySelector('#v-demon .v-label__title');
let icons3 = document.querySelector('#v-demon .v-img-icons');
let label4 = document.querySelector('#v-oboroten .v-label__title');
let icons4 = document.querySelector('#v-oboroten .v-img-icons');

label.addEventListener("click", function(){
			label.classList.toggle('-label-active');
      icons.classList.toggle('v-slide-right');
});
label2.addEventListener("click", function(){
      label2.classList.toggle('-label-active');
      icons2.classList.toggle('v-slide-left');
});
label3.addEventListener("click", function(){
      label3.classList.toggle('-label-active');
      icons3.classList.toggle('v-slide-right');
});
label4.addEventListener("click", function(){
      label4.classList.toggle('-label-active');
      icons4.classList.toggle('v-slide-left');
});

// slider1 and slider2
let slideIndex = 1;
let factIndex = 1;
showSlides(slideIndex);
showFacts(factIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function plusFacts(n) {
showFacts(factIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}
function currentFact(n) {
showFacts(factIndex = n);
}

function showFacts(n) {
let i;
let facts = document.getElementsByClassName("v-facts__item");
let dots = document.getElementsByClassName("v-facts__dot");
if (n > facts.length) {factIndex = 1}
if (n < 1) {factIndex = facts.length}
for (i = 0; i < facts.length; i++) {
		facts[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" v-facts__dot-active", "");
}
facts[factIndex-1].style.display = "flex";
dots[factIndex-1].className += " v-facts__dot-active";
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("v-slider__item");
let dots = document.getElementsByClassName("v-slider__dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" v-slider__dot-active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " v-slider__dot-active";
};

// window width 769px
jQuery(document).ready(function ($) {
if(window.matchMedia('(max-width: 769px)').matches) {
	var removeThis = $('.v-block__item');
	removeThis.removeClass('v-float-right');

	label.addEventListener("click", function(){
    icons.classList.toggle('v-slide-left');
	});
	label3.addEventListener("click", function(){
    icons3.classList.toggle('v-slide-left');
	});

}
});


// test
var btn = document.querySelector('.js-test-btn');
var block1 = document.querySelector('.-eighth');
var block2 = document.querySelector('.v-test');
btn.onclick = function(event) {
  event = event || window.event;
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}
btn.addEventListener("click", function(){
    setTimeout(function(){
      block1.classList.add('v-hidden');
      block2.classList.remove('v-hidden');
    }, 500);
});

$('#v-question-one .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-one").hide();
  $("#page-1").hide();
  $("#v-question-two").css('display', 'block');
  $("#page-2").css('display', 'block');
}, 1000); });

$('#v-question-two .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-two").hide();
  $("#page-2").hide();
  $("#v-question-three").css('display', 'block');
  $("#page-3").css('display', 'block');
}, 1000); });

$('#v-question-three .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-three").hide();
  $("#page-3").hide();
  $("#v-question-four").css('display', 'block');
  $("#page-4").css('display', 'block');
}, 1000); });

$('#v-question-four .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-four").hide();
  $("#page-4").hide();
  $("#v-question-five").css('display', 'block');
  $("#page-5").css('display', 'block');
}, 1000); });

$('#v-question-five .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-five").hide();
  $("#page-5").hide();
  $("#v-question-six").css('display', 'block');
  $("#page-6").css('display', 'block');
}, 1000); });

$('#v-question-six .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-six").hide();
  $("#page-6").hide();
  $("#v-question-seven").css('display', 'block');
  $("#page-7").css('display', 'block');
}, 1000); });

$('#v-question-seven .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-seven").hide();
  $("#page-7").hide();
  $("#v-question-eight").css('display', 'block');
  $("#page-8").css('display', 'block');
}, 1000); });

$('#v-question-eight .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-eight").hide();
  $("#page-8").hide();
  $("#v-question-nine").css('display', 'block');
  $("#page-9").css('display', 'block');
}, 1000); });

$('#v-question-nine .js-answer-btn').click(function() { setTimeout(function() {
  $("#v-question-nine").hide();
  $("#page-9").hide();

  $('.v-test__form').submit();

  $('.v-footer').hide();
  $('.v-decor-test').hide();
  $(".v-test").addClass('v-test-result');
  $(".v-test-result__content").css('display', 'block');

}, 1000); });
