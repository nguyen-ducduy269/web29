// Bài 1: (tạo thẻ thông qua innerHTML, k tạo trực tiếp) viết 1 chương trình nhập vào 1 mảng tùy ý có độ dài nhỏ hơn 10 phần tử(thông qua button nhập chuỗi):
// a) Hiển thị mảng bằng thẻ HTML.
// b) Có các nút nhân đôi, thêm, sửa, xóa 1 phần tử mảng thông qua các nút button trên màn hình
// c) nút sắp xếp các phần tử trong mảng theo chiều tăng dần, giảm dần.
// d) Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.
const list = [];

function abc() {
  // giá trị của value được nhận từ prompt nên không cần truyền vào hàm
  const value = prompt("Nhập họ tên của bạn:");
  if (list.length >= 10 || value === null || value === "") {
    // nếu độ dài nhập sai thì hiển thị giá trị không hợp lệ
    document.querySelector(".button").innerHTML = "Giá trị nhập không hợp lệ";
  } else {
    // nếu độ dài nhập hợp lệ thì thêm phần tử nhập vào trong mảng
    list.push(value);
    console.log(value);
    // tạo danh sách các giá trị đã nhập
    const ul = document.createElement("ul");
    const list = document.querySelector(".abc");
    document.list.appendChild(ul);
    // xét mảng có giá trị rỗng
    ul.innerHTML = "";
    for (let i = 0; i < ul.length; i++) {
      // khi nhận nội dung sẽ thêm vào danh sách
      const li = document.createElement("li");
      li.textContent = list[i];
      ul.appendChild(li);
    }
  }
}
