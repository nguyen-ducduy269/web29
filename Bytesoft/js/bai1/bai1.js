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

let list = [4, 7, 2, 1, 6, 9, 5, 3, 8];
const demo = document.getElementById("demo");
let value;
console.log("listxxxx", list);

// tạo nút
const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Add Item";
btnAddItem.classList.add("btn-item");
btnAddItem.addEventListener("click", () => addFn());

const btnEditItem = document.createElement("button");
btnEditItem.innerHTML = "Edit Item";
btnEditItem.classList.add("btn-item");
btnEditItem.addEventListener("click", () => editFn());

const btnDeleteItem = document.createElement("button");
btnDeleteItem.innerHTML = "Delete Item";
btnDeleteItem.classList.add("btn-item");
btnDeleteItem.addEventListener("click", () => deleteFn(list));

const btnDbItem = document.createElement("button");
btnDbItem.innerHTML = "Double Item";
btnDbItem.classList.add("btn-item");
btnDbItem.addEventListener("click", () => (list = dbFn(list)));

const increaseItem = document.createElement("button");
increaseItem.innerHTML = "Increase Item";
increaseItem.classList.add("btn-item");
increaseItem.addEventListener("click", () => (list = incFn(list)));

const decreaseItem = document.createElement("button");
decreaseItem.innerHTML = "Decrease Item";
decreaseItem.classList.add("btn-item");
decreaseItem.addEventListener("click", () => (list = decFn(list)));
//hiện
function show(array) {
  demo.innerHTML = array.join(" ");
}

// Thêm
function addFn() {
  let value = prompt("Nhập giá trị: ");
  if (value === null || value === "" || value.length >= 10) {
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
function editFn() {
  const fixValue = prompt("Nhập vị trí muốn sửa: ");
  const newValue = prompt("Nhập giá trị muốn sửa: ");
  list.splice(fixValue, 1, newValue);
  show(list);
}

// Xóa
function deleteFn() {
  // lựa chọn vị trí của giá trị muốn xóa
  const value = prompt("Nhập giá trị muốn xóa: ");
  // xóa phần tử có index là value
  list.splice(value, 1);
  show(list);
}

// Nhân đôi
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
function incFn(list) {
  if (!isSorted(list)) {
    // nếu mảng chưa được sắp xếp thì thực hiện sắp xếp lại
    list = list.sort();
  }
  show(list);
  // trả lại mảng sau khi sắp xếp
  return list;
}

// hàm sắp xếp thứ tự từ nhỏ đến lớn
function isSorted(array) {
  // kiểm tra xem mảng đã được sắp xếp chưa bằng phương thức every
  return array.every((item, index) => {
    // nếu index bằng 0 (điều kiện trong mệnh đề index === 0) thì sẽ trả về true, hoặc nếu item lớn hơn hoặc bằng phần tử trước đó trong mảng (điều kiện trong mệnh đề item >= arr[index - 1]) thì cũng trả về true.
    return index === 0 || item >= array[index - 1];
  });
}

// sắp xếp theo chiều giảm dần
function decFn(list) {
  list = list.sort().reverse();
  show(list);
  return list;
}
