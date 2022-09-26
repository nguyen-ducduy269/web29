let a = 1,
  b = (a * 2) / 2,
  c = a-- + b++,
  d = "-0";
console.log(a - b - c - d);
console.log(a + b - c - d);
console.log(a++ - (b++ / c) * d);
console.log(--a + -b / c + d);
console.log(d - --a - ++b * c);

let q = 0,
  w = !!q,
  e = q || (!b && 0);
console.log(q && w && e);
console.log(q || w || e);
console.log(!q || w) && e;

let age = 11;
if (age >= 18) {
  console.log("Bạn đã đủ tuổi truy cập trang web");
} else {
  console.log("Bạn chưa đủ tuổi! Next !!!");
}

let weekend = false;
let inrelationship = true;
if (weekend) {
  if (inrelationship) {
    console.log("Rủ ngyeu đi chơi");
  } else {
    console.log("Ở nhà chơi game.");
  }
} else {
  console.log("Cần phải đi học");
}

let soNamKinhNghiem = 20;
if ((soNamKinhNghiem = 0)) {
  console.log("Tra luong 1tr5");
} else if (soNamKinhNghiem < 5) {
  console.log("Tra luong 5tr");
} else if (soNamKinhNghiem < 10) {
  console.log("Tra luong 7tr");
} else {
  console.log("Tra luong 20tr");
}
