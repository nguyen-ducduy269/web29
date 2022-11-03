# Tổng hợp bài học

1. console.log :

- dùng để hiển thị lên trang web
- Ví dụ : console.log(hoten);
- chuỗi được đặt trong các cặp dấu "" hoặc ''
- inline js: viết câu lệnh trực tiếp trong thuộc tính sự kiện của thẻ

2. Số

- bao gồm các số viết bình thường như 1; 2; hoặc infinity; -infinity;
- logic - boolean chỉ bao gồm true hoặc false
- bên cạnh đó còn có null hoặc underfine

3. Khai báo biến

- keyword name = value;
- let = number;
- ví dụ:
- let ten = " Duy "; let x = 1;
- const p = (a + b + c) / 2;
- Name : chỉ bắt đầu bằng kí tự, không chứa kí tự đặc biệt

4. Khai báo hàm

- function name(paramenters) {body}
- Ví dụ:
  function xinchao(ten) {
  console.log("Hello " + ten + " rất vui được làm quen");
  }

* xinchao("Duy");
* console.log(xinchao(Duy))

5. Biểu thức hàm

- const name = function(paramenters) {}
- hàm có thể tạo ra giá trị hoặc trả về giá trị, sử dụng từ khóa return

* Ví dụ: const cong = function(a, b) {return a + b;}

6. Gán - Assignment

- Binary: bao gồm 2 toán hạng
- Ví dụ: phép cộng let cong = "x + y";
- console.log(typeof a); -> xác định dạng của a \

5. Chú ý

- Nếu là hằng số( giá trị mà mình xác định từ đầu sẽ không thay đổi ) thì viết hoa và nối các từ bằng dấu \_
- Sau khi khai báo 1 lần có thể sử dụng lại tên khai báo nhiều lần nhưng không thể khai báo lại cùng 1 tên với giá trị mới
- Ví dụ:
- function xinchao(ten) {}
- xinchao("Duy");
- xinchao("Mạnh");
