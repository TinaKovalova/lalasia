window.addEventListener("load", () => { 

    const video = document.querySelector(".banner__video");
    const playButton = document.querySelector(".banner__video-play-button");
    playButton?.addEventListener("click", () => {
        video.classList.contains("_play") ? togglePause(video) : togglePlay(video);
    })
    function togglePlay(video) {
        video.play();
        video.classList.add("_play");
    }
     function togglePause(video) {
         video.pause();
         video.classList.remove("_play");
     }
});