window.addEventListener("load", () => {
    const colorList = document.querySelector(".product-purchaise__color-list");
    const moreButton = document.querySelector(".product-purchaise__description-more");
    const descriptionEnd = document.querySelector(".product-purchaise__description-end");
    const descriptionDots = document.querySelector(".product-purchaise__description-dots");

    //temporary info list
    const colorsData = ["#151411", "#314443", "#C5A26E", "#D8DBE0"];
    for (let color of colorsData) {
      colorList.insertAdjacentHTML(
        "beforeend",
        ` <label for="${color}" class="product-purchaise__color-item" data-color="${color}">
                                            <input type="radio" id="${color}" value="${color}"
                                                class="product-purchaise__color" name="color">
                                        </label>`
      );
    }
    const colors = colorList?.querySelectorAll(".product-purchaise__color-item");
    if (colors.length > 0) {
        colors.forEach((element) => {
            // const elementColor = element.dataset.color;
            element.style.backgroundColor = element.dataset.color;
        });
    }
    moreButton?.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        const target = e.target;
        descriptionEnd.classList.toggle("_show");
        descriptionDots.classList.toggle("_show");
        let btnText = target.innerText.split(" ")[0];
        if (descriptionEnd.classList.contains("_show")) {
            btnText+=" less"
        } else {
             btnText += " more";
        }
        target.innerText = btnText;
    })
      
 })