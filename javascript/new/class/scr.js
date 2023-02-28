// spread peratopm- toán tử trải rộng
// hoạt động với arrray hoặc object
// sử dụng để copy các giá trị trong mảng | cặp key: value trong object
const arr = [1, 2, 3];
const obj = {
  x: 1,
  y: 2,
};
const copy = arr;
copy.push(4);
console.log(arr); //giữ nguyên [1,2,3]
// tạo mảng mới
const clone = [...arr]; 
const cloneObj = { ...obj };
console.log(arr);
console.log(...arr); // tách các giá trị khi truyền vào hàm

//template string - cho phép nhúng trực tiếp các biểu thức js vào chuỗi
`${arr} ${1 + 2} ${sum(1, 2, 3)}`; // interpolation

//template tag
console.log`${arr}`;

// destructuring assignment - cú pháp phân tách
// hoạt động với mảng | object
// cú pháp ngắn gọn để lấy ra giá trị bên trong 1 mảng

const {
  id,
  title,
  description,
  rating: { rate },
} = products;
// keyword type {} | [] = object | array;
// với obj lấy theo key
// với array thì lấy theo vị trí
const [a, b, c] = arr;

// DOM
