// Bài 4: tạo 1 máy tính cầm tay cơ bản với các chức năng:cộng, trừ, nhân, chia,chia lấy phần dư, bình phương, căn bậc 2 với yêu cầu:
// a)	Giao diện hiển thị máy tính đẹp, bắt mắt.
// b)	Máy tính hiển thị hết dãy số nhập cả các phép tính và hiển thị kết quả sau khi nhấn dấu (=).

const calculation = document.querySelector(".calculation"); // nơi hiện đầy đủ tất cả phép tính
const result = document.querySelector(".result"); // nơi hiện kết quả cuối cùng
const remainder = document.getElementById("remainder"); // chia lấy dư
const square = document.getElementById("square"); // bình phương
const squareRoot = document.getElementById("square-root"); // căn bậc 2
const AC = document.getElementById("AC"); // xóa toàn bộ phép tính
const openBtn = document.getElementById("("); // mở ngoặc
const closeBtn = document.getElementById(")"); // đóng ngoặc
const deleteBtn = document.getElementById("delete"); // xóa từng phần tử từ phần tử cuối cùng của phép tính
const switchBtn = document.getElementById("switch-btn"); // chuyển đổi giữa số dương và số âm
const dot = document.getElementById("."); // số thập phân, mỗi số chỉ được có 1 dấu .
const divide = document.getElementById("divide"); //phép chia
const multiplication = document.getElementById("multiplication"); // phép nhân
const minus = document.getElementById("minus"); // phép trừ
const plus = document.getElementById("plus"); // phép cộng
const equal = document.querySelector(".equal"); // ra kết quả cuối cùng tại result
const number = document.querySelectorAll(".value"); // các số của máy tính

let array = [];
AC.addEventListener("click", () => {
  calculation.innerHTML = "";
  result.innerHTML = "0";
  array.length = 0;
  window.location.reload();
});

deleteBtn.addEventListener("click", () => {
  let expression = calculation.innerHTML;
  console.log("expression", typeof expression);
  expression = expression.substring(0, expression.length - 1);
  calculation.innerHTML = expression;
});

switchBtn.addEventListener("click", () => {
  if (array[0] === "-") {
    array.shift();
  } else {
    array.unshift("-");
  }
  calculation.innerHTML = array.join("");
});

// eval - đánh giá và thực thi giá trị của biểu thức được truyền vào dưới dạng chuỗi
equal.addEventListener("click", () => {
  const expression = array.join("");
  console.log("expression", expression);
  const evalResult = eval(expression);
  result.innerHTML = evalResult;

  if (expression === "") {
    result.innerHTML = "Ans = 0";
  }
});

divide.addEventListener("click", () => {
  calculation.innerHTML += "/";
  array.push("/");
});

multiplication.addEventListener("click", () => {
  calculation.innerHTML += "*";
  array.push("*");
});

minus.addEventListener("click", () => {
  calculation.innerHTML += "-";
  array.push("-");
});

plus.addEventListener("click", () => {
  calculation.innerHTML += "+";
  array.push("+");
});

remainder.addEventListener("click", () => {
  calculation.innerHTML += "%";
  array.push("%");
});

square.addEventListener("click", () => {
  const expression = calculation.innerHTML;
  if (expression !== "") {
    const evalResult = eval(expression);
    const squareResult = Math.pow(evalResult, 2);
    calculation.innerHTML = "";
    result.innerHTML = squareResult;
  }
});

squareRoot.addEventListener("click", () => {
  const expression = calculation.innerHTML;
  if (expression !== "") {
    const evalResult = eval(expression);
    const squareRootResult = Math.sqrt(evalResult);
    calculation.innerHTML = "";
    result.innerHTML = squareRootResult;
  }
});

openBtn.addEventListener("click", () => {
  calculation.innerHTML += "(";
  array.push("(");
});

closeBtn.addEventListener("click", () => {
  calculation.innerHTML += ")";
  array.push(")");
});

dot.addEventListener("click", () => {
  calculation.innerHTML += ".";
  array.push(".");
});

// thêm số
const handleNumberClick = (number) => {
  calculation.innerHTML += number;
};

number.forEach((button) => {
  button.addEventListener("click", () => {
    handleNumberClick(button.innerHTML);
  });
});

equal.addEventListener("click", () => {
  const otherExpression = calculation.innerHTML;
  if (otherExpression !== "") {
    try {
      const evalResult = eval(otherExpression);
      result.innerHTML = evalResult;
    } catch (error) {
      result.innerHTML = "Error";
    }
  }
  calculation.innerHTML = "";
});
