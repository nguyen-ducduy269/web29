// Bài 1: (tạo thẻ thông qua innerHTML, k tạo trực tiếp) viết 1 chương trình nhập vào 1 mảng tùy ý có độ dài nhỏ hơn 10 phần tử(thông qua button nhập chuỗi):
// a) Hiển thị mảng bằng thẻ HTML.
// b) Có các nút nhân đôi, thêm, sửa, xóa 1 phần tử mảng thông qua các nút button trên màn hình
// c) nút sắp xếp các phần tử trong mảng theo chiều tăng dần, giảm dần.
// d) Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.

function bai1(list) {
  document.body.appendChild(btnAddItem);
  document.body.appendChild(btnEditItem);
  document.body.appendChild(btnDeleteItem);
  document.body.appendChild(btnDbItem);
  document.body.appendChild(increaseItem);
  document.body.appendChild(decreaseItem);
  show(list);
}

let list = [4, 7, 2, 1];
const demo = document.getElementById("demo");
let value;
console.log("listxxxx", list);
//hiện
function show(array) {
  demo.innerHTML = array.join(" ");
}

// Thêm
const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Add Item";
btnAddItem.classList.add("btn-item");
btnAddItem.addEventListener("click", () => addFn());

function addFn() {
  let value = prompt("Nhập giá trị: ");
  if (value === null || value === "") {
    demo.innerHTML = "Giá trị nhập không hợp lệ";
  } else {
    // thêm vào list giá trị value vừa nhập
    list.push(value);
    // ghi kết quả vào trong phần tử có id là demo
    demo.innerHTML = list;
    show(list);
  }
}

// Sửa
const btnEditItem = document.createElement("button");
btnEditItem.innerHTML = "Edit Item";
btnEditItem.classList.add("btn-item");
btnEditItem.addEventListener("click", () => editFn());

function editFn() {
  const fixValue = prompt("Nhập vị trí muốn sửa: ");
  const newValue = prompt("Nhập giá trị muốn sửa: ");
  list.splice(fixValue, 1, newValue);
  show(list);
}

// Xóa
const btnDeleteItem = document.createElement("button");
btnDeleteItem.innerHTML = "Delete Item";
btnDeleteItem.classList.add("btn-item");
btnDeleteItem.addEventListener("click", () => deleteFn(list));

function deleteFn(list) {
  // lựa chọn vị trí của giá trị muốn xóa
  const value = prompt("Nhập giá trị muốn xóa: ");
  // xóa phần tử có index là value
  list.splice(value, 1);
  show(list);
}

// Nhân đôi
const btnDbItem = document.createElement("button");
btnDbItem.innerHTML = "Double Item";
btnDbItem.classList.add("btn-item");
btnDbItem.addEventListener("click", () => (list = dbFn(list)));

function dbFn(list) {
  // nhân đôi list bằng cách tạo ra một mảng mới
  list = list.concat(list);
  console.log("listafter", list);
  // gọi hàm show với tham số `newList`
  show(list);
  // trả về `newList`
  return list;
}

// sắp xếp theo chiều tăng dần
const increaseItem = document.createElement("button");
increaseItem.innerHTML = "Increase Item";
increaseItem.classList.add("btn-item");
increaseItem.addEventListener("click", () => (list = incFn(list)));

function incFn(list) {
  list = list.sort();
  demo.innerHTML = list;
  show(list);
}

// sắp xếp theo chiều giảm dần
const decreaseItem = document.createElement("button");
decreaseItem.innerHTML = "Decrease Item";
decreaseItem.classList.add("btn-item");
decreaseItem.addEventListener("click", () => (list = decFn(list)));

function decFn(list) {
  list = list.sort().reverse();
  demo.innerHTML = list;
  show(list);
}
