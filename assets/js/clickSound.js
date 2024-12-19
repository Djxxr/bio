document.addEventListener('DOMContentLoaded', function() {
    const clickSound = new Audio('assets/voice_effects/click.mp3');
  
    document.body.addEventListener('click', function(event) {
      clickSound.currentTime = 0; 
      clickSound.play(); 
    });
  });