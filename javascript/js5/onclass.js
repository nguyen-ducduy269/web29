[].forEach(); //dùng để duyệt qua mảng, gọi hàm callback 1 lần với mỗi giá trị
[].find(); // tìm 1 giá trị đầu tiên trong mảng phù hợp với điều kiện nhất định đc đánh giá bởi hàm callback
[].findIndex(); // tìm index của giá trị đầu tiên phù hợp với điều kiện được đánh giá bởi hàm callback
[].map(); // chuyển đổi tất cả giá trị trong mảng thành giá trị mới được tính toán bởi hàm callback, mảng mới không ảnh hưởng đến mảng ban đầu
[].filter(); // tìm tất cả giá trị phù hợp với yêu cầu được đánh giá bởi hàm callback
[].reduce(); // tổng hợp các giá trị trong mảng được tính toán bởi hàm callback
[].some(); //
[].every(); //
[].sort(); // sắp xếp các giá trị bên trong mảng

let arr = [1, 2, 3, 4, 5, 6];
//in từng giá trị trong mảng ra console.log
for (let value of arr) {
  console.log(value);
}
// console.log là 1 hàm/ phương thức.
// hàm callback - là 1 hàm truyền vào hàm khác dưới dạng đối số.
// khi callback truyền ra giá trị sẽ truyền đủ 3 tham số value, index, arr.
// forEach dùng để duyệt qua mảng, gọi hàm callback 1 lần với mỗi giá trị
// nó ko có kết quả trả về và cũng ko ngắt đc forEach
arr.forEach(console.log);
// function là first-class citizens
// có thể làm bất cứ thứ gì với function giống như là 1 giá trị thong thường
// gán hàm cho 1 biến, có thể truyền vào hàm khác
// là giá trị return từ hàm khác
const isPrime = function (n) {
  if (n < 2 || n % 2 == 0) return false;
  for (let i = 3; i < n; i += 2) {
    if (n % i == 0) return true;
  }
};
// includes, indexOf, lastIndexOf
const n = arr.find(isPrime); // tìm giá trị đầu tiên trong arr phù hợp với điều kiện isPrime.
const i = arr.findIndex(isPrime);
console.log(i);

//[].filter();
//Thông thường:
//let result = [];
//for (let value of arr) {
//  if (isPrime(value)) result.push(value);
//}
//console.log(result);

let result = arr.filter(isPrime);
console.log(result);

//[].map();
function pow(n) {
  return n * n;
}
//Thông thường:
// let square = [];
// for(let value of arr){
//    square.push(pow(value));
//}
//console.log(square);

const square = arr.map(pow);
console.log(square);

//[].reduce();
//Thông thường:
//function sumAll() {
//  let sum = 0;
//  for (let value of arr) {
//    sum += value;
//  }
//  return sum;
//}
function sum(current, value) {
  return current + value;
}
const total = arr.reduce(sum, 0);
console.log(total);

function mul(current, value) {
  return current * value;
}
const total1 = arr.reduce(mul, 1);
console.log(total1);

//[].sort();
// mặc định thì hàm sort sắp xếp các giá trị theo kiểu string
let stringArray = ["Duy", "Ba", "Cương"];
stringArray.sort();
console.log(stringArray);
function comparison(a, b) {
  // trả về số, nếu a nhỏ hơn b thì âm, nếu a lớn hơn b thì dương
  if (a < b) return -1;
  else return 1;
}
arr.sort(comparison);
console.log(arr);
//
let student1 = {
  name: "Ba",
  age: 30,
};
let student2 = {
  name: "Duy",
  age: 20,
};
let student3 = {
  name: "Huấn",
  age: 28,
};
let students = [student1, student2, student3];
function sortByAge(student1, student2) {
  return student1.age - student2.age;
}
students.sort(sortByAge);
console.log(students);
