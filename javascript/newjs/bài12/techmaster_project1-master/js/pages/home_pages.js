import { menu } from "../data.js";

function home_page() {
  let main = document.createElement("main");
  main.innerHTML = `
  <div class="container">
    </div>
  `;

  function food() {
    let div = document.createElement("div");
    div.classList.add("row");

    menu.map((menuItem) => {
      let article = document.createElement("article");
      article.innerHTML = `
          <div class="image" style="background-image: url(${menuItem.thumbnail})"></div>
          <div class="content">
              <h3>${menuItem.name}</h3>
          </div>
        `;

      const articleImg = article.querySelector(".image");
      const span = document.createElement("span");
      span.innerHTML = menuItem.status;
      if (menuItem.status == "Còn") {
        span.setAttribute("class", "completed");
      }
      if (menuItem.status == "Hết") {
        span.setAttribute("class", "danger");
      }
      articleImg.appendChild(span);

      div.appendChild(article);
    });

    return div;
  }

  function order() {
    let div = document.createElement("form");
    div.innerHTML = `
    <h3>Quý khách vui lòng điền thông tin món trong menu tại đây</h3>
    <textarea
      class="input"
      rows="10"
      placeholder="VD: 10k xôi xéo, xôi thịt kho 2 trứng,..."
    ></textarea>
    <button type="button" class="btn">Đặt món</button>
    `;
    return div;
  }

  const container = main.querySelector(".container");
  container.appendChild(food());
  container.appendChild(order());
  return main;
}
export default home_page;
