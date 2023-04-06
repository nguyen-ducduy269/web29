// viết phương trình giải ptrinh bậc 2

function quadratic_equation(a, b, c) {
  let d1;
  let d2;
  let d;
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
      d1 = d2 = d;
      d = -b / (2 * a);
      console.log("Phương trình có nghiệm duy nhất: ", d);
    } else {
      console.log("Phương trình vô nghiệm");
    }
  }
}
quadratic_equation(0, -2, 1);
quadratic_equation(0, -2, 1);
quadratic_equation(2, 8, 1);
