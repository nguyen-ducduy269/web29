const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active"); // bắt sự kiện click để chuyển đổi giữa hide và show cho phần tử chịu ảnh hưởng bởi event click, trả về class active cho class search mở rộng khu tìm kiếm
  input.focus(); // chọn phần tử cần tập trung vào
});
