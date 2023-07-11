// Bỏ hàng vào giỏ

const data = [
  {
    id: 1,
    name: "Bàn phím",
    quantity: 1,
    price: "100.059",
  },
  {
    id: 2,
    name: "Chuột",
    quantity: 1,
    price: "70.000",
  },
  {
    id: 3,
    name: "Lon Coca",
    quantity: 1,
    price: "10.000",
  },
];

let listItem = data.map((item) => {
  return `
  <div class="product">
    <div class="name">${item.name}</div>
    <div class="change">
      <button class="divide">-</button>
      <div class="quantity">${item.quantity}</div>
      <button class="plus">+</button>
    </div>
    <div class="price"><span>${item.price}</span>đ</div>

    <button class="add-to-cart">Add To Cart</button>
  </div>
  `;
});
$(".products").html(listItem);

$(document).ready(function () {
  // $(".product").on("click", ".plus", function () {
  //   let count = 1;
  //   const quantities = $(this).parent().parent().find(".quantity").html();
  //   const nameSp = $(this).parent().parent().find(".name").html();
  //   const priceSp = $(this).parent().parent().find("span");

  //   change(count, nameSp, priceSp, "+");
  //   quantities.text(count);
  // });

  // function change(count, nameSp, priceSp, x) {
  //   let chuoitemp = x;
  //   for (let i = 0; i < data.length; i++) {
  //     console.log("i", data[1].quantity);
  //     if (data[i].name == nameSp) {
  //       if (chuoitemp === "+") {
  //         count = data[i].quantity + 1;
  //       } else if (chuoitemp === "-") {
  //         count = data[i].quantity - 1;
  //       }
  //       data[i].quantity = count;
  //       if (count == 0) {
  //         myCart.splice(i, 1);
  //       }
  //       break;
  //     }
  //   }
  // }

  let count = 1;
  $(".plus").click(function () {
    const quantity = $(this).parent().parent().find(".quantity");
    const nameSp = $(this).parent().parent().find(".name").html();
    const priceSp = $(this).parent().parent().find("span");

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === nameSp) {
        data[i].quantity = data[i].quantity + 1;
        quantity.text(data[i].quantity);
      } else {
        data[i].quantity = quantity.html();
        console.log("quantity", quantity.html());
      }
    }
  });
  // $(".plus").click(function () {
  //   for (let i = 0; i < $(".product").length; i++) {
  //     const quantity = $(".product")[i].parent().parent().find(".quantity");
  //     console.log("before click", quantity);
  //     count++;
  //     quantity.text(count);
  //     console.log("after click", quantity.html());
  //   }
  // });

  // $(".divide").click(function () {
  //   const quantity = $(this).parent().parent().find(".quantity");
  //   count = parseInt(count);

  //   if (count > 1) {
  //     count--;
  //     quantity.text(count);
  //   }
  // });
});
