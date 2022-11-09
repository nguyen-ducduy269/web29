const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const crl = document.querySelectorAll(".circle");

let current = 1;

prev.addEventListener("click", () => {
  current--; // khi xảy ra sự kiện click giá trị của current sẽ giảm đi 1
  if (current < 1) current = 1;
  updateValue();
});

next.addEventListener("click", () => {
  current++; // khi xảy ra sự kiện click giá trị của current sẽ tăng lên 1
  if (current > crl.length) current = crl.length;
  updateValue();
});

function updateValue() {
  crl.forEach((circle, index) => {
    // gọi 1 hàm cho circle và index
    if (current > index) {
      circle.classList.add("active"); // khi current lớn hơn index hiện tại trả về class circle tương ứng 1 class active
    } else {
      circle.classList.remove("active"); // khi current nhỏ hơn index hiện tại xóa đi class active tương ứng 1 class circle
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width = ((actives.length - 1) / (crl.length - 1)) * 100 + "%"; // chỉnh sửa thanh tiến trình - chiều dài thanh tiến trình = độ dài tính đến circle hiện tại

  if (current === 1) {
    prev.disabled = true; // nếu current ở vị trí 1 thì vô hiệu hóa nút prev
  } else if (current === crl.length) {
    next.disabled = true; // nếu current ở vị trí lớn nhất thì vô hiệu hóa nút next
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
