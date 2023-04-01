// Bài 2: (tạo thẻ thông qua innerHTML,k tạo trực tiếp) viết 1 chương trình nhập vào 1 chuỗi tùy ý có độ dài lớn hơn 10 kí tự:
// a)	Hiển thị chuỗi bằng thẻ HTML.
// b)	Có nút hiển thị độ dài chuỗi đã nhập
// c)	Có các nút xóa, thêm, thay thế 1 chuỗi,xác định vị trí của 1 chuổi bất kì trong chuỗi đã nhập .(tất cả yêu cầu thông qua câu lệnh promt),
// d)	Nút chuyển chuỗi thành in hoa, chuyển chuỗi thành in thường.
// a)	Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.

function bai2() {
  document.body.appendChild(btnFootageItem);
  document.body.appendChild(btnAddItem);
  document.body.appendChild(btnDeleteItem);
  show(list);
}

const demo = document.getElementById("demo");
let list = "5 2 6 3 1 9 ";
let value = "";

function show(string) {
  demo.innerHTML = string;
}

const btnFootageItem = document.createElement("button");
btnFootageItem.innerHTML = "Chiều dài chuỗi mới nhập";
btnFootageItem.classList.add("btn");
btnFootageItem.setAttribute("onclick", "footFunc()");

function footFunc() {
  // tác chuỗi thành 1 mảng bằng split
  // dùng pop để lấy ra phần tử cuối cùng của mảng
  const lastItem = list.split(" ").pop();
  console.log("lastItem", lastItem);
  show("Độ dài của phần tử mới nhập là: " + lastItem.length);
}

// Thêm
const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Nhập";
btnAddItem.classList.add("btn");
btnAddItem.setAttribute("onclick", "addFunc()");

function addFunc() {
  value = prompt("Nhập vào chuỗi: ");
  if (value === null || value === "" || value.length < 10) {
    demo.innerHTML = "Giá trị nhập vào không hợp lệ";
  } else {
    // thực hiện phương thức thêm vào như 1 mảng
    list = list.concat(value);
    show(list);
  }
}

// Xóa
const btnDeleteItem = document.createElement("button");
btnDeleteItem.innerHTML = "Xóa phần tử";
btnDeleteItem.classList.add("btn");
btnDeleteItem.setAttribute("onclick", "delFunc()");

function delFunc() {
  value = prompt("Nhập vào chuỗi cần xóa: ");
  // tìm vị trí của phần tử muốn xóa
  let deleteValueIndex = list.search(value);
  console.log("deleteValueIndex", deleteValueIndex);

  // biến chuỗi thành 1 mảng
  const newList = list.split("");
  // xóa đi vị trị của phần tử
  newList.split(value);
  // gộp các phần tử còn lại để tao thành chuỗi mới
  list = newList.join("");
  // hiển thị chuỗi mới
  show(list);
}
