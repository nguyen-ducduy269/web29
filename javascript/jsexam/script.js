// Xử lý số
// thể tích hình cầu
// r là bán kính hình cầu
function findSphericalVolume(r) {
  return (4 / 3) * Math.PI * r * r * r;
}
console.log(findSphericalVolume(6));

// Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
function findSumMiddle(a, b) {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(findSumMiddle(3, 8));

// Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
let sum = 0;
function divisorOne(number) {
  for (i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(divisorOne(10));

//Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n == 2 || n == 3) {
    return true;
  } else {
    for (let i = 3; i != Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        return false;
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
console.log(isPrime(4));

//Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào
function sumIsPrime(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumIsPrime(20));

// XỬ lý chuỗi
//Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ
arr = "HELLO wolrd";
function title(arr) {
  arr = arr.toLowerCase();
  arr = arr[0].toUpperCase() + arr.slice(1);
  let position = 1;
  let spaceIndex = arr.indexOf(" ");
  while (spaceIndex !== -1) {
    arr =
      arr.slice(0, spaceIndex + 1) +
      arr[spaceIndex + 1].toUpperCase() +
      arr.slice(spaceIndex + 2);
    position = spaceIndex + 2;
    spaceIndex = arr.indexOf(" ", position);
  }
  return arr;
}
console.log(title(arr));
// Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function parameterize(str) {
  let newStr = str.toLowerCase().split(" ");
  newStr = newStr.join("-");
  return newStr;
}
console.log(parameterize("HELLO world"));

//Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false
function isPalindrome(str) {
  let nonAlphabet = /[\W_]/g; // xóa tất cả phần tử không phải chữ cái
  let lowRegStr = str.toLowerCase().replace(nonAlphabet, ""); // thay thế chuỗi cũ trả về 1 chuỗi mới
  let reverseStr = lowRegStr.split("").reverse().join(""); // cắt chuỗi thành 1 mảng, đảo chiều và thêm dấu -
  return reverseStr === lowRegStr;
}
console.log(isPalindrome("Race car"));
console.log(isPalindrome("Hello world"));

//Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
function mutation(arr) {
  let string2 = arr[1].toLowerCase(); // chuyển chuỗi về dạng viết thường
  let string1 = arr[0].toLowerCase();
  // cho i chạy từ index0 cho đến index gần cuối của chuỗi 2
  for (let i = 0; i < string2.length; i++) {
    // nếu trong chuỗi 1 không chứa phần tử nào giống với chuỗi 2
    if (string1.indexOf(string2.charAt(i)) == -1) {
      return false;
    }
    return true;
  }
}
console.log(mutation(["Hello world", "how"]));
console.log(mutation(["Hello world", "you"]));

// Xử lý mảng
//Viết hàm loại bỏ các giá trị sai trong 1 mảng
let arr1 = [1, 2, 4, 7, null, 9, undefined, false, 5, NaN, 6, 0, ""];
function bouncer(arr1) {
  return arr1.filter(function (n) {
    return (
      n !== undefined &&
      n !== null &&
      n !== false &&
      n !== 0 &&
      n !== "" &&
      !isNaN(n)
    );
  });
}
console.log(bouncer(arr1));

//  Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
arr2 = ["aosidjasd", "akas", "asjdjader", "oak", "i", "110"];
function countLengthArray(value) {
  let max = 0;
  for (let value of arr2) {
    if (max < value.length) max = value.length;
  }
  return arr2.filter(function (value) {
    return value.length === max;
  });
}
console.log(countLengthArray(arr2));

// Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
function comparArray(str1, str2) {
  let result = [];
  for (let i of str1) {
    if (str2.indexOf(i) === -1) result.push(i);
  }
  for (let j of str2) {
    if (str1.indexOf(j) === -1) result.push(j);
  }
  return result;
}
console.log(comparArray([1, 2, 3], [2, 3, 4]));

// Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac.
function numberZicZac(m, n) {
  let result1 = [];
  for (let i = 0; i <= m; i++) {
    result1.push(i);
  }
  for (let j = m + 1; j <= n + m; j++) {
    result1.push(j);
  }
  return result1;
}
console.log(numberZicZac(3, 4));
