/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
arr = [1, 2, 3, 4, 5];
function min(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
}
console.log(min(arr));
/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(max(arr));
/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return [min, max];
}
console.log(minMax([1, 2, 7, 6]));
/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = arr[x];
}

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let result = [];
  for (let value of arr1) {
    if (arr2.includes(value)) result.push(value);
  }
  return result;
}
console.log(intersection[(1, 2, 3)], [3, 4, 5]);

/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {}

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  let temp = {};
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    if (temp[value]) {
      arr.splice(index, 1);
      index--;
    } else {
      temp[value] = true;
    }
  }
}

/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {}

/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
function shuffle(arr) {}

/**
 * @typedef {object} student
 * @property {number} id - Mã định danh
 * @property {string} firstname - Họ
 * @property {string} lastname - Tên
 * @property {string} gender - Giới tính
 * @property {number} point - Điểm tổng kết
 */

/**
 * @typedef {object} studentWithFullname
 */

/**
 *
 * @param {student[]} students - Danh sách sinh viên
 *
 * @return {student[]}
 */
function fullname(students) {}
