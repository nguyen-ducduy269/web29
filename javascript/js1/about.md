> khi thực hiện biểu thức thì toán hạng sẽ chuyển sang loại dữ liệu nào, kết quả tương ứng là gì. Kết quả khi không tính đc là j

> toán tử hoạt động với các loại dữ liệu khác nhau sẽ cho kết quả khác nhau.

- chuỗi + chuỗi -> string -> nối chuỗi
- còn lại trừ, nhân, chia, bình phương, chia lấy phần dư : đều chuyển các loại dữ liệu khác sang số

> chuỗi sang số ( string -> number)

- nếu chuỗi chứa tất cả kí tự hợp lệ của 1 số thì sẽ chuyển thành số tương ứng. Ví dụ: "123.456" -> 123.456
- chuỗi có thể bao gồm các khoảng trắng ở đầu hoặc cuối chuỗi.
- chuỗi rỗng thì sẽ chuyển thành giá trị 0. ví dụ : "."

1. chuỗi chứa bất kì giá trị kí tự hoặc giá trị ko hợp lệ sẽ chuyển thành NaN
2. string, number, boolean: có thể chuyển đổi giá trị từ kiểu này sang kiểu khác.
3. boolean có 1 số giá trị đặc biệt như "", 0, null, NaN, undefined còn lại là true
4. chuyển đổi theo kiểu number:

- Number(null); //0
- Number(undefined); //NaN
- Number(true); //1
- Number(false); //0
- Number(" 12 "); //12
- Number("12ab"); // NaN

* trong 1 biểu thức có giá trị NaN, trừ khi là nối chuỗi còn lại tất cả các trường hợp khác thì đều cho kết quả là NaN.
* toán tử gán chỉ hoạt động với biến

- let x = 1 + 2 + 3; -> 6

* lấy giá trị hiện tại của x cộng với giá trị phía bên phải

- x += 4 -> x + 4 =
- x ++, x --, ++ x, -- x : tăng hoặc giảm giá trị của x lên 1.

- toán tử increment/decrement:

* trong 1 biểu thức đơn x++; hoặc ++x; thì không khác biệt, đều tăng thêm 1.
* ++ đặt trước hoặc sau chỉ khác biệt khi đặt bên trong 1 biểu thức lớn hơn.

  - 1 + x++ : Tăng giá trị của x lên 1 nhg trả về giá trị trước khi tăng. ví dụ a = 1, b = a++ + 1; // a = 2, b = 2
  - 1 + ++x : tăng giá trị của x lên 1 nhg trả về giá trị sau khi tăng. ví dụ c ++a + 3; // a = 3, c = 6

5. kí hiệu ===: bình đẳng nghiêm ngặt / strict equal
6. So sánh chuỗi:

- So sánh theo bảng mã Unicode, mỗi kí tự thì tương ứng với 1 số thứ tự trong bảng mã
- So sánh lần lượt từng kí tự

7. Toán tử Logic: Đánh giá lần lượt từng giá trị biểu thức con xem là đúng hay sai và trả về kết quả
   - AND: trả về giá trị đầu tiên được đánh giá là sai(false), nếu ko thì trả về giá trị cuối cùng.(Tìm giá trị sai đầu tiên trong biểu thức hoặc giá trị cuối cùng).
   - OR: trả về giá trị đầu tiên được đánh giá là đúng nếu không thì trả về giá trị cuối cùng
   - NOT:Phủ định - chuyển giá trị về kiểu logic và đảo ngược nó

# Control Structure
- các cấu trúc điều khiển
* điều kiện: if ... else ..., switch ... case ...
* vòng lặp : for, do , while

1. If: 
- thực hiện các câu lệnh theo điều kiện, nếu sai thì ko làm j cả
* if(condition) {code}
- thực hiện các câu lệnh theo 2 nhóm điều kiện độc lập sử dụng if và else, nếu đúng thì thực hiện lệnh 1 còn sai thì thực hiện lệnh 2
* if(condition) {code}else{code}
- các câu lệnh if else có thể lồng nhau, cho phép kiểm tra điều kiện con
- kiểm tra nhiều điều kiện: else ... if ...