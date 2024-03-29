// Bài 1: Tìm số lớn nhất trong mảng
// function maxNumber(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let numbers = [1, 2, 3, 4];
// console.log("so lon nhat la: " + maxNumber(numbers));

// Bài 2: Tìm số nhỏ nhất trong mảng
// function minNumber(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log("so nho nhat la: " + minNumber(numbers));

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// function divideTwo(arrays) {
//   return arrays.map((e) => e % 2);
// }
// console.log(divideTwo([4, 2, 5, 6, 2, 7]));

// function divideTwo(arrays) {
//   let res = [];
//   for (let i = 0; i < arrays.length; i++) {
//     res.push(arrays[i] % 2);
//   }
//   return res;
// }
// console.log(divideTwo([4, 2, 5, 6, 2, 7]));
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
// function repeatString(str) {
//   let repeat = "";
//   for (i = 0; i < 10; i++) {
//     repeat += str;
//   }
//   return repeat;
// }
// console.log(repeatString("Hello me! "));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// function repeatBlock(strg) {
//   let repeat = "";
//   for (i = 0; i < 10; i++) {
//     repeat += strg + "-";
//   }
//   return repeat;
// }
// console.log(repeatBlock("ab").slice(0, -1));
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

// Bài 6: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// function checkElementExist(arrays, value) {
//   if (arrays.indexOf(value) > -1) return true;
//   else return false;
// }
// console.log(checkElementExist([1, 2, 3, 4, 5], 6));
// console.log(checkElementExist([1, 2, 3, 4, 5], 3));
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false

// Bài 7: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// function getElementGreater(arrays, value) {
//   let res = [];
//   for (let i = 0; i < arrays.length; i++) {
//     if (arrays[i] > value) {
//       res.push(arrays[i]);
//     }
//   }
//   return res;
// }
// console.log(getElementGreater([1, 2, 3, 4, 5], 3));
// console.log(getElementGreater([1, 2, 3, 4, 5], 5));
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

// Bài 8: Viết function để tạo mã màu HEX ngẫu nhiên.
// function randomHexCode() {
//   let colors = "#";
//   let value = "0123456789ABCDEF";
//   for (let i = 0; i < 6; i++) {
//     colors += value[Math.floor(Math.random() * 16)];
//   }
//   return colors;
// }
// console.log(randomHexCode());
// console.log(randomHexCode());
// randomHexCode() => #728a98
// randomHexCode() => #a72938

// Bài 9: Viết function để tạo mã màu RGB ngẫu nhiên.
//function randomRBG(min, max) {
//  return Math.floor(Math.random() * (max - min + 1) + min);
// max - min + 1 : đảm bảo giá trị nhận được là 1 số nguyên dương chấp nhận được trong khoảng min max
// + min: đảm bảo giá trị nhận được nằm trong phạm vi min max
//}
// function randomRgbCode() {
//   let r = randomRBG(0, 255);
//   let g = randomRBG(0, 255);
//   let b = randomRBG(0, 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }
// console.log(randomRgbCode());
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

// Bài 10. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// function sortStudent(array) {
//   array.sort(function (a, b) {
//     // sort: sắp xếp mảng theo thứ tự tăng dần
//     return b.localeCompare(a);
//     // localeCompare: sắp xếp mảng theo thứ tự ngược lại
//   });
//   return array;
// }
// console.log(sortStudent(["Nam", "Duy", "Mạnh"]));
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
// Bài 11: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function shuffle(arry, value) {
  for (let i = 0; i < arry.length; i++) {
    return arry.localeCompare(value[i]);
  }
}
console.log(shuffle([1, 2, 3, 4, 5]));
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
// Bài 12: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
function symmetricDifference(a, b) {
  let arr = [];
  a.filter((el) => !b.includes(el)).forEach((el) => arr.push(el));
  b.filter((el) => !a.includes(el)).forEach((el) => arr.push(el));
  return arr;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
// Bài 13: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
function union(a, b) {
  let arrays = [];
  a.filter((el) => !arrays.includes(el)).forEach((el) => arrays.push(el));
  b.filter((el) => !arrays.includes(el)).forEach((el) => arrays.push(el));
  return arrays;
}
console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 6]));
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
