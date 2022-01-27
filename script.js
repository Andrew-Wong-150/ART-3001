/*animation to explode bubble*/
var explode = anime({
  targets: '#button',
  scale: [1, 10],
  translateZ: 0,
  duration: 500,
  easing: 'easeOutSine',
  autoplay: false
})

/*function to display and destroy image*/
function audio_toggle () {
  if(!audio_on) {
    console.log('hello');
    audio.play();
    audio_on = true;
  }
  else {
    console.log('goodbye');
    audio.pause();
    audio_on = false;
  }
}

/*function to toggle bubble*/
function toggle() {

  if (explode.began) {
    explode.reverse()
  }

  if(explode.progress == 100 && explode.direction === 'reverse'){
      explode.completed = false;
  }

  if (explode.paused) {
    explode.play()
  }
}

document.body.addEventListener('mousedown', toggle)
document.body.addEventListener('click', audio_toggle);
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
