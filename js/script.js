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
