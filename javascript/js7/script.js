//Thay đổi nội dung của thẻ `title` thành giá trị của `heading`
document.title = heading;
//Thay đổi nội dung của thẻ `h1` thành giá trị của `heading`
const h1 = document.body.firstChild;
h1.textContent = heading;
// Thay đổi `src` của thẻ `img` thành giá trị của `avatar`
const img = h1.nextElementSibling;
img.src = avatar;
// Thay đổi `href` của thẻ `a` thành giá trị của `profile`
const a = img.nextElementSibling;
a.href = profile;
// Thay đổi nội dung của thẻ `li ` đầu tiên trong thẻ `ul` thành `Code application`
const ul = a.nextElementSibling;
ul.firstElementChild = "Code application";
// Thay đổi nội dung của thẻ `li` cuối cùng trong thẻ `ul` thành `Sleep`
ul.lastElementChild = "Sleep";
// Thay đổi nội dung của `div` thành thời gian hiện tại theo mẫu `Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm`
const div = ul.nextElementSibling;
div.textContent = "Bây giờ là giờ:phút:giây, ngày ngày/tháng/năm";
// Đếm số từ trong đoạn văn `p.bio` xem có bao nhiêu từ `Ba` (không phân biệt chữ hoa chữ thường) và thêm nội dung vào thẻ `p.num-of-words` bên dưới thông báo kết quả dạng `Ở đoạn văn trên có xx từ 'Ba'`

// Thêm một hàng mới vào `table` (tham khảo API của `HTMLTableElement`)
// Thêm một cột (ô) mới vào hàng vừa tạo có nội dung `Thầy giáo Ba siêu cấp đẹp trai`
