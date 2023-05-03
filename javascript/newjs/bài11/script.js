let data = [
  {
    id: "cf01",
    name: "Cà phê nâu",
    price: 25000,
    type: ["Nóng", "Đá"],

    variations: [
      {
        id: "cf01-1",
        name: "Cà phê nâu nóng",
        price: 25000,
        type: "Nóng",
      },
      {
        id: "cf01-2",
        name: "Cà phê nâu đá",
        price: 25000,
        type: "Đá",
      },
    ],
  },

  {
    id: "cf02",
    name: "Cà phê đen",
    price: 25000,
    type: ["Nóng", "Đá"],

    variations: [
      {
        id: "cf02-1",
        name: "Cà phê đen nóng",
        price: 25000,
        type: "Nóng",
      },
      {
        id: "cf02-2",
        name: "Cà phê đen đá",
        price: 25000,
        type: "Đá",
      },
    ],
  },

  {
    id: "cf03",
    name: "Bạc sỉu",
    price: 40000,
    type: ["Nóng", "Đá"],

    variations: [
      {
        id: "cf03-1",
        name: "Bạc sỉu nóng",
        price: 40000,
        type: "Nóng",
      },
      {
        id: "cf03-2",
        name: "Bạc sỉu đá",
        price: 40000,
        type: "Đá",
      },
    ],
  },
];

const main = document.querySelector("main");
const menuBox = main.querySelector(".menu-box");

// cafe-box1
const cafeBox1 = menuBox.querySelectorAll(".cafe-box1");

