const removeItem = document.getElementsByClassName("btn-delete");
const totalPriceEl = document.querySelector("#total-price");

for (let i = 0; i < removeItem.length; i++) {
  let button = removeItem[i];
  button.addEventListener("click", onRemoveItem);
  save();
  tongTien();
}

function onRemoveItem(e) {
  const totalPrice = +totalPriceEl.innerHTML.replace(/[.]/g, "");
  console.log(totalPrice);

  const parentEl = e.target.parentNode;
  const cartContentEl = parentEl.parentNode;

  const priceEl = cartContentEl.querySelector(".techmaster-price");
  console.log("Price El:", priceEl);

  const price = +priceEl.innerHTML.replace(/[.]/g, "");
  const calcTotalPrice = totalPrice - price;
  console.log(calcTotalPrice);

  totalPriceEl.innerHTML = calcTotalPrice;
  e.target.parentElement.parentElement.parentElement.remove();
}

const khoaHoc = document.querySelector(".cart-item-detail");
function tongTien(khoaHoc) {
  const tongGia = document.getElementById("total-price");
  const giaTri = document.getElementsByClassName("techmaster-price");
  const inputValue = document.getElementsByClassName("input").value;
  let tong = 0;
  if (inputValue >= 1) {
    tong = giaTri * inputValue;
    tongGia += tong;
  }
  return tongGia;
}

const item = JSON.parse(localStorage.getItem("cart-item")) || [];
function save() {
  const items = JSON.stringify(item);

  localStorage.setItem("cart-item", items);
}
