window.addEventListener("load", () => {
    const colorList = document.querySelector(".product-purchaise__color-list");
    const moreButton = document.querySelector(".product-purchaise__description-more");
    const descriptionEnd = document.querySelector(".product-purchaise__description-end");
    const descriptionDots = document.querySelector(".product-purchaise__description-dots");

    //temporary info list
    const colorsData = ["#151411", "#314443", "#C5A26E", "#D8DBE0"];

    for (let color of colorsData) {
        const colorItem = document.createElement("label");
        colorItem.classList.add("product-purchaise__color-item");
        colorItem.style.backgroundColor = color;
        colorItem.setAttribute("for", color);
        colorItem.insertAdjacentHTML(
          "beforeend",
          `<input type="radio" id="${color}" value="${color}" class="product-purchaise__color" name="color">`
        );
        colorList.insertAdjacentElement("beforeend", colorItem);
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