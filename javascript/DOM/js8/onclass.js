// //Các phương thức để chọn/ tìm kiếm phần tử trên mảng
// //Các phương thức cũ
// document.getElementById();
// document.getElementsByTagName();

// các phương thức mới hơn
// chọn theo bộ chọn css
// document.querySelector(); //chọn 1 cái đầu tiên khớp
// document.querySelectorAll(); //chọn tất cả

//Ưu điểm
//1. thông nhất chung 1 API để tìm kiếm các phần tử
//2. có thể dử dụng trên bất kì node nào, chỉ tìm kiếm trong các node con
// dispatchEvent.querySelector();

// hạn chế
// dùng để render cái logic bên trong mà ko quá nhiều phần tử phức tạp
// collection tĩnh
// const div = document.querySelector("div");
// div.innerText = "<h2>Hello</h2>";
// div.innerHTML = "<h2 id='sub-heading' tilte='hahaa'>Hello</h2>";

const city = [
  {
    id: 1,
    title: "Hà Nội",
  }, // <option value="1">Hà Nội</option>
  {
    id: 2,
    title: "Nam Định",
  },
  {
    id: 3,
    title: "Thanh Hóa",
  },
];
document.querySelector("#city").innerHTML = city
  .map(function (c) {
    return "<option value='" + c.id + "'>" + c.title + "</option>";
  })
  .join("");

//innerHTML sẽ thay thế toàn bộ văn bản hiện tại
//thường sử dụng để render ra 1 danh sách item không yêu cầu có nhiều logic
//DOM cũng cung cấp các phương thức cho phép tạo mới và chèn/di chuyển/xóa các node/element từ js
//mặc định những phương thức chèn không tự tạo node mới mà di chuyển node hiện có
// để sao chép node, sử dụng phương thức .clone(true)
// Để thêm AttributeNode vừa tạo vào DOM, chúng ta cần sử dụng tới phương thức setAttributeNode của Element Object, với cú pháp như sau: element.setAttributeNode(attrnode)
// document.createElement - tạo thêm 1 thẻ(p,a,img,...)
// document.createTextNode - tạo thêm 1 textNode mới
// p.appendChild(text) -Thêm nội dung HTML vào thẻ p
// document.getElementsByTagName("body")[0].appendChild(p) - Đưa thẻ P vào trong thẻ body

// btvn làm lại tất cả các bài từ đầu h sử dụng createItem
