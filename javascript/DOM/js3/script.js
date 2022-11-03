let person = {
  name: "Duy",
  age: 20,
  gender: "Male",
  weight: 70,
  height: 175,
  // cú pháp ES6
  //this là toán tử đặc biệt trong phương thức của đối tượng
  //this đại diện cho đối tượng gọi phương thức
  //this là đối tượng ở trước dấu chấm.
  speak() {
    console.log("Hello " + this.name);
  },
};

person.speak();
person.name = "Beo";
let copy = person;
person = null;
copy.speak();

function findArea() {
  return this.width * this.length;
}
let rectangle1 = {
  width: 10,
  length: 5,
};
let rectangle2 = {
  width: 20,
  length: 15,
};
rectangle1.findArea = findArea;
rectangle2.findArea = findArea;
console.log(rectangle1.findArea());
console.log(rectangle2.findArea());

//ADVANCE
console.log(rectangle1);
const myPrototype = {
  findArea() {
    return this.width * this.length;
  },
  findChuVi() {
    return (this.width + this.length) * 2;
  },
  toString() {
    return (
      "Hình chữ nhật có chiều rộng: " +
      this.width +
      " và chiều dài: " +
      this.length
    );
  },
  valueOf() {
    // trả về giá trị khi object đc gọi trong trường hợp tính toán biểu thức số
    return this.findArea();
  },
};
console.log(rectangle1.findArea());
console.log(rectangle2.findArea());
console.log(rectangle1.findChuVi());
console.log(rectangle2.findChuVi());
rectangle1.toString(); // gọi trường hợp mà yêu cầu object chuyển về chuỗi
console.log(String(rectangle1));
// toString
// mặc định tất cả object đều in ra chuỗi [object Object]

//Đệ quy
let obj = {
  x: 1,
  y: 2,
  z: {
    name: "Duy",
  },
};
let clone = {};
for (let key in obj) {
  if (typeof obj[key] === "object") {
    clone[key] = object.assign({}, obj[key]);
  } else {
    clone[key] = obj[key];
  }
}
