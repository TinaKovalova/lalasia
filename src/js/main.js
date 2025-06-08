import "/src/scss/style.scss";

window.addEventListener("load", () => {

    const navigation = document.querySelector(".navigation");
    const actions = document.querySelector(".actions");
    const menuBurger = document.querySelector('.menu-burger');
    const burgerBtn = document.querySelector(".burger-btn ");
    const header = document.querySelector(".header");
    
    document.documentElement.style.setProperty(
      "--scroll-margin-top",
      `${header.clientHeight}px`
    );

    header.addEventListener("chenge", (e) => {
        
    })
    burgerBtn?.addEventListener("click", (e) => {
        console.log(menuBurger);
        e.target.classList.toggle("_active");
        menuBurger?.classList.toggle("_active");
    })
    
});

