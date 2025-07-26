 function counterInit(counterItems) {
  const counterElements =
    counterItems || document.querySelectorAll("[data-counter-duration]");
  counterElements?.forEach((counter) => counterAnimate(counter));
}

function counterAnimate(counter) {
  let startTimestamp = null;
  const duration = parseInt(counter.dataset.counterDuration) || 1000;
  const initValue = parseInt(counter.innerHTML);
  const initValueText = counter.innerHTML.slice(initValue.toString().length);
  const startValue = 0;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    counter.innerHTML = Math.floor(progress * (initValue + startValue));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
    if (progress == 1 && initValueText) {
       counter.innerHTML += initValueText;
     }
   
  };
  window.requestAnimationFrame(step);
}

function createCounterObserver(target, settings) {
  if (target) {  
    const counterObserver = new IntersectionObserver((enries, counterObserver) => {
      enries.forEach(entry => {
        if (entry.isIntersecting) {
          counterInit();
          counterObserver.unobserve(entry.target);
        }
      })
    },
     settings || { threshold: 0.75 }
    );
    counterObserver.observe(target);
  }
}
export { counterInit,createCounterObserver };
  
