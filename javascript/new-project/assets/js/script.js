import goods from "./data.js";
let { clothes, sale, products } = goods;

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

function summerSale() {
  sale.map((item) => {
    const globalSale = document.querySelector(".global-sale");

    const firstA = document.createElement("a");
    firstA.setAttribute("href", "");
    const saleItem = document.createElement("div");
    saleItem.classList.add("sale-item");
    const secondA = document.createElement("a");
    secondA.setAttribute("href", "");

    const itemImg = document.createElement("div");
    itemImg.classList.add("item-img");
    const image = document.createElement("img");
    image.setAttribute("src", item.image);
    const overOut = document.createElement("div");
    overOut.classList.add("over-out");
    itemImg.appendChild(image);
    itemImg.appendChild(overOut);
    secondA.appendChild(itemImg);

    const discounts = document.createElement("div");
    discounts.classList.add("discount");

    const itemDiscount = document.createElement("div");
    itemDiscount.classList.add("item-discount");
    itemDiscount.innerHTML = "-" + item.discount + "%";
    const name = document.createElement("div");
    name.classList.add("name");
    name.innerHTML = item.name;

    discounts.appendChild(itemDiscount);
    discounts.appendChild(name);

    saleItem.appendChild(secondA);
    saleItem.appendChild(discounts);
    firstA.appendChild(saleItem);
    globalSale.appendChild(firstA);
  });
}
summerSale();

function renderProducts() {
  const content = document.querySelector(".content");
  products.map((item) => {
    const contentItem = document.createElement("div");
    contentItem.classList.add("content-item");

    if (item.sale_off == null && item.choice == null) {
      contentItem.innerHTML += `
          <img
            class="content-img"
            src=${item.image}
            alt=""
          />
          <div class="product-item">
            <div class="item-price">
              ₫
              <p style="font-size: 20px">${item.price}</p>
            </div>

            <div class="sold">
              <span>${item.first_sold}</span>
              <img src="./assets/image/product/48x48.png" alt="" />
              <span class="next-sold">${item.next_sold}</span>
            </div>

            <div class="discription">${item.discription}</div>

            <div class="shipping">Free shipping</div>

            <div class="content-button">
              <button class="add-to-cart" id = ${item.id} >Add To Cart 🛒</button>
            </div>
          </div>
      `;
      content.appendChild(contentItem);
    }
    if (item.sale_off && item.choice == null) {
      contentItem.innerHTML += `
                <img
                  class="content-img"
                  src=${item.image}
                  alt=""
                />
                <div class="product-item">
                  <div class="item-price">
                    ₫
                    <p style="font-size: 20px">${item.price}</p>
                  </div>

                  <div class="sale-off">${item.sale_off}</div>

                  <div class="sold">
                    <span>${item.first_sold}</span>
                    <img src="./assets/image/product/48x48.png" alt="" />
                    <span class="next-sold">${item.next_sold}</span>
                  </div>

                  <div class="discription">${item.discription}</div>

                  <div class="shipping">Free shipping</div>

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
    }
    if (item.sale_off == null && item.choice) {
      contentItem.innerHTML += `
                <img
                  class="content-img"
                  src=${item.image}
                  alt=""
                />
                <div class="product-item">
                  <div class="item-price">
                    <p class="after-price">₫${item.after_price}</p>
                    <p class="befor-price">₫${item.before_price}</p>
                  </div>

                  <div class="choice">
                    <img src=${item.choice[0]} alt="" />
                    <img src=${item.choice[1]} alt="" />
                  </div>

                  <div class="sold">
                    <span>${item.first_sold}</span>
                    <img src="./assets/image/product/48x48.png" alt="" />
                    <span class="next-sold">${item.next_sold}</span>
                  </div>

                  <div class="discription">${item.discription}</div>

                  <div class="shipping">Free shipping</div>

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
    }
    if (item.sale_off && item.choice) {
      contentItem.innerHTML += `
                <img
                  class="content-img"
                  src=${item.image}
                  alt=""
                />
                <div class="product-item">
                  <div class="item-price">
                    ₫
                    <p style="font-size: 20px">${item.price}</p>
                  </div>

                  <div class="sale-off">${item.sale_off}</div>
                  <div class="choice">
                  <img
                      src=${item.choice}
                      alt=""
                    />
                  </div>

                  <div class="sold">
                    <span>${item.first_sold}</span>
                    <img src="./assets/image/product/48x48.png" alt="" />
                    <span class="next-sold">${item.next_sold}</span>
                  </div>

                  <div class="discription">${item.discription}</div>

                  <div class="shipping">Free shipping</div>

                  <div class="content-button">
                    <button class="add-to-cart" id = ${item.id}>Add To Cart 🛒</button>
                  </div>
                </div>
                `;
      content.appendChild(contentItem);
    }
  });
}
renderProducts();

// account log
function signUp() {
  const signUpButton = document.querySelector(".contain .register");
  const accSignUp = document.querySelector(".account-sign-up");

  signUpButton.addEventListener("click", () => {
    accSignUp.classList.add("sign-active");
    signUpForm();
  });

  const closeAccSignUp = document.querySelector(".sign-up-title button");
  closeAccSignUp.addEventListener("click", () => {
    accSignUp.classList.remove("sign-active");
  });
}
signUp();

function signUpForm() {
  const emailSignUp = document.getElementById("email-sign-up");
  const passSignUp = document.getElementById("password-sign-up");

  let emailValue = emailSignUp.nodeValue;
  let passValue = passSignUp.nodeValue;

  const createAcc = document.querySelector(".create-account");
  createAcc.addEventListener("click", () => {
    console.log("1", emailValue);
    console.log("2", passValue);
  });

  // if (emailSignUp && passSignUp) {
  //   console.log("dung");
  //   const createAcc = document.querySelector(".create-account");
  //   createAcc.addEventListener("click", () => {
  //     console.log("emailSignUp.value", typeof emailSignUp.value);
  //     console.log("passSignUp.value", typeof passSignUp.value);
  //     const account = {
  //       email: emailSignUp.value,
  //       password: passSignUp.value,
  //     };
  //     localStorage.setItem("account", JSON.stringify(account));
  //     accSignUp.classList.remove("sign-active");
  //     alert("Bạn đã đăng kí tài khoản thành công!");
  //   });
  // }
  // if (emailSignUp.value == "" && passSignUp.value != "") {
  //   console.log("sai");
  //   alert("Bạn phải nhập tài khoản!");
  // }
  // if (
  //   (emailSignUp.value && passSignUp.value == "") ||
  //   (emailSignUp.value && passSignUp.value == null)
  // ) {
  //   console.log("sai");
  //   alert("Bạn phải nhập mật khẩu!");
  // }
}

function signIn() {
  const signInButton = document.querySelector(".contain .sign-in");
  const accSignIn = document.querySelector(".account-sign-in");

  signInButton.addEventListener("click", () => {
    accSignIn.classList.add("sign-active");
  });

  const closeAccSignIn = document.querySelector(".sign-in-title button");
  4;
  closeAccSignIn.addEventListener("click", () => {
    accSignIn.classList.remove("sign-active");
  });
}
signIn();

const btns = document.querySelectorAll(".add-to-cart");
const btn = Array.prototype.slice.call(btns);
let array = [];
btn.forEach((b) =>
  b.addEventListener("click", () => {
    const idProduct = b.getAttribute("id");
    const productFind = products.find((el) => el.id === +idProduct);

    array.push(productFind);
    localStorage.setItem("array", JSON.stringify(array));

    const numberItem = document.querySelector("header .number");
    numberItem.innerHTML = array.length;
  })
);
