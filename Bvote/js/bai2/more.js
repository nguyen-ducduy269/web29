// Hàm đệ quy
// Hàm đệ quy trong JavaScript chính là một hàm tự gọi lại chính nó.
function sayHello(count) {
  // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
  if (count <= 0) {
    return;
  }

  // xử lý logic cơ bản
  console.log("Hello world!");

  // phần đệ quy: gọi lại chính hàm sayHello
  sayHello(count - 1);
}
sayHello(5);
