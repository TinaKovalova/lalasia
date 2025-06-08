import "/src/scss/style.scss";

window.addEventListener("load", () => {
    const navigation = document.querySelector(".navigation");
    const actions = document.querySelector(".actions");
    const menuBurger = document.querySelector('.menu-burger');
    const burgerBtn = document.querySelector(".burger-btn ");
    const header = document.querySelector(".header");
    if (header) {
        setScrollMarginTop(header);
    }
    burgerBtn?.addEventListener("click", (e) => {
        console.log(menuBurger);
        e.target.classList.toggle("_active");
        menuBurger?.classList.toggle("_active");
    })
    
});
window.addEventListener("resize", () => {
    const header = document.querySelector(".header");
    if (header) {
        setScrollMarginTop(header);
    }
})
function setScrollMarginTop(basedOnElement) {
    console.log(basedOnElement.clientHeight);
    document.documentElement.style.setProperty(
      "--scroll-margin-top",
      `${basedOnElement.clientHeight}px`
    );
}

