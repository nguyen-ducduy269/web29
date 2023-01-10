const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Duy", "Mai", "Long", "Manh", "Long", "Manh"];
// nối chuỗi
const children = arr1.concat(arr2);
document.getElementById("demo").innerHTML = children;
const chill = children.concat(arr3);
document.getElementById("one").innerHTML = chill;
// trả về hàm gốc
let chil = arr1.constructor;
console.log(chil);
// copy phần tử
document.getElementById("one").innerHTML = arr3.copyWithin(2, 0); // cop từ đầu xuống cuối
document.getElementById("hai").innerHTML = arr3.copyWithin(0, 2); // cop từ cuối lên
document.getElementById("ba").innerHTML = arr3.copyWithin(2, 0, 2); // cop đầu và cuối
