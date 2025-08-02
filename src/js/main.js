import { createCounterObserver } from "/src/js/counter.js";
import "/src/scss/style.scss";

window.addEventListener("load", () => {

  //heder---------------------------------------------------
  
  const navigation = document.querySelector(".navigation");
  const menuBurger = document.querySelector(".menu-burger");
  const burgerBtn = document.querySelector(".burger-btn ");


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

  // sort/filter ----------------------------------

  const productsSortButton = document.querySelector(".total-product__sort-button");
  const trandingFilters = document.querySelector(".trending-topics__category-filters");
  const articlesSortButton = document.querySelector(".trending-topics__data-filter-btn");    
    
  productsSortButton?.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("_ascending");
  });
    
  articlesSortButton?.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("_ascending");
  });

  trandingFilters?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".trending-topics__category-filter-btn")) {
      target.classList.toggle("_active");
    }
  });


  //counter----------------------------------------

  const counter = document.querySelector(".statistic");
  if(counter) createCounterObserver(counter);
  

});


