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

class Label {
	constructor({elem}) {
		this.elem = elem;
		this.titleElem = elem.querySelector('.v-label__title');

		// this = menu
		this.titleElem.onclick = this.onTitleClick.bind(this);
	}

	onTitleClick(event) {
		this.toggle();
	}

	toggle() {
		this.elem.classList.toggle('v-label-open');
	}
}

let menu = new Label({
	elem: jsLabel
});
