// Bài 1: (tạo thẻ thông qua innerHTML, k tạo trực tiếp) viết 1 chương trình nhập vào 1 mảng tùy ý có độ dài nhỏ hơn 10 phần tử(thông qua button nhập chuỗi):
// a) Hiển thị mảng bằng thẻ HTML.
// b) Có các nút nhân đôi, thêm, sửa, xóa 1 phần tử mảng thông qua các nút button trên màn hình
// c) nút sắp xếp các phần tử trong mảng theo chiều tăng dần, giảm dần.
// d) Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.

const ul = document.createElement("abc");
document.body.appendChild(ul);
ul.innerHTML = list = [];

let arr = [1, 2, 3, 4, 5];
const li = document.createElement("li");

function renderArr(arr) {
  const temp = arr
    .map((e, index) => {
      return `<div class="list-item-${index}"><div> ${e} </div> <button class="delete-button" onclick="deleteItem()">
      Delete Item
    </button> <button class="fixitem" onclick="fixItem()">Edit Item</button></div>`;
    })
    .join("");
  // Nội dung nhập vào đc gán vào phần tử trong danh sách
  li.innerHTML = temp;
  // thêm phần tử đã gán vào trong danh sách
  ul.appendChild(li);
}

window.onload = () => {
  renderArr(arr);
};

function add() {
  // giá trị của value được nhận từ prompt nên không cần truyền vào hàm
  const value = prompt("Nhập họ tên của bạn:");
  if (list.length >= 10 || value === null || value === "") {
    // nếu độ dài nhập sai thì hiển thị giá trị không hợp lệ
    document.querySelector("abc").innerHTML = "Giá trị nhập không hợp lệ";
  } else {
    // nếu độ dài nhập hợp lệ thì thêm phần tử nhập vào trong mảng
    arr.push(value);
    renderArr(arr);
    console.log(value);
  }
}

function deleteItem(arr) {
  const temp = arr.splice(i, 1);
  console.log(temp);
}

function deleteAllItem() {
  const li = document.querySelector("li");
  // xóa phần tử khỏi list
  ul.removeChild(li);
}

function dbItem() {
  const newList = list.concat(list);
  // const newList = [...list];
  list.push(newList);
  document.querySelector("abc").innerHTML = newList;
  console.log(newList);
}

// function fixItem() {
//   const fixButton = document.querySelector("fixitem");
//   fixButton.addEventListener("click", function () {});
// }
