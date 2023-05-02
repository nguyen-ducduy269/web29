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

let cart = [];

const main = document.querySelector("main");
const menuBox = main.querySelector(".menu-box");

// cafe-box1
const cafeBox1 = menuBox.querySelector(".cafe-box1");
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
  } else {
    alert("Bạn chọn loại Nóng hoặc Đá trước khi thêm vào giỏ hàng!");
  }
});

// cafe-box2
const cafeBox2 = menuBox.querySelector(".cafe-box2");
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
buttons2.querySelector(".hot").innerHTML = blackCoffee.type[0];
buttons2.querySelector(".ice").innerHTML = blackCoffee.type[1];
// cafe-box3
