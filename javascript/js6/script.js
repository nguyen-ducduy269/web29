arr = [1, 2, 3, 4, 5];
function getElementGreate(arr, value) {
  return arr.filter(function (el) {
    return el > value;
  });
}

let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 3000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
products.forEach(function (product) {
  console.log(
    product.name +
      "-" +
      product.price +
      "-" +
      product.brand +
      "-" +
      product.count
  );
});
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// 4. Tìm các sản phẩm có giá > 20000000

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
const findPro = products.filter(function (pr) {
  return pr.name.toLowerCase().includes("pro");
});
console.log(findPro);
//in danh sách sản phẩm lên trình duyệt web
