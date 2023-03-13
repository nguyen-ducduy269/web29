// Bài 1: (tạo thẻ thông qua innerHTML, k tạo trực tiếp) viết 1 chương trình nhập vào 1 mảng tùy ý có độ dài nhỏ hơn 10 phần tử(thông qua button nhập chuỗi):
// a) Hiển thị mảng bằng thẻ HTML.
// b) Có các nút nhân đôi, thêm, sửa, xóa 1 phần tử mảng thông qua các nút button trên màn hình
// c) nút sắp xếp các phần tử trong mảng theo chiều tăng dần, giảm dần.
// d) Khi ấn vào các button sẽ hiển thị và nhập yêu cầu thông qua câu lệnh prompt(), sau mỗi lần thay đổi sẽ có 1 dòng chữ thông báo và hiển thị mảng mới sau khi thay đổi.
const list = [];

function abc(value) {
  prompt("Nhập họ tên của bạn:", list);
  if (list.length > 10 || list.length < 0) {
    // nếu độ dài nhập sai thì hiển thị giá trị không hợp lệ
    document.getElementsByClassName(".button").innerHTML =
      "Giá trị nhập không hợp lệ";
  } else {
    // nếu độ dài nhập hợp lệ thì thêm phần tử nhập vào trong mảng
    document.getElementsByClassName(".button").innerHTML = list.push(value);
  }
}
