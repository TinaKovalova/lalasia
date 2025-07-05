import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "/src/scss/style.scss";

window.addEventListener("load", () => {
  const navigation = document.querySelector(".navigation");
  const actions = document.querySelector(".actions");
  const menuBurger = document.querySelector(".menu-burger");
  const burgerBtn = document.querySelector(".burger-btn ");
  const header = document.querySelector(".header");
  const sortButton = document.querySelector(".total-product__sort-button");
  if (header) {
    setScrollMarginTop(header);
  }
  burgerBtn?.addEventListener("click", (e) => {
    console.log(menuBurger);
    e.target.classList.toggle("_active");
    menuBurger?.classList.toggle("_active");
  });
  sortButton?.addEventListener("click", () => {
    sortButton.classList.toggle("_ascending");
  })
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
  if (document.querySelector(".articles__swiper.swiper")) {
    var articlesSwiper = new Swiper(".articles__swiper.swiper", {
      modules: [EffectFade, Autoplay, Navigation],
      slidersPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      virtualTranslate: true,
      speed: 2500,
      navigation: {
        nextEl: ".articles__swiper-button-next",
        prevEl: ".articles__swiper-button-prev",
      },
      breakpoints: {
        992: {},
      },
    });
  }
  if (document.querySelector(".banner__products-swiper.swiper")) {
    const bannerSwiper = new Swiper(".banner__products-swiper.swiper", {
      modules: [Autoplay, Navigation, Pagination, EffectFade],
      loop: true,
      speed: 1800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      grabCursor: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner__swiper-button-next",
        prevEl: ".banner__swiper-button-prev",
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
  document.documentElement.style.setProperty(
    "--scroll-margin-top",
    `${basedOnElement.clientHeight}px`
  );
}
