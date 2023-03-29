// Bài 2: (tạo thẻ thông qua innerHTML,k tạo trực tiếp) viết 1 chương trình nhập vào 1 chuỗi tùy ý có độ dài lớn hơn 10 kí tự:
// a)	Hiển thị chuỗi bằng thẻ HTML.
// b)	Có nút hiển thị độ dài chuỗi đã nhập
// c)	Có các nút xóa, thêm, thay thế 1 chuỗi,xác định vị trí của 1 chuổi bất kì trong chuỗi đã nhập .(tất cả yêu cầu thông qua câu lệnh promt),
// d)	Nút chuyển chuỗi thành in hoa, chuyển chuỗi thành in thường.
// a)	Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.

function bai2() {
  document.body.appendChild(btnAddItem);
  document.body.appendChild(btnFootageItem);
  show(list);
}

const demo = document.getElementById("demo");
const list = "5, 2, 6, 3, 1, 9";
// chuyển từ dạng chuỗi về dạng mảng
const newList = list.split(", ");
console.log("newList", newList);
let value;

function show(string) {
  // thực hiện ghép chuỗi
  demo.innerHTML = string.concat(" ");
}

const btnAddItem = document.createElement("button");
btnAddItem.innerHTML = "Nhập";
btnAddItem.classList.add("btn");
btnAddItem.setAttribute("onclick", "addFunc()");

const btnFootageItem = document.createElement("button");
btnFootageItem.innerHTML = "Chiều dài chuỗi mới nhập";
btnFootageItem.classList.add("btn");
btnFootageItem.setAttribute("onclick", "footFunc()");

function addFunc() {
  const value = prompt("Nhập vào chuỗi: ");
  if (value === null || value === "" || value.length < 10) {
    demo.innerHTML = "Giá trị nhập vào không hợp lệ";
  } else {
    // thực hiện phương thức thêm vào như 1 mảng
    newList.push(value);
    show(newList);
  }
}

function footFunc(newList) {
  for (let i = 0; i > newList.length; i++) {
    newList.length += i;
    demo.innerHTML = newList.length;
  }
  return "Độ dài của chuỗi mới nhập là" + newList.length;
}
