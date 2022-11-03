let cot = 5,
  hang = 4;
let result = "";
for (let i = 0; i < cot; i++) {
  for (let j = 0; j < hang; j++) {
    result += "* ";
  }
  //Xuống dòng khi hết vòng lặp bên trong
  result += "\n";
}

//Xuống 2 dòng sang hình khác
result += "\n\n";

cot = hang = 4;
for (let i = 0; i < cot; i++) {
  for (let j = 0; j < hang; j++) {
    if (j <= i) {
      result += "* ";
    } else {
      result += "  ";
    }
  }
  result += "\n";
}

result += "\n\n";

for (let i = 0; i < cot; i++) {
  for (let j = 0; j < hang; j++) {
    if (i == 0 || i == cot - 1) {
      result += "* ";
    } else {
      if (j == 0 || j == hang - 1) {
        result += "* ";
      } else {
        result += "  ";
      }
    }
  }
  result += "\n";
}

result += "\n\n";

hang = cot = 7;
for (let i = 0; i < cot; i++) {
  for (let j = 0; j < hang; j++) {
    if (j == i || j == hang - i - 1) {
      result += "*";
    } else {
      result += " ";
    }
  }
  result += "\n";
}

console.log(result);