cafeBox1.forEach((cafeBox1) => {
  const cafeImg = cafeBox1.querySelector(".image");
  const cafeImage = document.createElement("img");
  cafeImage.setAttribute("src", "./image/nâu đá.webp");
  cafeImg.appendChild(cafeImage);

  const discription = cafeBox1.querySelector(".discription");
  const brownCoffee = data.find((item) => item.id === "cf01");

  const titleCafe = discription.querySelector(".title");
  titleCafe.innerHTML = brownCoffee.name;
  const priceCafe = discription.querySelector(".price");
  priceCafe.innerHTML = brownCoffee.variations[0].price + "đ";

  const buttons = discription.querySelector(".button");
  buttons.querySelector(".type-title").innerHTML = "Loại:";
  const hotBrown = buttons.querySelector(".hot-brown");
  hotBrown.innerHTML = brownCoffee.type[0];
  const iceBrown = buttons.querySelector(".ice-brown");
  iceBrown.innerHTML = brownCoffee.type[1];

  hotBrown.addEventListener("click", (e) => {
    cafeImage.setAttribute("src", "./image/nâu nóng.webp");
    e.target.classList.add("active");
    iceBrown.classList.remove("active");
  });

  iceBrown.addEventListener("click", (e) => {
    cafeImage.setAttribute("src", "./image/nâu đá.webp");
    e.target.classList.add("active");
    hotBrown.classList.remove("active");
  });

  const add = discription.querySelector(".add");
  add.innerHTML = "Thêm vào giỏ 🛒";
  add.addEventListener("click", () => {
    if (hotBrown.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = brownCoffee.variations[0].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${brownCoffee.variations[0].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
        <button class="plus">+</button>
        <div class="total">1</div>
        <button class="divide">-</button>
      `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = brownCoffee.variations[0].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      // Khởi tạo giá trị hiển thị và giá trị mặc định ban đầu
      let quantity = 1;
      // chuyển giá tiền từ dạng chuỗi về số
      let currentPrice = parseFloat(brownCoffee.variations[0].price);

      quantityInput.innerHTML = quantity;
      // lấy 2 giá trị sau số thập phân
      price.innerHTML = currentPrice + "đ";

      // Bắt đầu thêm sự kiện cho nút + và nút -
      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        // lấy giá trị của sản phẩm lần thêm đầu chuyển về dạng số
        const variationPrice = parseFloat(brownCoffee.variations[0].price);
        // sau mỗi lần bấm giá trị của sản phẩm sẽ tăng lên
        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          // Cập nhật giá trị của biến currentPrice
          const variationPrice = parseFloat(brownCoffee.variations[0].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      hotBrown.classList.remove("active");
    } else if (iceBrown.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = brownCoffee.variations[1].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${brownCoffee.variations[1].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
        <button class="plus">+</button>
        <div class="total">1</div>
        <button class="divide">-</button>
      `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = brownCoffee.variations[1].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      // Khởi tạo giá trị hiển thị và giá trị mặc định ban đầu
      let quantity = 1;
      // chuyển giá tiền từ dạng chuỗi về số
      let currentPrice = parseFloat(brownCoffee.variations[1].price);

      quantityInput.innerHTML = quantity;
      // lấy 2 giá trị sau số thập phân
      price.innerHTML = currentPrice + "đ";

      // Bắt đầu thêm sự kiện cho nút + và nút -
      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        // lấy giá trị của sản phẩm lần thêm đầu chuyển về dạng số
        const variationPrice = parseFloat(brownCoffee.variations[1].price);
        // sau mỗi lần bấm giá trị của sản phẩm sẽ tăng lên
        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          // Cập nhật giá trị của biến currentPrice
          const variationPrice = parseFloat(brownCoffee.variations[1].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      iceBrown.classList.remove("active");
    } else {
      alert("Bạn chọn loại Nóng hoặc Đá trước khi thêm vào giỏ hàng!");
    }
  });
});

// cafe-box2
const cafeBox2 = menuBox.querySelectorAll(".cafe-box2");

cafeBox2.forEach((cafeBox2) => {
  const cafeImg2 = cafeBox2.querySelector(".image");
  const cafeImage2 = document.createElement("img");
  cafeImage2.setAttribute("src", "./image/đen đá.jpg");
  cafeImg2.appendChild(cafeImage2);

  const discription2 = cafeBox2.querySelector(".discription");
  const blackCoffee = data.find((item) => item.id === "cf02");

  const titleCafe2 = discription2.querySelector(".title");
  titleCafe2.innerHTML = blackCoffee.name;
  const priceCafe2 = discription2.querySelector(".price");
  priceCafe2.innerHTML = blackCoffee.variations[0].price + "đ";

  const buttons2 = discription2.querySelector(".button");
  buttons2.querySelector(".type-title").innerHTML = "Loại:";
  const hotBlack = buttons2.querySelector(".hot-black");
  hotBlack.innerHTML = blackCoffee.type[0];
  const iceBlack = buttons2.querySelector(".ice-black");
  iceBlack.innerHTML = blackCoffee.type[1];

  hotBlack.addEventListener("click", (e) => {
    cafeImage2.setAttribute("src", "./image/đen nóng.webp");
    e.target.classList.add("active");
    iceBlack.classList.remove("active");
  });

  iceBlack.addEventListener("click", (e) => {
    cafeImage2.setAttribute("src", "./image/đen đá.jpg");
    e.target.classList.add("active");
    hotBlack.classList.remove("active");
  });

  const add2 = discription2.querySelector(".add2");
  add2.innerHTML = "Thêm vào giỏ 🛒";
  add2.addEventListener("click", () => {
    if (hotBlack.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage2.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = blackCoffee.variations[0].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${blackCoffee.variations[0].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
    <button class="plus">+</button>
    <div class="total">1</div>
    <button class="divide">-</button>
  `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = blackCoffee.variations[0].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      let quantity = 1;

      let currentPrice = parseFloat(blackCoffee.variations[0].price);

      quantityInput.innerHTML = quantity;

      price.innerHTML = currentPrice + "đ";

      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        const variationPrice = parseFloat(blackCoffee.variations[0].price);

        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          const variationPrice = parseFloat(blackCoffee.variations[0].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      hotBlack.classList.remove("active");
    } else if (iceBlack.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage2.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = blackCoffee.variations[1].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${blackCoffee.variations[1].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
    <button class="plus">+</button>
    <div class="total">1</div>
    <button class="divide">-</button>
  `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = blackCoffee.variations[1].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      let quantity = 1;

      let currentPrice = parseFloat(blackCoffee.variations[1].price);

      quantityInput.innerHTML = quantity;

      price.innerHTML = currentPrice + "đ";

      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        const variationPrice = parseFloat(blackCoffee.variations[1].price);

        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          const variationPrice = parseFloat(blackCoffee.variations[1].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      iceBlack.classList.remove("active");
    } else {
      alert("Bạn chọn loại Nóng hoặc Đá trước khi thêm vào giỏ hàng!");
    }
  });
});

// cafe-box3
const cafeBox3 = menuBox.querySelectorAll(".cafe-box3");

cafeBox3.forEach((cafeBox3) => {
  const cafeImg3 = cafeBox3.querySelector(".image");
  const cafeImage3 = document.createElement("img");
  cafeImage3.setAttribute("src", "./image/bạc sỉu đá.jpg");
  cafeImg3.appendChild(cafeImage3);

  const discription3 = cafeBox3.querySelector(".discription");
  const silverShun = data.find((item) => item.id === "cf03");

  const titleCafe3 = discription3.querySelector(".title");
  titleCafe3.innerHTML = silverShun.name;
  const priceCafe3 = discription3.querySelector(".price");
  priceCafe3.innerHTML = silverShun.variations[0].price + "đ";

  const buttons3 = discription3.querySelector(".button");
  buttons3.querySelector(".type-title").innerHTML = "Loại:";
  const hotSilverShun = buttons3.querySelector(".hot");
  hotSilverShun.innerHTML = silverShun.type[0];
  const iceSilverShun = buttons3.querySelector(".ice");
  iceSilverShun.innerHTML = silverShun.type[1];

  hotSilverShun.addEventListener("click", (e) => {
    cafeImage3.setAttribute("src", "./image/bạc sỉu nóng.webp");
    e.target.classList.add("active");
    iceSilverShun.classList.remove("active");
  });

  iceSilverShun.addEventListener("click", (e) => {
    cafeImage3.setAttribute("src", "./image/bạc sỉu đá.jpg");
    e.target.classList.add("active");
    hotSilverShun.classList.remove("active");
  });

  const add3 = discription3.querySelector(".add3");
  add3.innerHTML = "Thêm vào giỏ 🛒";
  add3.addEventListener("click", () => {
    if (hotSilverShun.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage3.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = silverShun.variations[0].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${silverShun.variations[0].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
    <button class="plus">+</button>
    <div class="total">1</div>
    <button class="divide">-</button>
  `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = silverShun.variations[0].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      let quantity = 1;

      let currentPrice = parseFloat(silverShun.variations[0].price);

      quantityInput.innerHTML = quantity;

      price.innerHTML = currentPrice + "đ";

      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        const variationPrice = parseFloat(silverShun.variations[0].price);

        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          const variationPrice = parseFloat(silverShun.variations[0].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      hotSilverShun.classList.remove("active");
    } else if (iceSilverShun.classList.contains("active")) {
      const orders = main.querySelector(".orders");
      const order = document.createElement("div");
      order.setAttribute("class", "order");
      orders.appendChild(order);

      const orderImage = document.createElement("div");
      orderImage.setAttribute("class", "image");
      order.appendChild(orderImage);

      const orderImg = document.createElement("img");
      orderImg.setAttribute("src", cafeImage3.getAttribute("src"));
      orderImage.appendChild(orderImg);

      const orderDis = document.createElement("div");
      orderDis.setAttribute("class", "order-discription");
      order.appendChild(orderDis);

      const orderTitle = document.createElement("div");
      orderTitle.setAttribute("class", "title");
      orderTitle.innerHTML = silverShun.variations[1].name;
      orderDis.appendChild(orderTitle);

      const more = document.createElement("div");
      more.setAttribute("class", "more");
      more.innerHTML = `
      <div class="type-title">Loại:</div>
      <div class="detail">${silverShun.variations[1].type}</div>
    `;
      orderDis.appendChild(more);

      const sum = document.createElement("div");
      sum.setAttribute("class", "sum");
      sum.innerHTML = `
    <button class="plus">+</button>
    <div class="total">1</div>
    <button class="divide">-</button>
  `;
      orderDis.appendChild(sum);

      const price = document.createElement("div");
      price.setAttribute("class", "price");
      price.innerHTML = silverShun.variations[1].price + "đ";
      orderDis.appendChild(price);

      const quantityInput = sum.querySelector(".total");
      const plusButton = sum.querySelector(".plus");
      const minusButton = sum.querySelector(".divide");

      let quantity = 1;

      let currentPrice = parseFloat(silverShun.variations[1].price);

      quantityInput.innerHTML = quantity;

      price.innerHTML = currentPrice + "đ";

      plusButton.addEventListener("click", () => {
        quantity++;
        quantityInput.innerHTML = quantity;

        const variationPrice = parseFloat(silverShun.variations[1].price);

        currentPrice += variationPrice;
        price.innerHTML = currentPrice + "đ";
      });

      minusButton.addEventListener("click", () => {
        if (quantity > 1) {
          quantity--;
          quantityInput.innerHTML = quantity;

          const variationPrice = parseFloat(silverShun.variations[1].price);
          currentPrice -= variationPrice;
          price.innerHTML = currentPrice + "đ";
        }
      });
      iceSilverShun.classList.remove("active");
    } else {
      alert("Bạn chọn loại Nóng hoặc Đá trước khi thêm vào giỏ hàng!");
    }
  });
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  const order = document.querySelector(".order");
  if (!order) {
    alert("Bạn không có sản phẩm nào!");
  } else {
    document.querySelector(".orders").innerHTML =
      "Bạn đã thanh toán thành công!";
  }
});

const header = document.querySelector("header");
const input = header.querySelector("input");
const filter = header.querySelector("button");
filter.addEventListener("click", () => {
  const inputValue = input.value;
  console.log(inputValue);
});
