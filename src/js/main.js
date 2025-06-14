import Swiper from "swiper";
import {Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "/src/scss/style.scss";

window.addEventListener("load", () => {
  const navigation = document.querySelector(".navigation");
  const actions = document.querySelector(".actions");
  const menuBurger = document.querySelector(".menu-burger");
  const burgerBtn = document.querySelector(".burger-btn ");
  const header = document.querySelector(".header");
  if (header) {
    setScrollMarginTop(header);
  }
  burgerBtn?.addEventListener("click", (e) => {
    console.log(menuBurger);
    e.target.classList.toggle("_active");
    menuBurger?.classList.toggle("_active");
  });
  if (document.querySelector(".popular__slider.swiper")) {
    const popularProductsSwiper = new Swiper(".popular__slider.swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      centerInsufficientSlides: true,
      freeMode: true,
      grabCursor: true,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      modules: [Autoplay, Navigation],
      navigation: {
        nextEl: ".popular__swiper-button-next",
        prevEl: ".popular__swiper-button-prev",
      },

      breakpoints: {
        320: {
          centeredSlides: true,
          centeredSlidesBounds: true,
        },
        468: {
          spaceBetween: 29,
          centeredSlides: false,
        },
      },
    });
    }
    
    if (document.querySelector(".testimonials__swiper.swiper")) {
      const testimonialSwiper = new Swiper(".testimonials__swiper.swiper", {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        modules: [Autoplay, Navigation],
        navigation: {
          nextEl: ".popular__swiper-button-next",
          prevEl: ".popular__swiper-button-prev",
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            centerInsufficientSlides: true,
          },
          480: {
            slidesPerView: 1.3,
          },
          600: {
            slidesPerView: 1.6,
          },
          800: {
            slidesPerView: 1.8,
          },
          992: {
            centeredSlides: true,
            centeredSlidesBounds: true,
            centerInsufficientSlides: true,
            slidesPerView: "auto",
          },
        },
      });
    }
    
});

window.addEventListener("resize", () => {
  const header = document.querySelector(".header");
  if (header) {
    setScrollMarginTop(header);
  }
});

function setScrollMarginTop(basedOnElement) {
  console.log(basedOnElement.clientHeight);
  document.documentElement.style.setProperty(
    "--scroll-margin-top",
    `${basedOnElement.clientHeight}px`
  );
}
