//Tạo hàm khởi tạo là Counter với tham số là initialValue là giá trị đếm ban đầu
//  Prototype thì có các phương thức up() - tăng giá trị lên 1, down() - giảm 1, get() - trả về giá trị đếm hiện tại
function Counter(initialValue) {
  this.value = initialValue;
}
Counter.prototype = {
  up() {
    this.value++;
  },
  down() {
    this.value--;
  },
  get() {
    return this.value;
  },
};
const countFromZero = new Counter(initialValue: 0);
countFromZero.up();
countFromZero.up();
countFromZero.up();
console.log("Current value", countFromZero.get());

//làm thế nào để gọi được 1 chuỗi phương thức:
countFromZero.up().down().up().down().up().down().get();