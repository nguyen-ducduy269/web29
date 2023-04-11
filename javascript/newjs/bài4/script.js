/**
 * DOM là gì
 * DOM là 1 phần tử HTML, cũng là 1 object
 * document.querySelector
 * document.querySelectorAll
 * chủ thể được chọn.hành động chọn(phần tử bên trong chủ thể)
 * let main = document.querySelector("main")
 * querySelector sẽ chọn phần tử đầu tiên dược tìm thấy trong cây DOM
 * querySelectorAll sẽ chọn tất cả phần tử cần tìm có tagname tương ứng
 */

let template = document.querySelector("main");
let button = document.querySelector("button");
console.log("template", template);
console.log("button", button);

let buttons = template.querySelectorAll("button");
console.log(buttons);

// dùng for of để duyệt qua mảng và nếu thỏa mãn điều kiện
for (let button of buttons) {
  console.log(button);
}

// forEach dùng tương đương với 1 hàm for
buttons.forEach((button) => {
  console.log(button);
});

// kiểu sự kiện: click, mouseenter, mouseleave, keyup, keydown, keypress, resize, scroll,...
// function có tác dụng xử lý sự kiện
// button.addEventListener("click", (e) => {
//   console.log("Hello");

//   e chính là phần tử dùng để lắng nghe sự kiện
//   e.target - khi chỉ có button mà không chứa j bên trong
//   e.currentTarget - trả về giá trị là tagName button nếu bên trong button chứa 1 hoặc nhiều thẻ khác
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// theem css class cho DOM
// .classList
// .classList.add() - thêm
// .clasList.remove() - Xóa
// .classList.contains() - chứa hoặc gồm
// .classList.toggle() - công tắc chuyển trạng thái

/**
 * className - thay thế toàn bộ class của DOM
 * p.className = "p div"
 */

// ấn vào button thẻ p hiện ra, nếu p đang hiện thì button là Ẩn còn nếu đang ẩn thì button là Hiện
const p = template.querySelector("p");
console.log(p);
button.addEventListener("click", (e) => {
  // set p ở trạng thái có class active
  p.classList.toggle("active");
  if (p.classList.contains("active")) {
    // nếu thẻ p đang hiện thì thêm class active để làm thẻ p biến mất và thay đổi textContent của button
    e.target.textContent = "Ẩn";
  } else if (!p.classList.contains("active")) {
    // nếu thẻ p đang ẩn thì xóa class active để làm thẻ p hiện và thay đổi textContent của button
    e.target.textContent = "Hiện";
  }
});
