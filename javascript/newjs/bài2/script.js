// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log("sum", sum);

// // 1 số thao tác với mảng
// // unshift() - thêm 1 phần tử vào đầu mảng
// // shift() - xóa phần tử đầu mảng

// let number_array = [];
// for (let i = 1; i <= 100; i++) {
//   number_array.push(i);
// }
// console.log("number_array", number_array);

// let n = 0;
// while (0 < n <= array.length) {
//   console.log(n);
//   n++;
// }

// for... of dùng để duyệt mảng bằng cách lấy ra các phần tử trong mảng
// for ... in dùng để trích object và dữ liệu trả về là mảng chứa các key của object đó
// typeOf - để kiểm tra kiểu dữ liệu
// câu điều kiện
let book = [
  {
    name: "sach 1",
    author: "tac gia 1",
    published_date: "01/01/2023",
  },
  {
    name: ["sach 2", "sach 3", "sach 4"],
    author: "tac gia 2",
    published_date: "02/02/2023",
  },
  {
    name: 256,
    author: "tac gia 3",
    published_date: "02/02/2023",
  },
];

for (let item of book) {
  if (typeof item.name == "object") {
    for (let name of item.name) {
      console.log(name);
    }
  } else if (item.name != "object" || item.name != "string") {
    console.log(item.name);
  }
}

let my_girl = {
  name: "bạn gái 1",
  age: 21,
  cooking() {
    console.log("nấu ăn rất ngon");
  },
};
my_girl.cooking();
my_girl.name = "my girl friend";
console.log(my_girl.name);

// gán thêm thuộc tính
my_girl.dayOfBirth = "09/10/2020";
console.log(my_girl.dayOfBirth);

// gán thêm phương thức
my_girl.cleaning = function () {
  console.log("Hello");
};

// xóa
delete my_girl.dayOfBirth;

console.log(my_girl);
