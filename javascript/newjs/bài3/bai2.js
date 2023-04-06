// nhập vào 1 số nguyên dương, nếu số đọc từ trái sang phải hoặc từ phải sang trái đều giữ được giá trị

function is_palindrome(x) {
  const y = x.split("");
  const z = x.split("").reverse("");
  console.log("y", y);
  console.log("z", z);
  if (y.join("") === z.join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(is_palindrome("1234"));
console.log(is_palindrome("131"));
console.log(is_palindrome("5"));
console.log(is_palindrome("13451"));
console.log(is_palindrome("10"));
console.log(is_palindrome("-12"));
console.log(is_palindrome("345"));
