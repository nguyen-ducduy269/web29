/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
  for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
}
printOddNumbers();
/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();
/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 * Biến lưu giá trị tính tổng sau mỗi vòng lặp
 */
function sumOfNumbers(n) {
  let sum = 0; // với tổng = 0, tích = 1
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNumbers(10);
/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  console.log(sum);
}
sumOfOddNumbers(1, 10);
/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log(i);
    }
  }
}
divisor(10);
/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
  let count = 0; //đếm số lần
  let paper = 0.1; //độ dày ban đầu
  let thick = 1000 * thickness; //độ dày mong muốn
  while (paper < thick) {
    paper *= 2;
    count++;
  }
  return count;
}
console.log("So lan gap la:", countFolding(12));
/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
  let count = 0;
  while (dad > 2 * son) {
    count++;
    son++;
    dad++;
  }
  return count;
}
console.log(countYears(54, 20));
//Tìm số chân gà và chó, vừa gà vừa chóa bó lại cho tròn 36 con 100 chân chẵn
function countLegs() {
  let dog = 0;
  const dogLegs = 4;
  const chickenLegs = 2;
  const sum = 36;
  while (dogLegs * dog + (sum - dog) * chickenLegs < 100) {
    dog++;
  }
  console.log(sum - dog, dog);
}
countLegs();
