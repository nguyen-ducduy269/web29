const shoppingItem = JSON.parse(localStorage.getItem("array"));
console.log("shoppingItem", shoppingItem);

shoppingItem.map((item) => {
  const myOrder = document.querySelector(".my-order");
  const order = document.createElement("div");
  order.classList.add("order");

  order.innerHTML += `
  ${
    item.type == "ring"
      ? `
    <img src=${item.image} alt="" />
    <div class="order-detail">
        <p>${item.discription}</p>

        <div class="order-cost">VND ₫${item.price}</div>
        <div class="shipping">Free shipping</div>

        <div class="size-ring">
            <p>Choose size ring:</p>
            <div>
                <button value="7" class="size-ring-active">7</button>
                <button value="7">8</button>
                <button value="7">9</button>
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
      : `
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
  }
  `;
  myOrder.appendChild(order);
});
