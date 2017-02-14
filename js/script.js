// window.onload = function() {
//
//   var video = document.getElementById('dm-video');
//   var playButton = document.getElementById('dm-js-control');
//
//   video.addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); }, false);
//
//   if (video.hasAttribute('controls')) {
//     video.removeAttribute('controls')
//   }
//
//   playButton.addEventListener('click', function() {
//     if (video.paused) {
//       video.play();
//       playButton.classList.toggle('dm-control-hide');
//     } else {
//       video.pause();
//       playButton.classList.toggle('dm-control-hide');
//     }
//   });
// };
//
//
// var btn = document.querySelector('.dm-js-btn');
// var wrapperBlock = document.querySelector('.-first');
// var block = document.querySelector('.dm-js-content');
// var blockResult = document.querySelector('.dm-result-content');
//
// btn.onclick = function(event) {
//   event = event || window.event;
//   if (event.preventDefault) {
//     event.preventDefault();
//   } else {
//     event.returnValue = false;
//   }
// }
//
// btn.addEventListener("click", function(){
//     setTimeout(function(){
//       block.classList.add('dm-hidden');
//       wrapperBlock.classList.add('-first-result');
//       blockResult.classList.remove('dm-hidden');
//     }, 1500);
// });

'use strict';

// label open-close

let hiddenLabels = document.querySelectorAll('.v-label__text');
for(let i=0;  i < hiddenLabels.length; i++) {
	hiddenLabels[i].style.display = 'none';
}

// let hiddenIcons = document.querySelectorAll('.v-img-icons');
// for(let i=0;  i < hiddenIcons.length; i++) {
// 	hiddenIcons[i].style.display = 'none';
// }

class Label{
constructor(element){
	this.element = element;
	this.element.addEventListener('click', this.onClick.bind(this));
}

onClick(event){
	let target = event.target;
	if (event.target.nodeName != 'SPAN') return;

	if(event.target.parentElement.children[1]) {
	  this.toggle(event.target.parentElement);
		event.target.parentElement.classList.toggle('v-label__open');
	}

	let selectEvent = new CustomEvent("tree-select", {
	  bubbles: true,
	  detail: {
	    value: event.target.innerHTML
	  }
	});
	this.element.dispatchEvent(selectEvent);
}

toggle(p) {
	if(p.children[1].style.display == ''){
		p.children[1].style.display = 'none';
	} else {
		p.children[1].style.display = '';
	}
}
}

let elem = document.querySelector('.v-block-second-i');
let treeListMenu = new Label(elem);

elem.addEventListener('tree-select', event => console.log(event.detail.value));


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

//

var target = $('.v-decor').find('.v-decor-line');
var target2 = $('.v-decor2').find('.v-decor-line');
var target3 = $('.v-decor3').find('.v-decor-line');
var target4 = $('.v-decor4').find('.v-decor-line');
var target5 = $('.v-decor5').find('.v-decor-line');

var targetPos = target.offset().top - 500;
var targetPos2 = target2.offset().top - 200;
var targetPos3 = target3.offset().top - 400;
var targetPos4 = target4.offset().top - 500;
var targetPos5 = target5.offset().top;


var winHeight = $(window).height();

var scrollToElem = targetPos - winHeight;
var scrollToElem2 = targetPos2 - winHeight;
var scrollToElem3 = targetPos3 - winHeight;
var scrollToElem4 = targetPos4 - winHeight;
var scrollToElem5 = targetPos5 - winHeight;

$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();

  if(winScrollTop > scrollToElem){
		target.addClass(' -active');
  }
	if (winScrollTop > scrollToElem2) {
	    target2.addClass(' -active');
	}
	if (winScrollTop > scrollToElem3) {
		    target3.addClass(' -active');
		}
	if (winScrollTop > scrollToElem4) {
		    target4.addClass(' -active');
		}
	if (winScrollTop > scrollToElem5) {
		    target5.addClass(' -active');
		}
});


jQuery(document).ready(function ($) {
if(window.matchMedia('(max-width: 769px)').matches) {
	var removeThis = $('.v-block__item');
	removeThis.removeClass('v-float-right');
}
});
