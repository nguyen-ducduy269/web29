// viết phương trình giải ptrinh bậc 2
// destruring object - lấy giá trị của 1 chuỗi bên ngoài bằng cách gán params, bên trong func truyền params là 1 object chứa các key và value tg ứng với object truyền vào
function quadratic_equation(a, b, c) {
  let d1;
  let d2;
  let d;
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    console.log("Giá trị không hợp lệ");
    return;
  }
  if (a == 0) {
    d = -c / b;
    console.log("Phương trình có nghiệm duy nhất: ", d);
  }
  if (a != 0) {
    let delta = b * b - 4 * a * c;
    console.log("delta", delta);

    if (delta > 0) {
      d1 = (-b + Math.sqrt(delta)) / (2 * a);
      d2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log("Phương trình có 2 nghiệm là: ", d1, d2);
    } else if (delta == 0) {
      d = -b / (2 * a);
      console.log("Phương trình có nghiệm duy nhất: ", d);
    } else {
      console.log("Phương trình vô nghiệm");
    }
  }
}
quadratic_equation(0, -2, 1);
quadratic_equation(3, 5, 9);
quadratic_equation(2, 8, 1);
quadratic_equation(2, 8, "abcdefgh");
