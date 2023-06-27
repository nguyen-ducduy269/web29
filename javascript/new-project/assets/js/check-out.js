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
      inputName +
      " " +
      inputNumber +
      " " +
      detailLocation +
      "," +
      wardValue +
      "," +
      districtValue +
      "," +
      cityValue;
    newAddress.classList.remove("address-active");
  });
}

function addCart() {
  const save = document.querySelector(".save");
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

    const paymentP = document.querySelector(".payment-method p");
    const method = document.querySelector(".method");
  });
}
function websiteRun() {
  openAndClose();
  renderPlace();
  addCart();
}
websiteRun();
