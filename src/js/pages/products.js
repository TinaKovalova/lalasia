window.addEventListener("load", () => { 
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
})