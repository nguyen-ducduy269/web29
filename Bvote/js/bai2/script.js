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
  document.body.appendChild(btnReplaceItem);
  document.body.appendChild(btnIndexItem);
  document.body.appendChild(btnLowerItem);
  document.body.appendChild(btnUpperItem);
  show(list);
}

const demo = document.getElementById("demo");
let list = "5 2 Duy 3 mộT 9 ";
let value = "";

function show(string) {
  demo.innerHTML = string;
}

const btnFootageItem = document.createElement("button");
btnFootageItem.innerHTML = "Chiều dài chuỗi mới nhập";
btnFootageItem.classList.add("btn");
btnFootageItem.setAttribute("onclick", "footFunc()");

const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Nhập";
btnAddItem.classList.add("btn");
btnAddItem.setAttribute("onclick", "addFunc()");

const btnDeleteItem = document.createElement("button");
btnDeleteItem.innerHTML = "Xóa chuỗi";
btnDeleteItem.classList.add("btn");
btnDeleteItem.setAttribute("onclick", "delFunc()");

const btnReplaceItem = document.createElement("button");
btnReplaceItem.innerHTML = "Thay thế chuỗi mới";
btnReplaceItem.classList.add("btn");
btnReplaceItem.setAttribute("onclick", "repFunc()");

const btnIndexItem = document.createElement("button");
btnIndexItem.innerHTML = "Vị trí của chuỗi bất kì";
btnIndexItem.classList.add("btn");
btnIndexItem.setAttribute("onclick", "indexFunc()");

const btnLowerItem = document.createElement("button");
btnLowerItem.innerHTML = "Viết thường";
btnLowerItem.classList.add("btn");
btnLowerItem.setAttribute("onclick", "lowerFunc()");

const btnUpperItem = document.createElement("button");
btnUpperItem.innerHTML = "Viết hoa";
btnUpperItem.classList.add("btn");
btnUpperItem.setAttribute("onclick", "upperFunc()");

// Chiều dài chuỗi mới nhập
function footFunc() {
  // tác chuỗi thành 1 mảng bằng split
  // dùng pop để lấy ra phần tử cuối cùng của mảng
  const lastItem = list.split(" ").pop();
  console.log("lastItem", lastItem);
  show("Độ dài của phần tử mới nhập là: " + lastItem.length);
}

// Thêm
function addFunc() {
  value = prompt("Nhập vào chuỗi: ");
  if (value === null || value === "" || value.length < 10) {
    demo.innerHTML = "Giá trị nhập vào không hợp lệ";
  } else {
    // thực hiện phương thức thêm vào như 1 mảng
    list = list.concat(value, " ");
    show(list);
  }
}

// Xóa
function delFunc() {
  value = prompt("Nhập vào chuỗi cần xóa: ");
  // xóa đi vị trị của phần tử
  list = list.replace(value, "");
  show(list);
}

// Thay thế
function repFunc() {
  value = prompt("Nhập vào chuỗi cần thay thế: ");
  const newValue = prompt("Nhập vào chuỗi mới: ");
  list = list.replace(value, newValue);
  show(list);
}

// Vị trí
function indexFunc() {
  value = prompt("Nhập vào chuỗi: ");
  const valueIndex = list.search(value);
  show("Vị trí của chuỗi vừa nhập là: " + valueIndex);
}

// viết thường
function lowerFunc() {
  const newList = list.toLowerCase();
  list = newList;
  show(newList);
}

// viết hoa
function upperFunc() {
  const newList = list.toUpperCase();
  list = newList;
  show(newList);
}
