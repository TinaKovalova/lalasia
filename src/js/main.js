import "/src/scss/style.scss";
window.addEventListener("load", () => {

    const navigation = document.querySelector(".navigation");
    const actions = document.querySelector(".actions");
    const menuBurger = document.querySelector('.menu-burger');
    const burgerBtn = document.querySelector(".burger-btn ");

    const matchMedia = window.matchMedia("(max-width: 991.98px)");
    if (matchMedia.matches && menuBurger) {
        if (actions) {
            menuBurger.insertAdjacentElement("beforeend", actions);
        } 
        if (navigation) {
            menuBurger.insertAdjacentElement("beforeend", navigation);
        }
    }
    burgerBtn?.addEventListener("click", () => {
        console.log(menuBurger);
        menuBurger?.classList.toggle("_active");
    })
    
});
