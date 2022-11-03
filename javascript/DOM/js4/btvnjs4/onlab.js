/**
 * Chuyển đổi chuỗi thành dạng capitalize (chỉ viết hoa chữ cái đầu tiên)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `capitalize("  javascript is Fun ") => "Javascript is fun"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu
 */
function capitalize(str) {
  for (let key in str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
}
console.log(capitalize("  javascript is Fun "));

/**
 * Chuyển đổi chuỗi thành dạng title (viết hoa chữ cái đầu của mỗi từ)
 *
 * Lưu ý: Loại bỏ khoảng trắng ở 2 đầu nếu có
 *
 * Ví dụ: `title("javaScript iS fUn") => "Javascript Is Fun"`
 *
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi viết hoa chữ cái đầu mỗi từ
 */
function title(str) {
  str = str.toLocaleLowerCase();
  str = str[0].toUpperCase() + str.slice(1);
  let position = 1;
  let spaceIndex = str.indexOf(" ");
  while (spaceIndex !== -1) {
    str =
      str.slice(0, spaceIndex + 1) + //"javascript "
      str[spaceIndex + 1].toUpperCase() + //"I"
      str.slice(spaceIndex + 2); //"s fun"

    position = spaceIndex + 2;
    spaceIndex = str.indexOf(" ", position); // tìm kí tự dấu cách tiếp theo
  }
  return str;
}
console.log(title("javaScript iS fUn"));
/**
 * Đếm số ký tự nguyên âm xuất hiện trong chuỗi
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {number} Số ký tự nguyên âm có trong chuỗi
 */
function countVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let key of str.toLowerCase()) {
    if (vowels.includes(key)) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowel("javaScript iS fUn"));
/**
 * Tạo một mã màu ngẫu nhiên (hệ màu HEX)
 *
 * @return {string} Màu ngẫu nhiên
 */
function randomColor() {
  const HEX_SIZE = 6;
  let hex = "0123456789abcdef";
  let result = "#";
  for (let i = 0; i < HEX_SIZE; i++) {
    let random = Math.floor(Math.random() * 16);
    result += hex[random];
  }
  return result;
}
console.log(randomColor());
/**
 * Đảo ngược thứ tự các từ trong chuỗi
 *
 * Ví dụ: `reverseWords("The fox is comming for the chicken") => "chicken the for comming is fox The"`
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi đảo ngược
 */
function reverseWords(str) {
  let o = "";
  for (let i = str.length - 1; i >= 0; i--) {
    o += str[i];
  }
  return o;
}
console.log(reverseWords("The fox is comming for the chicken"));
/**
 * Tạo chuỗi URL (viết thường, các từ được nối với nhau bằng dấu -)
 *
 * Ví dụ: `parameterize("JavaScript is fun") => "javascript-is-fun"`
 * @param {string} str Chuỗi bất kỳ
 *
 * @returns {string} Chuỗi URL
 */
function parameterize(str) {
  str = str.split("").join("-");
  return str;
}
console.log(parameterize("JavaScript is fun"));
