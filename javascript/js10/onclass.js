// // const btn = document.querySelector("button");
// // btn.onclick = function () {
// //   console.log("Aaaaaaa");
// // };
// // khi bấm nút btn-down thì giảm giá trị counter-value đi 1, bấm btn-up thì tăng giá trị counter-value lên 1
// const btnDown = document.querySelector(".btn-down");
// const btnUP = document.querySelector(".btn-up");
// const value = document.querySelector(".counter-value");
// btnUP.onclick = function () {
//   value.innerText = Number(value.innerText) + 1;
// };
// btnDown.onclick = function () {
//   value.innerText -= 1;
// };
// function demo() {
//   console.log("chạy hàm demo");
// }
// // hay nhầm nhất
// btnDown.click = demo; // nếu có () hàm sẽ ko chạy
// // thống nhất sử dụng thuộc tính DOM

// function f1() {
//   console.log("chạy f1");
// }
// function f2() {
//   console.log("chạy f2");
// }
// // chỉ cho phép gán 1 hàm cho 1 sự kiện cụ thể
// btnUP.onclick = function () {
//   f1();
//   f2();
// };
// //eventType không có "on"
// // cấu trúc addEventListener
// // btnUP.addEventListener(eventType, handler, options);
// btnUP.addEventListener("click", f1); // click sẽ chạy hàm f1
// btnUP.addEventListener("click", f2);
// btnUP.removeEventListener("click", f2); // click sẽ xóa hàm f2

// const key = document.querySelector(".key");
// window.onkeypress = function (event) {
//   key.textContent = event.key.toLowerCase();
// };
// click - khi bấm chuột => gán cho button
// submit - khi gửi đi => gán cho form
// change - dữ liệu input thay đổi => input/ textarea/select
// keyup/keydown - khi ấn phím => window

// chú ý: tùy thuộc vào loại sự kiện thì eventObject sẽ có các thuộc tính khác nhau
// các thuộc tính thường dùng:
// e.target - phần tử kích hoạt sự kiện
// e.currentTarget - phần tử được gán trình xử lý
// e.target => input => có thể truy cập toàn bộ thuộc tính của input

const input = document.querySelector("input");
const p = document.querySelector("p");
input.addEventListener("input", function (event) {
  p.textContent = event.target.value;
  //input/textarea => value
  //select => selected
  //checkbox/radio => checked
});
