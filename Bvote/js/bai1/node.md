- Phép so sánh ===

* Nếu 2 vế của phép so sánh khác kiểu dữ liệu, kết quả là false
* Khi cả 2 vế là kiểu Number, nếu 1 trong 2 vế là NaN, kết quả sẽ là false. Nếu không thì so sánh giá trị
* Khi cả 2 vế là kiểu String thì so sánh nội dung, nếu nội dung giống nhau là true, còn lại là false
* Khi cả 2 vế là kiểu Boolean, cùng true hoặc cùng false thì là true, còn lại là false
* Khi cả 2 về là kiểu Object tham chiếu, nếu 2 vế cùng tham chiếu tới 1 Object
* Khi cả 2 vế là các kiểu đặc biết như null, undefined, nếu như cùng null hoặc cùng undefined là true, còn lại là false

- Phép so sánh ==

  - Nếu 2 vế cùng kiểu dữ liệu, quy về so sánh ===
  - Ngược lại, nếu 2 vế khác kiểu dữ liệu:
  - Nếu 1 trong 2 vế là Number, vế còn lại là kiểu String, String sẽ được convert sang kiểu Number để so sánh
  - Nếu 1 trong 2 vế là Number, vế còn lại là kiểu Boolean, Boolean sẽ được chuyển qua Number để so sánh
  - Nếu 1 trong 2 vế là String, vế còn lại là kiểu Boolean, cả 2 vế sẽ được chuyển qua Number để so sánh
  - Nếu 1 trong 2 vế là String, vế còn lại là kiểu Object tham chiếu, Object tham chiếu sẽ được chuyển qua String để so sánh
  - Nếu 1 trong 2 vế là Number, vế còn lại là kiểu Object tham chiếu, Object tham chiếu sẽ được chuyển qua Number để so sánh
  - Nếu cả 2 vế đều là null hoặc undefined tính cả trường hợp một vế null, vế kia là undefined thì là true

- Cấu trúc String() dùng để chuyển loại dữ liệu khác về dạng chuỗi
- Giá trị của this trong JavaScript chính là object gọi phương thức - đối tượng trước dấu chấm (.)
- [].forEach(); dùng để duyệt qua mảng, gọi hàm callback 1 lần với mỗi giá trị
- [].find(); tìm 1 giá trị đầu tiên trong mảng phù hợp với điều kiện nhất định đc đánh giá bởi hàm callback
- [].findIndex(); tìm index của giá trị đầu tiên phù hợp với điều kiện được đánh giá bởi hàm callback
- [].map(); chuyển đổi tất cả giá trị trong mảng thành giá trị mới được tính toán bởi hàm callback, mảng mới không ảnh hưởng đến mảng ban đầu
- [].filter(); tìm tất cả giá trị phù hợp với yêu cầu được đánh giá bởi hàm callback
- [].reduce(); tổng hợp các giá trị trong mảng được tính toán bởi hàm callback
- [].sort(); sắp xếp các giá trị bên trong mảng
- [].every(); thực thi một hàm cho từng phần tử
