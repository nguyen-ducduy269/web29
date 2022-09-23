/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  return (length + breadth) * 2;
}
console.log(
  "hình chữ nhật có chiều dài là 3 chiều rộng là 2 thì có chu vi là",
  findPerimeterOfRectangle(2, 3)
);
/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return length * breadth;
}
console.log(
  "hình chữ nhật có chiều dài là 4 chiều rộng là 5 thì có diện tích là",
  findAreaOfRectangle(4, 5)
);
/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  return r * 2;
}
console.log(
  "hình tròn có bán kính là r thì có đường kính là",
  findDiameterOfCircle(25)
);
/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  return 2 * r * 3.14;
}
console.log(
  "hình tròn có bán kính là r thì có chu vi là",
  findCircumferenceOfCircle(10)
);

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return r * r * 3.14;
}
console.log("hình tròn có bán kính r thì có diện tích là", findAreaOfCircle(9));
/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(
  "diện tích hình tam giác có các cạnh lần lượt là 1,2,3 là",
  findAreaOfTriangle(5, 3, 3)
);

/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}
console.log("30 độ C đổi sang độ F có giá trị là:", celsiusToFahrenheit(30));
