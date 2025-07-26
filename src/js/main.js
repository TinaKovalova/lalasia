import { createCounterObserver } from "/src/js/counter.js";
import "/src/scss/style.scss";

window.addEventListener("load", () => {
  const navigation = document.querySelector(".navigation");
  // const actions = document.querySelector(".actions");
  const menuBurger = document.querySelector(".menu-burger");
  const burgerBtn = document.querySelector(".burger-btn ");
  const header = document.querySelector(".header");

  if (header) {
    setScrollMarginTop(header);
  }

  const curentPage = location.href.split("/").pop().split(".")[0];
  const currentLink = [
    ...navigation?.querySelectorAll(".navigation__link"),
  ].find((link) => curentPage.includes(link.dataset.tag));
  if (currentLink) {
    currentLink.classList.add("_active");
  }

  burgerBtn?.addEventListener("click", (e) => {
    console.log(menuBurger);
    e.target.classList.toggle("_active");
    menuBurger?.classList.toggle("_active");
  });


  //counter
  const counter = document.querySelector(".statistic");
  if(counter) createCounterObserver(counter);
  

});

window.addEventListener("resize", () => {
  const header = document.querySelector(".header");
  if (header) {
    setScrollMarginTop(header);
  }
});

function setScrollMarginTop(basedOnElement) {
  document.documentElement.style.setProperty(
    "--scroll-margin-top",
    `${basedOnElement.clientHeight}px`
  );
}
