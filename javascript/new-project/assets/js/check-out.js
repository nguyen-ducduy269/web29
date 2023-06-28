import location from "./check-out-data.js";
let { city, district, wart } = location;

function openAndClose() {
  const address = document.querySelector(".package .address");
  const newAddress = document.querySelector(".new-address");
  address.addEventListener("click", () => {
    newAddress.classList.add("address-active");
  });

  const exit = document.querySelector(".exit");
  exit.addEventListener("click", () => {
    newAddress.classList.remove("address-active");
  });

  const addNewCart = document.querySelector(".add-new-cart");
  const paymentOpen = document.querySelector(".payment-method p");
  paymentOpen.addEventListener("click", () => {
    addNewCart.classList.add("cart-active");
  });
  const paymentClose = document.querySelector(".close");
  paymentClose.addEventListener("click", () => {
    addNewCart.classList.remove("cart-active");
  });
}

function renderPlace() {
  city.map((item) => {
    const citySelect = document.getElementById("city");
    let cityOption = document.createElement("option");
    cityOption.setAttribute("value", item.name);
    cityOption.innerHTML = item.name;

    citySelect.appendChild(cityOption);
  });

  district.map((dis) => {
    const districtSelect = document.getElementById("district");
    let districtOption = document.createElement("option");
    districtOption.setAttribute("value", dis.name);
    districtOption.innerHTML = dis.name;

    districtSelect.appendChild(districtOption);
  });

  wart.map((warts) => {
    const wartSelect = document.getElementById("ward");
    let wartOption = document.createElement("option");
    wartOption.setAttribute("value", warts.name);
    wartOption.innerHTML = warts.name;

    wartSelect.appendChild(wartOption);
  });

  const cancle = document.querySelector(".cancle");
  const newAddress = document.querySelector(".new-address");
  cancle.addEventListener("click", () => {
    window.location.reload();
    newAddress.classList.remove("address-active");
  });

  const complete = document.querySelector(".complete");
  complete.addEventListener("click", () => {
    const inputName = document.getElementById("name").value;
    const inputNumber = document.getElementById("phone-number").value;
    const cityValue = document.getElementById("city").value;
    const districtValue = document.getElementById("district").value;
    const wardValue = document.getElementById("ward").value;
    const detailLocation = document.getElementById("location").value;

    const addressText = document.querySelector(".package .address");
    addressText.classList.add("add");
    addressText.innerHTML =
      `<p>
      ${inputName}, ${inputNumber}, ${detailLocation}, ${wardValue},  ${districtValue}, ${cityValue}</p>` +
      `<div onclick=${changeLocation} style="color: blue">Change</div>`;
    newAddress.classList.remove("address-active");
  });

  function changeLocation() {
    newAddress.classList.add("address-active");
  }
}

function addCart() {
  const save = document.querySelector(".save");
  const paymentP = document.querySelector(".payment-method p");
  const method = document.querySelector(".method");
  const addNewCart = document.querySelector(".add-new-cart");

  save.addEventListener("click", () => {
    const cartNumber = document.getElementById("cart-number").value;
    const cartName = document.getElementById("cart-name").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const CVV = document.getElementById("CVV").value;

    console.log(cartNumber);
    console.log(cartName);
    console.log(month);
    console.log(year);
    console.log(CVV);

    paymentP.classList.add("none");
    method.classList.add("block");
    const first = document.querySelector(".method .first");
    first.innerHTML = `<img src="./assets/image/visa.png" alt="" /> ${cartNumber}`;
    addNewCart.classList.remove("cart-active");

    const change = document.querySelector(".change");
    change.addEventListener("click", () => {
      addNewCart.classList.add("cart-active");
    });
  });
}

const products = JSON.parse(localStorage.getItem("items"));
function renderCustomProduct() {
  const customProduct = document.querySelector(".custom-products");
  products.map((product) => {
    const item = document.createElement("div");
    item.classList.add("product");

    item.innerHTML += `
      <img src=${product.imageItemSrc} alt="" />

      <div class="prod">
        <div class="title">${product.nameItem}</div>

        <div class="infor">
          <div class="price"><b>Price: ₫${product.productPrice}</b></div>

          <div class="quantity">Quantity: ${product.quantity}</div>
        </div>

        <p>Free Shipping</p>
      </div>
    `;
    customProduct.appendChild(item);
  });
}

function renderSummary() {
  const summary = document.querySelector(".summary");
  products.map((item) => {
    summary.innerHTML = `
      <h3>Summary</h3>
      <div class="total-item-cost">
        <p>Total item costs</p>
        <div class="cost">₫${item.unitPrice}</div>
      </div>

      <div class="total-shipping">
        <p>Total Shipping</p>
        <div class="ship">₫0.00</div>
      </div>

      <div class="sum">
        <p>Total</p>
        <div class="sum-price">₫${item.unitPrice}</div>
      </div>

      <button class="place-order">Place Order</button>

      <div class="more">
        Upon clicking 'Place Order', I confirm I have read and
        acknowledged
        <a
          href="https://sale.aliexpress.com/__pc/swnTH7VwPu.htm?spm=a2g0o.placeorder.0.0.64f9321eOeetkN"
          >all terms and policies</a
        >
      </div>
    `;
  });

  function placeOrder() {}
}
function websiteRun() {
  openAndClose();
  renderPlace();
  addCart();
  renderCustomProduct();
  renderSummary();
}
websiteRun();
