const removeItem = document.getElementsByClassName("btn-delete");
const totalPriceEl = document.querySelector("#total-price");

for (let i = 0; i < removeItem.length; i++) {
  let button = removeItem[i];
  button.addEventListener("click", onRemoveItem);
  save();
  let input = tongTien[i];
  input.addEventListener("click", tongTien());
}

function onRemoveItem(e) {
  const totalPrice = Number(totalPriceEl.innerHTML.replace(/[.]/g, ""));
  console.log(totalPrice);

  const parentEl = e.target.parentNode;
  const cartContentEl = parentEl.parentNode;

  const priceEl = cartContentEl.querySelector(".techmaster-price");
  console.log("Price El:", priceEl);

  const price = Number(priceEl.innerHTML.replace(/[.]/g, ""));
  const calcTotalPrice = totalPrice - price;
  console.log(calcTotalPrice);

  totalPriceEl.innerHTML = calcTotalPrice;
  e.target.parentElement.parentElement.parentElement.remove();
}

function tongTien(e) {
  const parentEl = e.target.parentNode;
  const cartContentEl = parentEl.parentNode;
  const priceEl = cartContentEl.querySelector(".techmaster-price");
  console.log("Price El:", priceEl);

  const inputValue = document.querySelector("#value");
  const soLuong = Number(inputValue.value);
  const calcTongTien = thanhTien * soLuong;
  totalPriceEl.innerHTML += calcTongTien;
  console.log(thanhTien, soLuong);
}
const item = JSON.parse(localStorage.getItem("cart-item")) || [];
function save() {
  const items = JSON.stringify(item);

  localStorage.setItem("cart-item", items);
}
