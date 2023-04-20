// Bài 4: tạo 1 máy tính cầm tay cơ bản với các chức năng:cộng, trừ, nhân, chia,chia lấy phần dư, bình phương, căn bậc 2 với yêu cầu:
// a)	Giao diện hiển thị máy tính đẹp, bắt mắt.
// b)	Máy tính hiển thị hết dãy số nhập cả các phép tính và hiển thị kết quả sau khi nhấn dấu (=).

function bai4() {}

const demo = document.getElementById("demo");
function show(array) {
  demo.innerHTML = array.join(" ");
}

const calcu = document.querySelector(".calculator");
const keys = calcu.querySelector(".calculator-button");
const display = calcu.querySelector(".display");
console.log("keys", keys);

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // e.target = keys
    const key = e.target;
    // đặt tên cho những div trong div calculator-button có data-action
    const action = key.dataset.action;
    // nút đã được bấm
    const keyContent = key.textContent;
    // nút đã xuất hiện
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === "0") {
        // nếu ấn nút có giá trị khác 0 thì thay 0 bằng giá trị đó
        display.textContent = keyContent;
      } else {
        // nếu đã có giá trị khác 0 thì thêm giá trị mới vào đằng sau
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      display.textContent = keyContent;
    }
    if (action === "decimal") {
      // nếu ấn dấu . thì sẽ thêm ngay sau và sau đó thêm các số khác bth
      // nếu chưa có dấu . thì thêm
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      }
    }
    if (action === "clear") {
      // nếu ấn dấu AC thì xóa hết nội dung
      display.textContent = "0";
    }
    if (action === "calculate") {
      console.log("calculate key");
    }
  }
});
