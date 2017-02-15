// window width 769px
jQuery(document).ready(function ($) {
if(window.matchMedia('(max-width: 769px)').matches) {
	var removeThis = $('.v-block__item');
	removeThis.removeClass('v-float-right');
}
});

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
$('.js-btn').click(function(){
	$('.v-block__video-desc').addClass('wow slideOutLeft animated');
	setTimeout(function(){
		$('.js-btn').addClass('wow fadeOut animated');
		autoPlayVideo('qmnncXX-d9E','100%','100%');
	}, 1500);
});

function autoPlayVideo(vcode, width, height){
  "use strict";
  $(".v-block__video").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
};

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
facts[factIndex-1].style.display = "block";
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
}
