// Bài 4: tạo 1 máy tính cầm tay cơ bản với các chức năng:cộng, trừ, nhân, chia,chia lấy phần dư, bình phương, căn bậc 2 với yêu cầu:
// a)	Giao diện hiển thị máy tính đẹp, bắt mắt.
// b)	Máy tính hiển thị hết dãy số nhập cả các phép tính và hiển thị kết quả sau khi nhấn dấu (=).
const calculation = document.querySelector(".calculation");
const result = document.querySelector(".result");
const remainder = document.getElementById("remainder");
const square = document.getElementById("square");
const squareRoot = document.getElementById("square-root");
const AC = document.getElementById("AC");
const open = document.getElementById("(");
const close = document.getElementById(")");
const deleteBtn = document.getElementById("delete");
const switchBtn = document.getElementById("switch-btn");
const dot = document.getElementById(".");
const divide = document.getElementById("divide");
const multiplication = document.getElementById("multiplication");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equal = document.querySelector(".equal");

// equal.addEventListener("click", () => {
//   const btnValue = document.querySelectorAll(".value");
//   btnValue.forEach((item) => {
//     console.log("item", item.innerHTML);
//   });

//   console.log("calculation", calculation.innerHTML);
//   console.log("result", result.innerHTML);
//   console.log("remainder", remainder.innerHTML);
//   console.log("square", square.innerHTML);
//   console.log("squareRoot", squareRoot.innerHTML);
//   console.log("AC", AC.innerHTML);
//   console.log("open", open.innerHTML);
//   console.log("close", close.innerHTML);
//   console.log("deleteBtn", deleteBtn.innerHTML);
//   console.log("switchBtn", switchBtn.innerHTML);
//   console.log("dot", dot.innerHTML);
//   console.log("divide", divide.innerHTML);
//   console.log("multiplication", multiplication.innerHTML);
//   console.log("minus", minus.innerHTML);
//   console.log("plus", plus.innerHTML);
//   console.log("equal", equal.innerHTML);
// });

let array = [];
function numberInput() {
  const btnValue = document.querySelectorAll(".value");
  btnValue.forEach((item) => {
    item.addEventListener("click", () => {
      array.push(item.innerHTML);
      calculation.innerHTML = array.join("");
    });
  });

  dot.addEventListener("click", () => {
    if (array.length == 0) {
      array.push(dot.innerHTML);
      calculation.innerHTML = "0" + array.join("");
      btnValue.forEach((item) => {
        item.addEventListener("click", () => {
          calculation.innerHTML = "0" + array.join("");
        });
      });
    } else if (array.length == 1) {
      array.push(dot.innerHTML);
      calculation.innerHTML = array.join("");
    } else if (array.length >= 1) {
      return false;
    }
  });
}
numberInput();

equal.addEventListener("click", () => {
  console.log(array);
  const numberValue = String(array);
  console.log("numberValue", numberValue);
});
