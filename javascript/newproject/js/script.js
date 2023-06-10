import clothes from "./data.js";

function renderCategories() {
  clothes.map((product) => {
    const listCate = document.querySelector(".list-categories");
    let itemCate = document.createElement("a");
    itemCate.classList.add("item-cate");

    let itemImg = document.createElement("div");
    itemImg.classList.add("img");
    itemImg.style.backgroundImage = `url(${product.image})`;

    let itemDetail = document.createElement("div");
    itemDetail.classList.add("detail");
    itemDetail.innerHTML = product.name;

    itemCate.appendChild(itemImg);
    itemCate.appendChild(itemDetail);
    listCate.appendChild(itemCate);
  });
}
renderCategories();
