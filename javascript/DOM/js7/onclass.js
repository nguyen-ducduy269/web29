// JS
// trong môi trường trình duyệt, trình duyệt cung cấp API DOM cho phép làm việc với nội dung trên trang web
// - DOM - document object model
// - BOM - browser object model
// đều là object: thuộc tính và phương thức
// BOM là đối tượng đại diện cho cửa sổ trình duyệt có các thuộc tính để mô tả thông tin về trình duyệt và các phương thức để thao tác với cửa số trình duyệt
// DOM là đối tượng đại diện cho tài liệu HTML, có các thuộc tính mô tả/ truy cập các thông tin trong tài liệu, và các phương thức để tạo, chỉnh sửa, .... nội dung HTML
// cả BOM và DOM và 1 số phương thức có sẵn đều nằm trong đối tượng to nhất là `window` - `globalThis`

// cấu trúc DOM biểu diễn cấu trúc nội dung tương ứng trong HTMl
// TẤT CẢ MỌI THỨ đều có 1 NODE trong DOM

//Document
document.head; // cho phép truy cập trực tiếp đến thẻ <head />
document.title; // cho phép truy cập trực tiếp đến thẻ <title />
document.body; // cho phép truy cập trực tiếp đến thẻ <body />
document.links; // collection chứa tất cả thẻ <a /> hiển thị trên trang
document.forms; // collection chứa tất cả thẻ <form /> hiển thị trên trang
document.images; // collection chứa tất cả thẻ <img /> hiển thị trên trang
document.cookie; // lữu trữ dữ liệu trao đổi giữa server và client
console.log(document.head);
console.log(document.title); // thường sử dụng
console.log(document.body); // thường sử dụng
console.log(document.links);
console.log(document.forms);
console.log(document.images);
console.log(document.cookie);
document.write("<h1> Đây là nội dung mới </h1>");
document.title = "Xin chào mọi người";

const body = document.body;
console.log(body.nodeName);
console.log(body.nodeType);
console.log(body.nodeValue);
console.log(body);
console.log(body.parentNode);
console.log(body.previousSibling); // node đứng trước <body />
console.log(body.previousSibling.previousSibling);
console.log(body.nextSibling);
console.log(body.firstChild);
console.log(body.lastChild);
console.log(body.childNodes);
console.log(body.hasChildNodes());

console.log(body.firstChild);
console.log(body.previousSibling);
console.log(body.firstChild.nextSibling);

const text = document.body.firstChild;
console.log(text);
console.log(text.textContent);
text.textContent = "Good Bye";
console.log(text.nodeName);
console.log(text.nodeType);
console.log(text.nodeValue);
console.log(text.childNodes);

//Element : tất cả những node là thẻ HTMl(nodeType = 1)
const body1 = document.body;
console.log(body1.attributes);
// console.log(body1.attributes.lang.value);
console.log(body1.children);
console.log(body.innerHTML);
console.log(body.innerText);
console.log(body.tagName);
console.log(body.scrollTop);
console.log(body.children[2]);

// tùy thuộc vào từng thẻ khác nhau sẽ có các thuộc tính và phương thức bổ sung
console.log(document.body.lang);
console.log(document.body.title);
console.log(document.body.id);
console.log(document.body.className);
console.log(document.body.style);
console.log(document.body.translate);
console.log(document.body.dir);
console.log(document.body.tabIndex);

// previousSibling => previousElementSibling
// nextSibling => nextElementSibling
// parentNode => parentElement
// firstChild => firstElementChild
// lastChild => lastElementChild
// childNodes => children

const a = document.body.firstElementChild;
console.log(a.href);
console.log(a.target);
console.log(document.body.previousElementSibling);

const img = document.body.children[2];
console.log(img.src);
console.log(img.alt);

// Collection - bộ sưu tập chứa các phần thử DOM (children, childNoden)
// Collection và List chỉ có thao tác lặp chứ không có phương thức của mảng
const children = body.children; // HTMLCollection [a, form, img, script]
let b;
for (let element of children) {
  if (element.nodeType === 1 && element.tagName === "A") {
    b = element;
    break;
  }
}
b.href = "https://google.com";
b.target = "_blank";
b.textContent = " Đi đến Google ";

let c;
for (let element of children) {
  if (element.nodeType === 1 && element.tagName === "IMG") {
    c = element;
    c.src = "https://i.ytimg.com/vi/m45Onhf_Zuc/maxresdefault.jpg";
    c.alt = "anh moi";
    break;
  }
}

// window là đối tượng cấp cao nhất đại diện cho toàn bộ cửa sổ trình duyệt
// BOM - các đối tượng đặc biệt cho phép truy cập thông tin về trình duyệt, điều khiển trình duyệt
// DOM - là đối tượng đại diện cho toàn bộ nội dung HTML hiển thị trên trang
// Node: Tất cả mọi thứ trong HTML => Node trong DOM
// mỗi Node sẽ có các thuộc tính của node
// Element là các Node có nodeType === 1 => có các thuộc tính bổ sung
// tùy thuộc vào loại thẻ, sẽ có các thuộc tính/ phương thức khác nhau
// HTMLCollection | NodeList => Duyệt bằng vòng lặp | Chuyển thành mảng

// Btap bảng
// tìm ra thẻ body
const table = document.body.firstElementChild; // HTMLCollection [a, form, img, script]
// const tbody = table.tBodies[0];
// // lấy ra các rows
// const rows = tbody.rows;
// //duyệt qua các rows
// for (let row of rows) {
//   const rowIndex = row.rowIndex;
//   //lấy qua các cells tương ứng
//   const cells = row.cells;
//   // lấy ra cells tương ứng với rowIndex
//   const cell = cells[rowIndex];
//   //thay đổi style el.style.backgroundColor = "red"
//   cell.style.backgroundColor = "red";
// }
// Rút gọn
const rows = document.body.firstElementChild.tBodies[0].rows;
for (let row of rows) {
  row.cells[row.rowIndex].style.backgroundColor = "red";
}
