const person = {
  name: "Duy",
  age: 20,
  gender: "Male",
  weight: 70,
  height: 175,
  // cú pháp ES6
  speak() {
    console.log("Hello Duy");
    console.log("adksjalsjdkad");
    console.log("123456789");
    console.log("001 100 1101");
  },
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.height);
console.log(person.gender);
console.log(person.weight);
person.speak();

const myComputer = {
  name: "MSI",
  RAM: "8GB",
  type: "Laptop",

  device() {
    console.log("MSI");
    console.log("8GB RAM");
    console.log("Laptop");
    console.log("Black");
  },
};
console.log(myComputer.name);
myComputer.device();

// Thao tác với Object
// Thêm thông tin
person.isHandsome = true;
// Chỉnh sửa thuộc tính
person.age = 21;
// Thêm phương thức
person.sleep = function () {
  console.log("Go to sleep");
};

console.log(person);
// xóa thuộc tính
delete person.sleep;
delete person.isHandsome;

// Kiểm tra xem đối tượng có thuộc tính này hay không
console.log("name" in person);
console.log("avdertise" in person);

// Cú pháp duyệt qua các thuộc tính trong object
// Khi truy cập đến 1 thuôc tính không tồn tại => underfined
// Bracket Notation - ngoặc vuông - sử dụng khi có 1 biến cố giá trị là thuộc tính bên trong object
for (let key in person) {
  //console.log(key); key là tham số vòng lặp
  const value = person[key];
  console.log(value);
}

// Các kiểu dữ liệu
// Primitive: Các giá trị thô như chuối, số, boolean, underfined, null, symboil
// References: Object - biến chỉ lưu trữ vị trí bộ nhớ chứ không phải giá trị.
let obj = {
  // 0x004
  x: 1,
};
let clone = obj; //0x004
console.log(obj.x);
clone.x = 10; // Tìm đến vùng nhớ 0x004 => chỉnh sửa giá trị
console.log(obj.x); // Tìm đến vùng nhớ 0x004 => in ra giá trị

//References ảnh hướng đến:
//Khi sao chép object thì 2 object bị ảnh hưởng lẫn nhau và khi truyền object vào 1 hàm
//Sử dụng vòng lặp
let source = {
  value: 1,
};
let copy = {};
for (let key in source) {
  copy[key] = source[key];
}
copy.value = 100;
console.log(copy);
console.log(source);
// sử dụng Object.asign - để sao chép 1 đối tượng sang 1 đối tượng khác
//let copy = Object.assign(target: {}, source);
//copy.value = 100;
//console.log(copy);
//console.log(source);

//Constructor - cho phép tạo ra các đối tượng
// Tên hàm sử dụng pascal case - viết hoa tất cả chữ cái đầu
function Rectangle(width, length) {
  this.width = width;
  this.length = length;
}

Rectangle.prototype = {
  area() {
    return this.width * this.length;
  },
  perimeter() {
    return (this.width + this.length) * 2;
  },
};
// new Constructor()
//const r1 = new Rectangle(width: 10, length: 5);
//const r2 = new Rectangle(width: 10, length: 5);
//const r3 = new Rectangle(width: 10, length: 5);

//Nếu trong object có 1 thuộc tính là object con thì sao????
