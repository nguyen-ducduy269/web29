console.log("Hello");

let menu = "Danh sách đồ ăn"; // string
let a = 34; // number
let b = "34";
let abc = true;
let cdf = false;
console.log(menu);
console.log(a);
console.log(b);

let mySefl = {
  name: "Duy",
  age: 21,
  school: "GTVT",
  class: "web34",
  address: "Đình Quán",
  single: true,
};

console.log(mySefl.name);
console.log(mySefl.age);
console.log(mySefl);

let array = [1, "2", { name: "Duy", single: false }, [3, 4, 5]];
console.log(array);
console.log(array[2]);
console.log(array[3]);

let web_34 = {
  students: 16,
  trainer: "Thanh",
  location: "Dich Vong Hau st",

  equipment: {
    useable: 100,
    damaged: 0,
    tables: 8,
    chair: 15,
  },
};
console.log("Số lượng đồ còn dùng được là: " + web_34.equipment["useable"]);
console.log("Số ghế trong phòng là: " + web_34.equipment["chair"]);

let m = 1;
let n = 2;
let c = m + n;
console.log("Tổng của " + m + " và " + n + " là: " + c);
console.log(m - n);
console.log(m * n);
console.log(m / n);
console.log(m % n);

// a,b là tham số truyền vào function, sử dụng được bên trong dấu ngoặc nhọn
// dấu {} dùng để thực thi điều mà function muốn
// tránh thay đổi giá trị của tham số khi truyền vào hàm
function sum(a, b) {
  console.log(a + b);
  //   return a + b;
}
// console.log(sum(1, 2));
sum(100, 1);

// bài thực hành
// tạo ra 1 danh sách có tên là thư viện gồm 5 loại sách khác nhau
const lib = [
  {
    title: "Mười Người Da Đen Nhỏ",
    owner: "Agatha Christie",
    dateOfManufacture: "6/11/1939",
    pages: 256,
    type: "Tình cảm",
  },
  {
    title: "Cuốn Theo Chiều Gió",
    owner: "Margaret Mitchell",
    dateOfManufacture: "30/6/1936",
    pages: 1037,
    type: "Kinh dị",
  },
  {
    title: "Trò Chơi Của Ender",
    owner: "Orson Scott Card",
    dateOfManufacture: "24/10/2013",
    pages: 378,
    type: "Kí sự",
  },
  {
    title: "Educated",
    owner: "Agatha Christie",
    dateOfManufacture: "6/11/1939",
    pages: 256,
    type: "Trinh thám",
  },
  {
    title: "Ông già và biển cả",
    owner: "Ernet Hemingway",
    dateOfManufacture: "6/11/1939",
    pages: 150,
    type: "Truyện",
  },
];

console.log(lib);
