const container = document.querySelector(".container");
const close = document.querySelector("#close");
const open = document.querySelector("#open");

open.addEventListener("click", () => {
  container.classList.add("show-nav"); //bắt sự kiện click, khi click vào biểu tượng sẽ trả về cho class container 1 class mới show-nav
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav"); // bắt sự kiện click lần nữa, khi được click lần nữa sẽ xóa đi class show-nav trong class container
});
