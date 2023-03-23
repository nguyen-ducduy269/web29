// Bài 1: (tạo thẻ thông qua innerHTML, k tạo trực tiếp) viết 1 chương trình nhập vào 1 mảng tùy ý có độ dài nhỏ hơn 10 phần tử(thông qua button nhập chuỗi):
// a) Hiển thị mảng bằng thẻ HTML.
// b) Có các nút nhân đôi, thêm, sửa, xóa 1 phần tử mảng thông qua các nút button trên màn hình
// c) nút sắp xếp các phần tử trong mảng theo chiều tăng dần, giảm dần.
// d) Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.

function bai1() {
  document.body.appendChild(btnAddItem);
  document.body.appendChild(btnEditItem);
  document.body.appendChild(btnDeleteItem);
  document.body.appendChild(btnDbItem);
  // display(arr);
}
// arr = ["a", "b", "c"];
// console.log(arr);
// console.log(String(arr));
// const display = (arr) => {
//   document.getElementById("demo").innerHTML = String(arr);
// };

const list = [];
const ul = document.createElement("ul");
const demo = document.getElementById("demo").appendChild(ul);
// Thêm
const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Add Item";
btnAddItem.classList.add("btn-item");
btnAddItem.addEventListener("click", () => addFn());

function addFn() {
  const addItem = document.createAttribute("nhap");
  addItem.value = value = prompt("Nhập họ tên của bạn: ");
  btnAddItem.setAttributeNode(addItem);
  if (value === null || value === "") {
    demo.innerHTML = "Giá trị nhập không hợp lệ";
  } else {
    list.push(value);
    const li = document.createElement("li");
    li.innerText = value;
    ul.append(li);
  }
}

// Sửa
const btnEditItem = document.createElement("button");
btnEditItem.innerHTML = "Edit Item";
btnEditItem.classList.add("btn-item");

// Xóa
const btnDeleteItem = document.createElement("button");
btnDeleteItem.innerHTML = "Delete Item";
btnDeleteItem.classList.add("btn-item");
btnDeleteItem.addEventListener("click", () => deleteFn());

function deleteFn() {
  const li = document.querySelector("li");
  ul.removeChild(li);
  list.splice(0, 1);
  console.log(list, list.splice(-1, 1));
}

// Nhân đôi
const btnDbItem = document.createElement("button");
btnDbItem.innerHTML = "Double Item";
btnDbItem.classList.add("btn-item");
btnDbItem.addEventListener("click", () => dbFn(list));

function dbFn(list) {
  const newList = [...list, ...list];
  list = newList;
  console.log(list);
  demo.innerHTML = newList.join("");
}
