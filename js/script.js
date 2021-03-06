// anchor link
$('.js-anchor').bind('click.smoothscroll', function(e) {
  e.preventDefault();
  let target = this.hash,
    $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 700, 'swing', function() {
    window.location.hash = target;
  });
});

// decor-line reveal onscroll
let $window = $(window),
win_height = $window.height() * 1.1,
isTouch = Modernizr.touch;

$window.on('scroll', revealOnScroll);

function revealOnScroll() {
    let scrolled = $window.scrollTop();
    let elem = $(".v-decor-line:not(-active)");

    elem.each(function() {
      let $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height > offsetTop) {
				setTimeout(function(){
			    $this.addClass('-active');
			  }, 500);
      }
    });
};

// video
let tag = document.createElement('script');
let player;
let done = false;
let firstScriptTag = document.getElementsByTagName('script')[0];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('v-player', {
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
	let removeThis = $('.v-block__item');
	removeThis.removeClass('v-float-right');

	label.addEventListener("click", function(){
    icons.classList.toggle('v-slide-left');
	});
	label3.addEventListener("click", function(){
    icons3.classList.toggle('v-slide-left');
	});

  $('.js-video-btn').click(function(){
  	setTimeout(function(){
  		$('.js-video-btn').addClass('wow fadeOut animated');

      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  	}, 1000);
  });

} else if(window.matchMedia('(min-width: 769px)').matches) {

  $('.js-video-btn').click(function(){
  	$('.v-block__video-desc').addClass('wow slideOutLeft animated');
  	setTimeout(function(){
  		$('.js-video-btn').addClass('wow fadeOut animated');

      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  	}, 1000);
  });
}

});


// test
let btn = document.querySelector('.js-test-btn');
let repeatBtn = document.querySelectorAll('.js-test-repeat-btn');

let block1 = document.querySelector('.-eighth');
let block2 = document.querySelector('.v-test');

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


for(let i=0; i < repeatBtn.length; i++) {

  repeatBtn[i].onclick = function(event) {
    event = event || window.event;
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }

  repeatBtn[i].addEventListener("click", function(){
    setTimeout(function(){
      $(".v-test").removeClass('v-test-result');
      $(".v-test-result__content").css('display', 'none');
      $('.v-test .v-decor-test').css('display', 'block');
      $("#v-test__form").css('display', 'block');
      $("#v-question-1").removeClass('v-hidden').addClass('v-active');
      $("#page-1").removeClass('v-hidden').addClass('v-active');
      $('.v-footer').css('display', 'block');
    }, 500);

  });

}

// test

let answercount;

$(".js-test-btn").click(function() {
  $(".v-test").addClass('v-active animated slideInUp');
});
$(".js-answer-btn").click(function() {
  answercount = $(this).closest(".v-test__main").attr("id").split('-')[2];
  // console.log(answercount);
  setTimeout(function() {
    $('#v-question-' + answercount).removeClass('v-active').addClass('v-hidden');
    $('#page-' + answercount).removeClass('v-active').addClass('v-hidden');
    answercount = answercount * 1 + 1;
    // console.log(answercount);
    $('#v-question-' + answercount).toggleClass('v-hidden v-fade');
    $('#page-' + answercount).toggleClass('v-hidden');

    if (answercount == 10) {
        $('.v-footer').hide();
        $('.v-decor-test').hide();
        $(".v-test").addClass('v-test-result');

        $('#v-test__form').submit();
    };

  }, 1000);


});


// test result

$('#v-test__form').on('submit', function(){

let msg = $('#v-test__form').serialize();

$.ajax({
  type: 'POST',
  url: 'result.php',
  data: msg,
  success: function(data) {

  let data = $.parseJSON(data);

    if (data == 1 ) {
      $('#test-result1').css('display', 'block');
    } else if (data == 2 ){
      $('#test-result2').css('display', 'block');
    } else if (data == 3 ) {
      $('#test-result3').css('display', 'block');
    } else if (data == 4 ) {
      $('#test-result4').css('display', 'block');
    }
  }
});
});
