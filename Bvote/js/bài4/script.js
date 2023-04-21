// Bài 4: tạo 1 máy tính cầm tay cơ bản với các chức năng:cộng, trừ, nhân, chia,chia lấy phần dư, bình phương, căn bậc 2 với yêu cầu:
// a)	Giao diện hiển thị máy tính đẹp, bắt mắt.
// b)	Máy tính hiển thị hết dãy số nhập cả các phép tính và hiển thị kết quả sau khi nhấn dấu (=).

const demo = document.getElementById("demo");
const calcu = document.querySelector(".calculator");
const keys = calcu.querySelector(".calculator-button");
const display = calcu.querySelector(".display");

keys.addEventListener("click", (e) => {
  // khai báo 2 biến loai nút và kiểu nút trước đó
  let previousKeyType = calcu.dataset.previousKeyType;
  const previousKey = calcu.dataset.previousKey;
  console.log(calcu.dataset, previousKeyType);

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
      // nếu giá trị ở display là 0 hoặc operator thì sẽ replace nó bằng number sau khi người dùng click vào
      console.log("displaynum", displayedNum);
      console.log(previousKey, previousKeyType);
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        // nếu ấn nút có giá trị khác 0 thì thay 0 bằng giá trị đó
        display.textContent = keyContent;
        previousKeyType = undefined;
      } else {
        console.log(previousKey);
        // nếu đã có giá trị khác 0 thì thêm giá trị mới vào đằng sau
        display.textContent = displayedNum + keyContent;
      }

      calcu.dataset.previousKey = "number";
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calcu.dataset.firstValue;
      const operator = calcu.dataset.operator;
      const secondValue = displayedNum;

      // nếu như đã tồn tại giá trị thứ nhất và phương thức thì trả về kết quả phép tính luôn
      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;

        // Update calculated value as firstValue
        calcu.dataset.firstValue = calcValue;
      } else {
        // If there are no calculations, set displayedNum as the firstValue
        calcu.dataset.firstValue = displayedNum;
      }

      // sau khi ấn các pthuc sẽ thêm class isPressed
      key.classList.add("isPressed");
      // sau khi các phương thức được ấn, class isPressed đã đc thêm
      // ta gán phương thức vừa nhập với previousKeyType để biết phím lúc trc là pthuc
      calcu.dataset.previousKeyType = "operator";
      // lưu giá trị đầu tiên vào trong thuộc tính của nút operator
      calcu.dataset.firstValue = displayedNum;
      calcu.dataset.operator = action;
    }

    if (action === "decimal") {
      // nếu ấn dấu . thì sẽ thêm ngay sau và sau đó thêm các số khác bth
      // nếu chưa có dấu . thì thêm
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }

      calcu.dataset.previousKey = "decimal";
    }

    if (action === "clear") {
      // nếu ấn dấu AC thì xóa hết nội dung
      if (key.textContent === "AC") {
        calcu.dataset.firstValue = "";
        calcu.dataset.modValue = "";
        calcu.dataset.operator = "";
        calcu.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }

      display.textContent = 0;
      calcu.dataset.previousKeyType = "clear";
    }

    if (action === "calculate") {
      // giá trị thức 2 được nhập
      // lưu giá trị số đầu được nhập vào thuộc tính của phương thức
      const firstValue = calcu.dataset.firstValue;
      const operator = calcu.dataset.operator;
      const secondValue = displayedNum;

      // khi tồn tại giá trị đầu thì thực hiện phép tính
      // nếu trước đó là calculate thì giá trị nhập tiếp theo là giá trị đầu
      if (firstValue) {
        if (previousKey === "calculate") {
          firstValue = displayedNum;
          secondValue = calcu.dataset.modValue;
        }
        display.textContent = calculate(firstValue, operator, secondValue);
      }

      calcu.dataset.modValue = secondValue;
      calcu.dataset.previousKeyType = "calculate";
    }

    // sau khi ấn các pthuc thì hiện lại các số
    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("isPressed")
    );
  }
});

function calculate(params1, operator, params2) {
  let result = "";

  // dùng parseFloat để chuyển giá trị vừa nhập về dạng number
  if (operator === "add")
    return (result = parseFloat(params1) + parseFloat(params2));
  if (operator === "subtract")
    return (result = parseFloat(params1) - parseFloat(params2));
  if (operator === "multiply")
    return (result = parseFloat(params1) * parseFloat(params2));
  if (operator === "divide")
    return (result = parseFloat(params1) / parseFloat(params2));

  return result;
}
