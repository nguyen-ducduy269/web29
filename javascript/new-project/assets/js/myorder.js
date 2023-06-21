const shoppingItem = JSON.parse(localStorage.getItem("array"));

const ordersH1 = document.querySelector(".orders h1");
ordersH1.innerHTML = "Shopping Cart" + "(" + shoppingItem.length + ")";
const summaryH1 = document.querySelector(".sum .submit");
summaryH1.innerHTML = "Check Out " + "(" + shoppingItem.length + ")";

shoppingItem.map((item) => {
  const myOrder = document.querySelector(".my-order");
  const order = document.createElement("div");
  order.classList.add("order");

  order.innerHTML += `
  ${
    item.type == "ring" && item.after_price == null
      ? `
    <img src=${item.image} alt="" />
    <div class="order-detail">
        <p>${item.discription}</p>

        <div class="order-cost">VND ₫${item.price}</div>
        <div class="shipping">Free shipping</div>

        <div class="size-ring">
            <p>Choose size ring: 7</p>
            <div>
                <button value="7" class="value-7 size-ring-active">7</button>
                <button value="8" class="value-8">8</button>
                <button value="9" class="value-9">9</button>
            </div>
        </div>

        <div class="to-summary">
        <div class="quantities">
            <button class="decrease">-</button>
            <div class="quantity">1</div>
            <button class="increase">+</button>
        </div>

        <button class="delete">
            <i class="fa-regular fa-trash-can"></i>
        </button>
        </div>
    </div>
  `
      : ""
  }

  ${
    item.type != "ring" && item.after_price == null
      ? `
      <img src=${item.image} alt="" />
      <div class="order-detail">
          <p>${item.discription}</p>
  
          <div class="order-cost">VND ₫${item.price}</div>
          <div class="shipping">Free shipping</div>
  
          <div class="to-summary">
          <div class="quantities">
              <button class="decrease">-</button>
              <div class="quantity">1</div>
              <button class="increase">+</button>
          </div>
  
          <button class="delete">
              <i class="fa-regular fa-trash-can"></i>
          </button>
          </div>
      </div>
  `
      : ""
  }

  ${
    item.after_price && item.price == null
      ? `
    <img src=${item.image} alt="" />
    <div class="order-detail">
        <p>${item.discription}</p>

        <div class="order-cost">VND ₫${item.after_price}</div>
        <div class="shipping">Free shipping</div>

        <div class="to-summary">
        <div class="quantities">
            <button class="decrease">-</button>
            <div class="quantity">1</div>
            <button class="increase">+</button>
        </div>

        <button class="delete">
            <i class="fa-regular fa-trash-can"></i>
        </button>
        </div>
    </div>
    `
      : ""
  }
  `;
  myOrder.appendChild(order);
});

function changeRingValue() {
  const ringSize7 = document.querySelectorAll(".value-7");
  const ringSize8 = document.querySelectorAll(".value-8");
  const ringSize9 = document.querySelectorAll(".value-9");

  ringSize7.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("size-ring-active");
      ringSize8.forEach((ring8) => {
        ring8.classList.remove("size-ring-active");
      });
      ringSize9.forEach((ring9) => {
        ring9.classList.remove("size-ring-active");
      });
      const valueRing = document.querySelector(".size-ring p");
      valueRing.innerHTML = "Choose size ring: " + item.value;
    });
  });

  ringSize8.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("size-ring-active");
      ringSize7.forEach((ring7) => {
        ring7.classList.remove("size-ring-active");
      });
      ringSize9.forEach((ring9) => {
        ring9.classList.remove("size-ring-active");
      });
      const valueRing = document.querySelector(".size-ring p");
      valueRing.innerHTML = "Choose size ring: " + item.value;
    });
  });

  ringSize9.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("size-ring-active");
      ringSize8.forEach((ring8) => {
        ring8.classList.remove("size-ring-active");
      });
      ringSize7.forEach((ring7) => {
        ring7.classList.remove("size-ring-active");
      });
      const valueRing = document.querySelector(".size-ring p");
      valueRing.innerHTML = "Choose size ring: " + item.value;
    });
  });
}
changeRingValue();

function changeQuantities() {
  const decreaseBtn = document.querySelectorAll(".decrease");
  const quantityValue = document.querySelectorAll(".quantity");
  const increaseBtn = document.querySelectorAll(".increase");
  const valuePrice = document.querySelectorAll(".order-cost");
  const deleteBtn = document.querySelectorAll(".delete");

  for (let i = 0; i < shoppingItem.length; i++) {
    if (shoppingItem[i].price && shoppingItem[i].after_price == null) {
      decreaseBtn[i].addEventListener("click", () => {
        let newPrice = Number(shoppingItem[i].price);
        let quantities = Number(quantityValue[i].innerHTML);
        if (quantities > 1) {
          quantities -= 1;
          quantityValue[i].innerHTML = quantities;
          updatePrice(newPrice, quantities, i);
        }
      });

      increaseBtn[i].addEventListener("click", () => {
        let newPrice = Number(shoppingItem[i].price);
        let quantities = Number(quantityValue[i].innerHTML);
        quantities += 1;
        quantityValue[i].innerHTML = quantities;
        updatePrice(newPrice, quantities, i);
      });

      deleteBtn[i].addEventListener("click", () => {
        if (confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
          let deleteItem = shoppingItem[i];
          console.log("deleteItem", deleteItem);
          localStorage.removeItem(shoppingItem[i]);
        }
      });
    } else if (shoppingItem[i].price == null && shoppingItem[i].after_price) {
      decreaseBtn[i].addEventListener("click", () => {
        let newPrice = Number(shoppingItem[i].after_price);
        let quantities = Number(quantityValue[i].innerHTML);
        if (quantities > 1) {
          quantities -= 1;
          quantityValue[i].innerHTML = quantities;
          updatePrice(newPrice, quantities, i);
        }
      });

      increaseBtn[i].addEventListener("click", () => {
        let newPrice = Number(shoppingItem[i].after_price);
        let quantities = Number(quantityValue[i].innerHTML);
        quantities += 1;
        quantityValue[i].innerHTML = quantities;
        updatePrice(newPrice, quantities, i);
      });
    }
  }

  function updatePrice(newPrice, quantities, index) {
    newPrice = newPrice * quantities;
    valuePrice[index].innerHTML = "VND ₫" + newPrice.toFixed(3);
  }
}
changeQuantities();

function totalPrice() {
  const totalPrice = document.querySelector(".total .price");
}
