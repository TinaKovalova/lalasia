window.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".banner__video");
  const controls = document.querySelector(".banner__controls");
  const playButton = controls?.querySelector(".banner__video-play-button");
  const currentTime = controls?.querySelector(".timeline__current-time");
  const progress = controls?.querySelector(".timeline__progress-bar");
  const totalTime = controls?.querySelector(".timeline__total-time");

  const match = matchMedia("(max-width:991.98px)").matches;

  //video-------------------
  controls?.addEventListener("click", (e) => {
    if (e.target.closest(".banner__video-play-button")) {
      video.classList.contains("_play")
        ? togglePause(video)
        : togglePlay(video);
      if (video.paused) {
        e.currentTarget.classList.remove("_hidden");
      }
    }
    if (
      match &&
      video.classList.contains("_play") &&
      video.currentTime !== video.duration
    ) {
      e.currentTarget.classList.toggle("_hidden");
    }
  });

  controls?.addEventListener("mouseover", (e) => {
    if (!match) {
      e.currentTarget.classList.remove("_hidden");
    }
  });

  controls.addEventListener("mouseout", (e) => {
    if (!match) {
      if (
        video.classList.contains("_play") &&
        video.currentTime !== video.duration
      ) {
        e.currentTarget.classList.add("_hidden");
      }
    }
  });

  video.addEventListener("loadeddata", (e) => {
    const target = e.target;
    progress.max = target.duration;
    totalTime.textContent = formatDuration(target.duration);
    progress.value = target.currentTime;
    currentTime.textContent = formatDuration(target.currentTime);
  });

  video.addEventListener("timeupdate", (e) => {
    const target = e.target;
    progress.value = target.currentTime;
    currentTime.textContent = formatDuration(target.currentTime);
    if (target.ended) {
      controls.classList.remove("_hidden");
      target.classList.remove("_play");
    }
  });

  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  function formatDuration(timeInSeconds) {
    const seconds = Math.floor(timeInSeconds % 60);
    const minutes = Math.floor(timeInSeconds / 60);
    const hours = Math.floor(timeInSeconds / 3600);
    if (hours === 0) {
      return `${leadingZeroFormatter.format(
        minutes
      )}:${leadingZeroFormatter.format(seconds)}`;
    } else {
      return `${leadingZeroFormatter.format(
        hours
      )}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(
        seconds
      )}`;
    }
  }

  function togglePlay(video) {
    video.play();
    video.classList.add("_play");
  }
  function togglePause(video) {
    video.pause();
    video.classList.remove("_play");
  }
});
