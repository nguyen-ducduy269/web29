//Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.title = heading;
//Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
// const h1 = document.body.firstElementChild;
const h1 = document.querySelector(".heading");
h1.textContent = heading;
// Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
// const img = h1.nextElementSibling;
const img = document.querySelector("img");
img.src = avatar;
// Thay đổi `href` của thẻ `a` thành giá trị của `profile`
// const a = img.nextElementSibling;
const a = document.querySelector("a");
a.href = profile;
// Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
// const ul = a.nextElementSibling;
const ul = document.querySelector("ul");
ul.querySelector("li:first-child").textContent = "Code application";
// Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
ul.querySelector("li:nth-child(3)").textContent = "hahaa";
ul.querySelector("li:last-child").textContent = "Sleep";
// Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
let present = new Date();
// const div = ul.nextElementSibling;
const div = document.querySelector("div");
console.log(div);
div.textContent = `Bây giờ là ${present.toLocaleTimeString()}, ${present.toLocaleDateString()}`;
// Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`
// const bio = div.nextElementSibling;
const bio = document.querySelector(".bio");
const words = bio.nextElementSibling;
const total = bio.innerText.split(" ").filter(function (word) {
  return word.toLowerCase() === "ba";
}).length;
words.innerText = "ở đoạn văn trên có " + total + " từ Ba";
// Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
// const table = words.nextElementSibling;
const table = document.querySelector("table");
const row = table.insertRow();
// Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai`
const cell = row.insertCell();
cell.textContent = "Thầy giáo Ba siêu cấp đẹp trai";
