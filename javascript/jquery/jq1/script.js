console.log($);
// thư viện cung cấp các phương thức $ -  vừa là hàm vừa là đối tượng để thao tác với DOM
// ưu điểm: cú pháp ngắn gọn, dễ nhớ, thuận tiện
// $ - đối tượng jQuery - không gian tên(namespace) => $() là 1 hàm , $ là đối tượng
// là 1 đối tượng hàm
function hello() {}
hello.name = "haha";
hello();

const h1 = document.querySelector("h1"); // tìm 1 phần tử h1
const h1s = document.querySelectorAll("h1"); // tìm tất cả phần tử h1
const $h1 = $("h1"); // tìm tất cả phần tử h1
console.log($h1);

// chỉnh sửa
// đối với văn bản
h1.innerText = "bla bla";
$h1.text("something else"); // setter - sửa nội dung của tất cả phần tử, áp dụng cho tất cả các thẻ có thuộc tính h1
console.log($h1.text()); // getter -  lấy nội dung của phần tử đầu tiên

// đối với trình html
h1.innerHTML = "<span> The Html </span>";
$h1.html("<span> The Html </span"); // setter - sửa nội dung của tất cả phần tử, áp dụng cho tất cả các thẻ có thuộc tính h1
console.log($h1.html()); // getter -  lấy nội dung của phần tử đầu tiên

console.log($h1.attr("id")); // getter - lấy thông tin về thuộc tính của phần tử đầu tiên, chỉ lấy được 1

$h1.attr("id", "my-id"); // setter - sửa thuộc tính của tất cả phần tử

$h1.attr({
  id: "myId",
  title: "mytitle",
  lang: "en",
}); // sửa cùng lúc nhiều thuộc tính

$h1.addClass("class1 class2 class3");
$h1.removeClass("class3");
$h1.toggleClass("checked");
console.log($h1.hasClass("checked"));

$h1.css("background-color", "red"); // css trực tiếp cho thuộc tính

$h1.data({
  product: 1,
  quantity: 10,
});
console.log($h1.data());

const $input = $("input");
console.log($input.val());
$input.val("hahasdas");

const $select = $("select");
console.log($select.val());
$select.val(2);

// xóa
$input.remove();

// tạo
const $app = $("#app");
const $h2 = $("<h2 class='heading'>Hello everybody</h2>"); // tạo thuộc tính
console.log($h2);
const $p = $("<p />", {
  html: "Bây giờ là <b>20</b> giờ",
  class: "time",
  id: "time",
  click: function () {
    console.log("Clicked");
  },
});
$app.append($h2, $p); // chèn thuộc tính

// sự kiện
const $btn = $("button");
// $btn.on(event, data, handler); - cấu trúc thêm sự kiện/ mỗi data có 1 dữ liệu riêng để đính kèm
const data = {
  value: 1,
};
$btn.on("click", data, function (e) {
  console.log(e.data);
});

$btn.one("click", function (e) {
  // khi có event xảy ra chỉ chạy 1 lần duy nhất
  console.log("Click thêm cái nữa đê !");
});
