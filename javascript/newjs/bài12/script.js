//
// Object.entries - dùng để lặp ra tất cả phần tử bên trong Array

// let cart = {
//   1: {
//     name: "a",
//     ice: 30,
//   },
//   2: {
//     name: "b",
//     ice: 40,
//   },
//   3: {
//     name: "c",
//     ice: 50,
//   },
// };
// for (let [k, v] of Object.entries(cart)) {
//   console.log(k);
//   console.log(v);
// }

// Dữ liệu các sản phẩm
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

// Khởi tạo giỏ hàng
let cart = [];

// Lấy phần tử container và cart-items
let container = document.querySelector(".container");
let cartItems = document.querySelector(".cart-items");

// Render sản phẩm
data.forEach((product) => {
  // Tạo div.product
  let productDiv = document.createElement("div");
  productDiv.className = "product";

  // Tạo h2 cho tên sản phẩm
  let productName = document.createElement("h2");
  productName.innerText = product.name;

  // Tạo select box cho loại sản phẩm
  let productSelect = document.createElement("select");
  product.type.forEach((type) => {
    let option = document.createElement("option");
    option.value = type;
    option.text = type;
    productSelect.add(option);
  });

  // Tạo select box cho variation
  let variationSelect = document.createElement("select");
  product.variations.forEach((variation) => {
    let option = document.createElement("option");
    option.value = variation.id;
    option.text = variation.name;
    variationSelect.add(option);
  });

  // Tạo input cho số lượng
  let productQuantity = document.createElement("input");
  productQuantity.type = "number";
  productQuantity.min = 1;
  productQuantity.value = 1;

  // Tạo button cho thêm sản phẩm vào giỏ hàng
  let addButton = document.createElement("button");
  addButton.innerText = "Thêm vào giỏ hàng";
  addButton.onclick = () => {
    // Tìm variation theo id đã chọn
    let variation = product.variations.find(
      (variation) => variation.id === variationSelect.value
    );

    // Kiểm tra sp đã có trong giỏ hàng chưa
    let cartItem = cart.find(
      (item) =>
        item.product.id === product.id && item.variation.id === variation.id
    );

    if (cartItem) {
      // Nếu đã có thì tăng số lượng
      cartItem.quantity += parseInt(productQuantity.value);
    } else {
      // Nếu chưa có thì tạo mới cart item
      cart.push({
        product: product,
        variation: variation,
        quantity: parseInt(productQuantity.value),
      });
    }

    // Cập nhật giỏ hàng trên giao diện
    renderCartItems();
  };

  // Thêm các phần tử vào div.product
  productDiv.appendChild(productName);
  productDiv.appendChild(productSelect);
  productDiv.appendChild(variationSelect);
  productDiv.appendChild(productQuantity);
  productDiv.appendChild(addButton);

  // Thêm div.product vào container
  container.appendChild(productDiv);
});

// Render giỏ hàng
function renderCartItems() {
  // Xóa hết các cart item trên giao diện
  cartItems.innerHTML = "";

  // Tính tổng tiền
  let total = 0;
  cart.forEach((item) => {
    total += item.product.price * item.quantity;

    // Tạo cart item element
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    let cartItemName = document.createElement("div");
    cartItemName.className = "cart-item-name";
    cartItemName.innerText = item.product.name + " - " + item.variation.name;

    let cartItemQuantity = document.createElement("div");
    cartItemQuantity.className = "cart-item-quantity";
    cartItemQuantity.innerText = "x " + item.quantity;

    let cartItemPrice = document.createElement("div");
    cartItemPrice.className = "cart-item-price";
    cartItemPrice.innerText = item.product.price * item.quantity + "đ";

    let cartItemRemoveButton = document.createElement("button");
    cartItemRemoveButton.className = "cart-item-remove";
    cartItemRemoveButton.innerText = "X";
    cartItemRemoveButton.onclick = () => {
      // Xóa cart item
      cart = cart.filter(
        (cartItem) =>
          cartItem.product.id !== item.product.id ||
          cartItem.variation.id !== item.variation.id
      );

      // Cập nhật giỏ hàng trên giao diện
      renderCartItems();
    };

    // Thêm các phần tử cho cart item
    cartItem.appendChild(cartItemName);
    cartItem.appendChild(cartItemQuantity);
    cartItem.appendChild(cartItemPrice);
    cartItem.appendChild(cartItemRemoveButton);

    // Thêm cart item vào cart items
    cartItems.appendChild(cartItem);
  });

  // Tạo element hiển thị tổng tiền và nút thanh toán
  let cartTotal = document.createElement("p");
  cartTotal.innerText = "Tổng tiền: " + total + "đ";

  let cartCheckoutButton = document.createElement("button");
  cartCheckoutButton.className = "cart-checkout";
  cartCheckoutButton.innerText = "Thanh toán";
  cartCheckoutButton.onclick = () => {
    // Xóa giỏ hàng và cập nhật trên giao diện
    cart = [];
    renderCartItems();
  };

  // Thêm các phần tử vào giỏ hàng
  cartItems.appendChild(cartTotal);
  cartItems.appendChild(cartCheckoutButton);
}
