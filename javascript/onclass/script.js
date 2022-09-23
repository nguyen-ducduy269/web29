// gọi hàm - call | invoke : alert("from mixi gaming");

console.log("Hiển thị lên trang web");
// sử dụng console trong DevTool
// Node.js để chạy mã java script
// nhúng mã javascript trong html
// inline js: viết câu lệnh trực tiếp trong thuộc tính sự kiện của thẻ

// chuỗi - string được đặt trong các cặp dấu "" hoặc ''
("Đây là 1 chuỗi");
("hé lô");
// Số - Number
1;
1.999999;
-50;
Infinity;
-Infinity;
// Not a number
NaN;
// Logic - boolean chỉ bao gồm đúng hoặc sai
true;
false;
// giá trị đặc biệt
null;
undefined;
// keyword name = value;
// Keyword: let,const,var
// Name : chỉ bắt đầu bằng kí tự, không chứa kí tự đặc biệt
// Value : string, number, boolean, null, underfined
let hoten = "Nguyễn Duy";
let tuoi = "20";
let diem = true;
console.log(hoten);
console.log(tuoi);
console.log(diem);
// từ đầu tiên viết thường, các từ tiếp theo trong tên biến thì viết hoa chữ cái đầu tiên
// hằng số( giá trị mà mình xác định từ đầu sẽ không thay đổi ) thì viết hoa và nối các từ bằng dấu _
const NGAY_SINH = "2002/09/26";
let x = 1;
let y = 0.5;
// Số học - arithmetic
// So sánh - Comparison
// Gán - Assignment
// Logic
// Binary: bao gồm 2 toán hạng
// phép cộng let cong = "x + y";
// phép trừ let tru = "x - y";
// phép nhân let nhan = "x * y";
// phép chia let chia = "x / y";
x < y;
x > y;
-x;
+y;
typeof x;
// Unary: chỉ gồm 1 toán hạng
let a = 1;
console.log(typeof a);
// function
// các câu lệnh đc bọc trong khối mã và gán cho một tên biến. Cho phép tái sử dụng mã nhiều lần nhiều nơi
// cú pháp khai báo hàm
// tham số -paraameters -()
// keyword name () { body }
function xinchao(ten) {
  console.log("Hello " + ten + " rất vui được làm quen");
}
xinchao("Duy");
xinchao("Mạnh");

// biểu thức hàm ( giống khai báo biến )
const tambiet = function () {
  console.log("Chào!!!");
};
tambiet();
function cong(a, b) {
  return a + b;
}
console.log(cong(1, 2));
console.log(cong(15, 20));
console.log(cong(10, -25));
console.log(cong(100, 2000));
// 1. Chạy hàm cong
// 2. hàm trả lại giá trị 3
// 3. đặt giá trị 3 vào biểu thức console.log
// Lưu ý :
// Function:
// khai báo hàm : function name(paramenters) {}
// biểu thức hàm : const name = function(paramenters) {}
// hàm có thể tạo ra giá trị hoặc trả về giá trị, sử dụng từ khóa return : const cong = function(a, b) {return a + b;}
