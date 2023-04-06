// viết function kiểm tra các cặp dấu ngoặc

let pretences = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function is_valid(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (pretences[str[i]]) {
      // nếu là kí tự mở ngoặc thì thêm vào hàm
      stack.push(str[i]);
    } else if (str[i] !== pretences[stack.pop()]) {
      // nếu là kí đóng ngoặc lấy ra phần tử cuối cùng so sánh nếu ko khớp thì trả về false
      return false;
    }
  }
  return stack.length === 0;
}

console.log(is_valid("[](){}"));
console.log(is_valid("[]()"));
console.log(is_valid(")))"));
console.log(is_valid("{]"));
console.log(is_valid("{]}"));
