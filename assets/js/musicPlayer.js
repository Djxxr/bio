document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeControl = document.getElementById('volume-control');
    const currentTrack = document.getElementById('current-track');


    currentTrack.textContent = "punkboy, noxide - sick.mp3";

    playPauseBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    volumeControl.addEventListener('input', function () {
        audioPlayer.volume = this.value;
    });
});