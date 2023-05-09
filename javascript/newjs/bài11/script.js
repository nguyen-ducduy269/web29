let data = [
  {
    id: "cf01",
    name: "Cà phê nâu",
    price: 25000,
    images: ["./image/nâu nóng.webp", "./image/nâu đá.webp"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },

  {
    id: "cf02",
    name: "Cà phê đen",
    price: 25000,
    images: ["./image/đen nóng.webp", "./image/đen đá.jpg"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },

  {
    id: "cf03",
    name: "Bạc sỉu",
    price: 40000,
    images: ["./image/bạc sỉu nóng.webp", "./image/bạc sỉu đá.jpg"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },
  {
    id: "cf04",
    name: "Cacao",
    price: 45000,
    images: ["./image/cacao nóng.jpg", "./image/cacao đá.jpg"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },
  {
    id: "cf05",
    name: "Trà đào cam xả",
    price: 50000,
    images: ["./image/đào xả nóng.jpg", "./image/đào xả đá.jpg"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },
  {
    id: "cf05",
    name: "Cà phê cốt dừa",
    price: 45000,
    images: ["./image/cốt dừa nóng.webp", "./image/cốt dừa đá.jpg"],
    type: {
      hot: {
        name: "Nóng",
      },
      cold: {
        name: "Đá",
      },
    },
  },
];

const main = document.querySelector("main");
const menuBox = main.querySelector(".menu-box");

function menuDrink() {
  data.forEach((product) => {
    let cafeBox = document.createElement("div");
    cafeBox.classList.add("cafe-box");

    let image = product.images[0];

    cafeBox.innerHTML += `
      <div class="image">
        <img src="${image}" alt="${product.name}">
      </div>

      <div class="discription">
        <div class="title">${product.name}</div>

        <div class="price">${product.price.toLocaleString("en-US")}đ</div>

        <div class="button">
          <div class="type-title">Loại:</div>
          <button class="hot">${product.type.hot.name}</button>
          <button class="ice">${product.type.cold.name}</button>
        </div>

        <button class="add">Thêm vào giỏ hàng</button>
      </div>
    `;

    menuBox.appendChild(cafeBox);

    // add cart
    const addBtn = cafeBox.querySelector(".add");
    addBtn.addEventListener("click", () => {
      addCoffee(cafeBox, product);
      priceCoffee(product);
      deleteCoffee();
    });
  });
}
menuDrink();

function changeDrink() {
  const coffeeImg = document.querySelectorAll(".menu-box img");
  const hotCoffee = document.querySelectorAll(".hot");
  const iceCoffee = document.querySelectorAll(".ice");

  data.forEach((product, i) => {
    // destructuring product - trích xuất phần tử images từ trong product và gán với 1 biến tên images
    const { images } = product;
    const hotImage = images[0];
    const iceImage = images[1];

    hotCoffee[i].addEventListener("click", () => {
      coffeeImg[i].setAttribute("src", hotImage);
      hotCoffee[i].classList.add("active");
      iceCoffee[i].classList.remove("active");
    });

    iceCoffee[i].addEventListener("click", () => {
      coffeeImg[i].setAttribute("src", iceImage);
      iceCoffee[i].classList.add("active");
      hotCoffee[i].classList.remove("active");
    });
  });
}
changeDrink();

function addCoffee(cafeBox, product) {
  const orders = document.querySelector(".orders");
  const hotCoffee = cafeBox.querySelector(".hot");
  const iceCoffee = cafeBox.querySelector(".ice");

  if (hotCoffee.classList.contains("active")) {
    const drink = {
      name: product.name,
      price: product.price,
      type: product.type.hot.name,
    };

    const order = document.createElement("div");
    order.classList.add("order");
    order.innerHTML = `
          <div class="image">
            <img src="${product.images[0]}" alt="${product.name}">
          </div>

          <div class="order-discription">
            <div class="title">${drink.name}</div>

            <div class="more">
              <div class="type-title">Loại:</div>
              <div class="detail">${drink.type}</div>
            </div>

            <div class="sum">
              <button class="divide">-</button>
              <div class="total">1</div>
              <button class="plus">+</button>
            </div>

            <div class="price">${drink.price.toLocaleString("en-US")}đ</div>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        `;

    orders.appendChild(order);
    hotCoffee.classList.remove("active");
  } else if (iceCoffee.classList.contains("active")) {
    const drink = {
      name: product.name,
      price: product.price,
      type: product.type.cold.name,
    };

    const order = document.createElement("div");
    order.classList.add("order");
    order.innerHTML = `
          <div class="image">
            <img src="${product.images[1]}" alt="${product.name}">
          </div>

          <div class="order-discription">
            <div class="title">${drink.name}</div>

            <div class="more">
              <div class="type-title">Loại:</div>
              <div class="detail">${drink.type}</div>
            </div>

            <div class="sum">
              <button class="divide">-</button>
              <div class="total">1</div>
              <button class="plus">+</button>
            </div>

            <div class="price">${drink.price.toLocaleString("en-US")}đ</div>
            <i class="fa-regular fa-trash-can"></i>
          </div>
        `;

    orders.appendChild(order);
    iceCoffee.classList.remove("active");
  } else {
    alert(
      "Bạn phải chọn loại nóng hoặc đá cho coffee trước khi thêm vào giỏ hàng"
    );
  }
}

function priceCoffee(product) {
  const drink = {
    name: product.name,
    price: product.price,
  };

  const order = document.querySelectorAll(".order");
  // phần tử forEach không thể dùng trên 1 phần tử duy nhất nên phải dùng querySelectorAll
  order.forEach((item) => {
    const plus = item.querySelector(".sum .plus");
    const divide = item.querySelector(".sum .divide");
    let quantity = item.querySelector(".sum .total");
    let currentPrice = item.querySelector(".order-discription .price");

    //////// parseFloat - chuyển từ chuỗi về số
    let newPrice = parseFloat(drink.price);
    let quantities = parseFloat(quantity.innerHTML);

    plus.addEventListener("click", () => {
      quantities += 1;
      quantity.innerHTML = quantities;

      newPrice = parseFloat(drink.price) * quantities;
      console.log(newPrice);
      currentPrice.innerHTML = newPrice.toLocaleString("en-US") + "đ";
    });

    divide.addEventListener("click", () => {
      if (quantities > 1) {
        quantities--;
        quantity.innerHTML = quantities;

        newPrice = parseFloat(drink.price) * quantities;
        console.log(newPrice);
        currentPrice.innerHTML = newPrice.toLocaleString("en-US") + "đ";
      }
    });
  });
}

function handleDelete(event) {
  if (confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")) {
    const orderElement = event.target.closest(".order");
    orderElement.remove();
  }
}

function deleteCoffee() {
  // xóa phần tử
  const trashIcons = document.querySelectorAll(".fa-trash-can");
  trashIcons.forEach((icon) => {
    icon.addEventListener("click", handleDelete);
  });
}

function submitButton() {
  const orders = document.querySelector(".orders");
  orders.innerHTML = "";
  alert("Bạn đã thanh toán thành công!");
}
