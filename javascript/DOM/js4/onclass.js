//Number
let number = 65431351;
console.log(number.toLocaleString("vn"));
console.log(number.toFixed(1));
console.log(number.toPrecision(1));
console.log(number.toString(16)); //hiển thị hệ cơ số bao gồm hệ cơ số 2, 4, 8, 10, 16,...

//cung cấp các giá trị toán học PI, phương thức toán học: căn bậc 2, bình phương,...
console.log(Math.random()); // tạo số ngẫu nhiên từ 0 đến < 1
console.log(Math.PI); //giá trị PI
console.log(Math.max(1, 2, 3)); // tìm số nhỏ nhất
console.log(Math.min()); //tìm số nhỏ nhất
console.log(Math.floor()); //làm tròn xuống
console.log(Math.ceil()); // làm tròn lên

//Tạo ra 1 giá trị ngẫu nhiên trong 1 khoảng
//Cthuc chung:
// Math.floor(Math.random() * (max - min) + min);
Number.isNaN(NaN); //kiểm tra xem có phải là giá trị NaN ko

//////////////////////////////////////////////////////////////////////////////////////////////////

//String
//Có tính chất gần giống mảng- từng kí tự bên trong chuỗi đều được đánh số thứ tự cụ thể
//Thứ tự bắt đầu từ 0(chỉ mục - index)
//0123456789;
("Nguyễn Duy");
// kí tự thứ 1 là chữ N tương đương vs số 0
//Cho phép mình truy cập trực tiếp đến thứ tự thông qua thông qua index
let str = "Nguyen Duy";
console.log(str[1]); // "g"
console.log(str.length); // độ dài- số lượng kí tự trong chuỗi
str[1] = "m"; // mặc dù ko gây lỗi nhma sẽ ko có tác dụng lên str
//trim, toLowerCase, toUperCase, replaceAll,includes, indexof, split, slice
let strr = " Nguyễn Duy ";
console.log(strr.trim()); //xóa khoảng trắng 2 đầu
console.log(strr.toLowerCase()); //viết thường hết
console.log(strr.toUpperCase()); //viết hoa hết
console.log(strr.replaceAll("ạodoasjda")); //thay thế toàn bộ chuỗi
console.log(strr.includes(" Nguyễn Duy ")); // tìm xem chuỗi truyền vào có trong phần khai báo không
console.log(strr.indexOf("g")); //tìm vị trí xuất hiện của chuỗi
console.log(strr.split("")); //cắt chuỗi thành 1 mảng từ hoặc ký tự riêng
console.log(strr.slice(0, 5)); // sao chép từ start đến end và trả về phần đó
console.log(strr.concat("10 điểm")); // ghép chuỗi

//////////////////////////////////////////////////////////////////////////////////////////////////

//Datetime
//đại diện cho 1 giá trị thời gian
const present = new Date(); //thời gian hiện tại
// new Date(year, month, date, hour, minute, second, milisecond);
// dựa trên số milisecond đã trôi qua kể từ thời điểm nhập đc gọi là EPOC time
const brithday = new Date("2002-09-26"); // mặc định thời gian là 0h0'0s
console.log(present);
console.log(brithday);
//lấy số milisecond đã trôi qua từ EPOC time
const now = Date.now();
const today = new Date(now);
console.log(today);
//month bắt đầu từ 0 đến 11, có liên quan đến múi h(timezone)
const dob = new Date(2002, 8, 26); // tháng lùi 1
console.log(dob);
//Getter
console.log(present.getFullYear());
console.log(present.getMonth());
console.log(present.getDate());
console.log(present.getDay()); // thứ trong tuần từ 0 đến 6
console.log(present.toDateString());
console.log(present.toTimeString());
console.log(
  present.toLocaleString("vi", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    dayPeriod: "long",
  })
);

//Setter - thay đổi giá trị thời gian
//khi giá trị thời gian thiết lập vượt quá phạm vi, sẽ tự điều chỉnh tăng giảm cho phù hợp
// tháng 2 => có 29 ngày => nếu kp năm nhuận => chuyển thành 1/3
present.setFullYear(2000); // năm nhuận
present.setMonth(1); // tháng 2
present.setDate(29); // 29-02-2000
console.log(present);

//////////////////////////////////////////////////////////////////////////////////////////////////

//Array
//Danh sách các giá trị được lưu trữ trong 1 biến
//Nhma khác Object, các giá trị trong mảng thì không có key
//các phần tử bên trong mảng đc phân tách bằng dấu phẩy ,
const arr = [1, 2, 3, 4, 5];
//Tính chất của mảng:
//Các phần tử trong mảng cũng được đánh số thứ tự (chỉ mục-index) bắt đầu từ 0
//Có thể truy cập phần tử thông qua chỉ mục
console.log(arr[0]);
console.log(arr[4]);
console.log(arr.length); // số lượng phần tử(không chính xác 100%)
// Khác so với chuỗi, array có thể thay đổi trực tiếp các giá trị của phần tử
arr[0] = 100;
console.log(arr);
arr[4] = 646465;
console.log(arr);

console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // kiểm tra xem có chính xác là array không
// length có thể thay đổi được khi thêm, xóa phần tử khỏi mảng
// có thể tùy ý thay đổi length - ảnh hưởng đến các phần tử trong mảng
arr[arr.length] = 6; //arr[5] = 6; // thêm 1 phần tử mới
arr[arr.length - 1]; // truy cập phần tử cuối cùng
arr.length = 100; // thêm phần tử empty vào cuối cùng
arr.length = 0; // xóa toàn bộ phần tử trong mảng

//Chuyển đổi vị trí của 2 phần tử(đổi chỗ)
let temp = arr[0]; // lưu giá trị 1 vào biến temp
arr[0] = arr[2]; // bốc giá trị 3 vào vị trí của 1
arr[2] = temp; // đặt giá trị 1 ở biến temp vào vị trí của 3

// Duyệt mảng
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

let strA = "Duy Nguyễn";
for (let index = 0; index < strA.length; index++) {
  console.log(strA[index]);
}

//Chỉ duyệt qua giá trị
for (let value of arr) {
  console.log(value);
}
for (let char of str) {
  console.log(char);
}

//tính tổng các số trong mảng
const arrB = [5, 3, 1, 9, 0];
function sumAll() {
  let sum = 0;
  for (let value of arrB) {
    sum += value;
  }
  return sum;
}
console.log(sumAll(arrB));

//includes, indexOf, slice, join, push
arrB.includes(3); // true
arrB.indexOf(5); // underfined
arrB.slice(1, 4); // 3 -> 0
arrB.push(21); // new length - thêm vào cuối
arrB.unshift(9); // thêm vào đầu
arrB.pop(); // 21- xóa ở cuối
arrB.shift(); // 9 - xóa ở đầu
arrB.reverse(); // đảo vị trí
arrB.concat([1, 2, 3]); // trả về mảng mới
arrB.join("-"); // thêm dấu - vào giữa các phần tử
