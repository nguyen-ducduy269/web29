let newResult = "";
function chuoiLap(result) {
  for (let i = 0; i < 10; i++) {
    newResult += result;
  }
  return newResult;
}
console.log(chuoiLap("a"));

let newItem = "";
function chuoiLAp(item) {
  for (let i = 0; i < 10; i++) {
    if (i == 0) {
      newItem += item;
    } else {
      newItem += "-" + item;
    }
  }
  return newItem;
}
console.log(chuoiLAp("a"));

let newSpecial = "";
function chuoiLAP(special, n) {
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      newSpecial += special;
    } else {
      newSpecial += "-" + special;
    }
  }
  return newSpecial;
}
console.log(chuoiLAP("a", 5));

function tongCacSo() {
  let sum = 0;
  for (i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(tongCacSo());

function theTich(radius) {
  if (radius == 0) {
    return false;
  } else if (radius > 0) {
    return (4 / 3) * Math.PI * radius * radius * radius;
  }
}
console.log(theTich(3));

function tongBien(n1, n2) {
  let sum = 0;
  if (n1 < n2) {
    for (i = n1 + 1; i < n2; i++) {
      sum += i;
    }
  } else if (n2 > n1) {
    for (i = n2 + 1; i < n1; i++) {
      sum += i;
    }
  }
  return sum;
}
console.log(tongBien(3, 8));

function soNguyenTo(n) {
  if (n < 2) {
    return false;
  } else if (n == 2 || n == 3) {
    return true;
  } else {
    for (let i = 3; i != Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        return false;
        break;
      } else if (n % 2 == 0) {
        return false;
      } else if (n % 2 == 0 && n % 3 == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
console.log(soNguyenTo(7));

function tongBe(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (soNguyenTo(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(tongBe(10));

function tongUoc(a) {
  let sum = 0;
  if (a == 0) {
    return "0";
  } else if (a == 1) {
    return "1";
  } else {
    for (i = 1; i < a; i++) {
      if (a % i == 0) {
        sum += i;
      }
    }
  }
  return sum;
}
console.log(tongUoc(10));
