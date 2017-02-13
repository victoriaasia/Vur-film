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

let elem = document.querySelector('.-second');
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
