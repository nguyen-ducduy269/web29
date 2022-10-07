//Tạo hàm khởi tạo là Counter với tham số là initialValue là giá trị đếm ban đầu
//  Prototype thì có các phương thức up() - tăng giá trị lên 1, down() - giảm 1, get() - trả về giá trị đếm hiện tại
function Counter(initialValue) {
  this.value = initialValue;
}
Counter.prototype = {
  up() {
    this.value++;
    return this;
  },
  down() {
    this.value--;
    return this;
  },
  get() {
    console.log(this.value);
    return this.value;
  },
};
const countFromZero = new Counter(initialValue: 0);
countFromZero.up();//biểu thức
countFromZero.up();
countFromZero.up();
console.log("Current value", countFromZero.get());

//làm thế nào để gọi được 1 chuỗi phương thức:
countFromZero.up().down().up().down().up().down().get();
//Khi gọi phương thức cần xác định được đối tượng gọi phương thức là đối tượng nào
//Phương thức trả lại kết quả là gì? kiểu dữ liệu nào? Object nào?...