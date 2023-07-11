var product = {
  ten: "",
  price: "",
  quantity: "",
};
const products = [
  {
    ten: "sách",
    price: "100",
  },
  {
    ten: "phim",
    price: "200",
  },
  {
    ten: "ảnh",
    price: "300",
  },
  {
    ten: "game",
    price: "400",
  },
];

let cartList = products.map((v) => {
  return `
              <div class="items" >
                  <button class="addCart" > +</button>
                  <button class="minusCart" > -</button> 
                  <p class="name">${v.ten}</p>
                  <p>Giá :<span class="price">${v.price}</span> </p>
              </div>
          `;
});
$(".product").html(cartList);
var myCart = [];
function change(soluong, curr, tensp, giasp, x) {
  let chuoitemp = x;
  for (let i = 0; i < myCart.length; i++) {
    if (myCart[i].ten == tensp) {
      if (chuoitemp === "+") {
        soluong = myCart[i].quantity + 1;
      } else if (chuoitemp === "-") {
        soluong = myCart[i].quantity - 1;
      }
      myCart[i].quantity = soluong;
      if (soluong == 0) {
        myCart.splice(i, 1);
      }
      break;
    }
  }
  if (soluong == 1 && chuoitemp === "+") {
    product = {
      ten: tensp,
      price: giasp,
      quantity: soluong,
    };
    myCart.push(product);
  }

  showCart();
  showTotal();
}
$(".product").on("click", ".addCart", function () {
  var soluong = 1;
  var curr = $(this).parent();
  var tensp = curr.children(".name").eq(0).text();
  var giasp = curr.children().children(".price").eq(0).text();
  change(soluong, curr, tensp, giasp, "+");
});
$(".product").on("click", ".minusCart", function () {
  var soluong = 1;
  var curr = $(this).parent();
  var tensp = curr.children(".name").eq(0).text();
  var giasp = curr.children().children(".price").eq(0).text();
  change(soluong, curr, tensp, giasp, "-");
});
function showCart() {
  var str = "";
  for (let i = 0; i < myCart.length; i++) {
    str +=
      "<tr><td>" +
      myCart[i].ten +
      "</td>" +
      "<td>" +
      myCart[i].price +
      "</td>" +
      "<td>" +
      myCart[i].quantity +
      "</td>" +
      "<td><button class='deltcart'> xóa</button></td></tr>";
  }
  $("#myCart").html(str);
}
$("#myCart").on("click", ".deltcart", function () {
  for (let i = 0; i < myCart.length; i++) {
    myCart.splice(i, 1);
    break;
  }
  /*         $(this).parents("tr").remove();
          myCart = []; */
  showCart();
  showTotal();
});
function showTotal() {
  var total = 0;
  for (let i = 0; i < myCart.length; i++) {
    total += parseFloat(myCart[i].price) * parseFloat(myCart[i].quantity);
  }
  $("#total").text(total);
}
