const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // bắt sự kiện click vào ảnh sẽ thực hiện hàm removeActive để xóa class avtice của ảnh đang hiển thị sau đó thêm class active vào div có ảnh vừa xảy ra sự kiện click
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active"); // gọi 1 hàm cho panel sau đó xóa đi class active của div đó trả về trạng thái chưa active
  });
}
