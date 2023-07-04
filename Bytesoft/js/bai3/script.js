// Bài 3: (tạo thẻ thông qua innerHTML,k tạo trực tiếp) Tổng hợp 10 học sinh với các mục chính cần thống kê: số báo danh, tên, tuổi, giới tính, điểm môn văn, điểm môn toán, tổng điểm văn toán.
// a)	Tạo 1 bảng hiển thị danh sách các học sinh ,hiển thị ra học sinh có điểm toán cao nhất, văn cao nhất, tổng điểm cao nhất.
// b)	Tạo các nút sắp xếp các thí sinh trong bảng theo chiều tăng dần, giảm dần theo môn toán.
// c)	Tạo nút sắp sếp các thí sinh sinh trong bảng  theo chiều tăng dần hoặc giảm dần theo môn văn
// d)	Tạo nút sắp xếp các thí sinh sinh trong bảng  theo chiều giảm dần hoặc tăng dần theo tổng điểm.
// 	Sử dụng (for in) để tính độ dài object.
let listStudent = [
  {
    number: 1,
    name: "K",
    age: 20,
    gener: "Male",
    math: 8,
    literature: 5,
    sumScore: "",
  },
  {
    number: 2,
    name: "Y",
    age: 10,
    gener: "Female",
    math: 3,
    literature: 10,
    sumScore: "",
  },
  {
    number: 3,
    name: "P",
    age: 15,
    gener: "Female",
    math: 5,
    literature: 3,
    sumScore: "",
  },
  {
    number: 4,
    name: "A",
    age: 16,
    gener: "Male",
    math: 7,
    literature: 2,
    sumScore: "",
  },
  {
    number: 5,
    name: "B",
    age: 12,
    gener: "Male",
    math: 1,
    literature: 9,
    sumScore: "",
  },
  {
    number: 6,
    name: "Q",
    age: 11,
    gener: "Female",
    math: 2,
    literature: 4,
    sumScore: "",
  },
  {
    number: 7,
    name: "M",
    age: 19,
    gener: "Female",
    math: 9,
    literature: 6,
    sumScore: "",
  },
  {
    number: 8,
    name: "H",
    age: 18,
    gener: "Male",
    math: 4,
    literature: 7,
    sumScore: "",
  },
  {
    number: 9,
    name: "X",
    age: 17,
    gener: "Female",
    math: 6,
    literature: 8,
    sumScore: "",
  },
  {
    number: 10,
    name: "G",
    age: 13,
    gener: "Female",
    math: 10,
    literature: 1,
    sumScore: "",
  },
];

for (let i = 0; i < listStudent.length; i++) {
  let student = listStudent[i];
  let sum = student.math + student.literature;
  student.sumScore = sum;
}

const demo = document.getElementById("demo");
function bai3() {
  createTable();
  demo.appendChild(mathHighButton);
  demo.appendChild(literHighButton);
  demo.appendChild(sumHighButton);
  demo.appendChild(increaseMathButton);
  demo.appendChild(decreaseMathButton);
  demo.appendChild(incrLiteratureButton);
  demo.appendChild(decrLiteratureButton);
  demo.appendChild(incrSumScoreButton);
  demo.appendChild(decrSumScoreButton);
}

function createTable() {
  // tạo thẻ table
  const tableRender = document.createElement("table");
  // tạo thẻ tr
  const rowTitle = document.createElement("tr");
  // xét class cho thẻ tr
  rowTitle.setAttribute("class", "table-row");
  const colTitle1 = document.createElement("td");
  colTitle1.innerText = `Số thứ tự`;
  rowTitle.appendChild(colTitle1);

  const colTitle2 = document.createElement("td");
  colTitle2.innerText = `Tên`;
  rowTitle.appendChild(colTitle2);

  const colTitle3 = document.createElement("td");
  colTitle3.innerText = `Tuổi`;
  rowTitle.appendChild(colTitle3);

  const colTitle4 = document.createElement("td");
  colTitle4.innerText = `Giới tính`;
  rowTitle.appendChild(colTitle4);

  const colTitle5 = document.createElement("td");
  colTitle5.innerText = `Điểm toán`;
  rowTitle.appendChild(colTitle5);

  const colTitle6 = document.createElement("td");
  colTitle6.innerText = `Điểm văn`;
  rowTitle.appendChild(colTitle6);

  const colTitle7 = document.createElement("td");
  colTitle7.innerText = `Tổng điểm toán văn`;
  rowTitle.appendChild(colTitle7);

  // thêm tr vào trong table
  tableRender.appendChild(rowTitle);

  // duyệt qua mảng bằng map
  listStudent.map((item) => {
    const row = document.createElement("tr");
    row.setAttribute("class", "table-row");
    // tạo thẻ td
    const col1 = document.createElement("td");
    // gán giá trị cho thẻ td
    col1.innerText = `${item.number}`;
    // thêm thẻ td vào trong tr
    row.appendChild(col1);

    const col2 = document.createElement("td");
    col2.innerText = `${item.name}`;
    row.appendChild(col2);

    const col3 = document.createElement("td");
    col3.innerText = `${item.age}`;
    row.appendChild(col3);

    const col4 = document.createElement("td");
    col4.innerText = `${item.gener}`;
    row.appendChild(col4);

    const col5 = document.createElement("td");
    col5.innerText = `${item.math}`;
    row.appendChild(col5);

    const col6 = document.createElement("td");
    col6.innerText = `${item.literature}`;
    row.appendChild(col6);

    const col7 = document.createElement("td");
    col7.innerText = `${item.sumScore}`;
    row.appendChild(col7);

    tableRender.appendChild(row);
  });
  // thêm table vào thẻ có id demo
  console.log(typeof tableRender);
  demo.innerHTML = `${tableRender.outerHTML}`;
}

// học sinh có điểm toán cao nhất
const mathHighButton = document.createElement("button");
mathHighButton.innerHTML = "Max toán: ";
mathHighButton.classList.add("btn");
mathHighButton.setAttribute("onclick", "mathHighestScore()");

const literHighButton = document.createElement("button");
literHighButton.innerHTML = "Max văn: ";
literHighButton.classList.add("btn");
literHighButton.setAttribute("onclick", "literatureHighestScore()");

const sumHighButton = document.createElement("button");
sumHighButton.innerHTML = "Max tổng toán văn: ";
sumHighButton.classList.add("btn");
sumHighButton.setAttribute("onclick", "sumHighestScore()");

const increaseMathButton = document.createElement("button");
increaseMathButton.innerHTML =
  "Sắp xếp học sinh theo điểm toán chiều tăng dần: ";
increaseMathButton.classList.add("btn");
increaseMathButton.setAttribute("onclick", "increaseMath(listStudent)");

const decreaseMathButton = document.createElement("button");
decreaseMathButton.innerHTML =
  "Sắp xếp học sinh theo điểm toán chiều giảm dần: ";
decreaseMathButton.classList.add("btn");
decreaseMathButton.setAttribute("onclick", "decreaseMath(listStudent)");

const incrLiteratureButton = document.createElement("button");
incrLiteratureButton.innerHTML =
  "Sắp xếp học sinh theo điểm văn chiều tăng dần: ";
incrLiteratureButton.classList.add("btn");
incrLiteratureButton.setAttribute("onclick", "incrLiterature(listStudent)");

const decrLiteratureButton = document.createElement("button");
decrLiteratureButton.innerHTML =
  "Sắp xếp học sinh theo điểm văn chiều giảm dần: ";
decrLiteratureButton.classList.add("btn");
decrLiteratureButton.setAttribute("onclick", "decrLiterature(listStudent)");

const incrSumScoreButton = document.createElement("button");
incrSumScoreButton.innerHTML =
  "Sắp xếp học sinh theo tổng điểm toán văn chiều tăng dần: ";
incrSumScoreButton.classList.add("btn");
incrSumScoreButton.setAttribute("onclick", "incrSumScore(listStudent)");

const decrSumScoreButton = document.createElement("button");
decrSumScoreButton.innerHTML =
  "Sắp xếp học sinh theo tổng điểm toán văn chiều giảm dần: ";
decrSumScoreButton.classList.add("btn");
decrSumScoreButton.setAttribute("onclick", "decrSumScore(listStudent)");

//
function show(array) {
  /*   console.log("array", array); */
  demo.innerHTML = array;
}

function renderTable(params) {
  const tableRender = document.createElement("table");
  const rowTitle = document.createElement("tr");
  rowTitle.setAttribute("class", "table-row");

  const colTitle1 = document.createElement("td");
  colTitle1.innerText = `Số thứ tự`;
  rowTitle.appendChild(colTitle1);

  const colTitle2 = document.createElement("td");
  colTitle2.innerText = `Tên`;
  rowTitle.appendChild(colTitle2);

  const colTitle3 = document.createElement("td");
  colTitle3.innerText = `Tuổi`;
  rowTitle.appendChild(colTitle3);

  const colTitle4 = document.createElement("td");
  colTitle4.innerText = `Giới tính`;
  rowTitle.appendChild(colTitle4);

  const colTitle5 = document.createElement("td");
  colTitle5.innerText = `Điểm toán`;
  rowTitle.appendChild(colTitle5);

  const colTitle6 = document.createElement("td");
  colTitle6.innerText = `Điểm văn`;
  rowTitle.appendChild(colTitle6);

  const colTitle7 = document.createElement("td");
  colTitle7.innerText = `Tổng điểm toán văn`;
  rowTitle.appendChild(colTitle7);

  tableRender.appendChild(rowTitle);

  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const col1 = document.createElement("td");
  col1.innerText = `${params.number}`;
  row.appendChild(col1);

  const col2 = document.createElement("td");
  col2.innerText = `${params.name}`;
  row.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerText = `${params.age}`;
  row.appendChild(col3);

  const col4 = document.createElement("td");
  col4.innerText = `${params.gener}`;
  row.appendChild(col4);

  const col5 = document.createElement("td");
  col5.innerText = `${params.math}`;
  row.appendChild(col5);

  const col6 = document.createElement("td");
  col6.innerText = `${params.literature}`;
  row.appendChild(col6);

  const col7 = document.createElement("td");
  col7.innerText = `${params.sumScore}`;
  row.appendChild(col7);

  tableRender.appendChild(row);

  demo.innerHTML = `${tableRender.outerHTML}`;
}

// học sinh có điểm toán cao nhất
function mathHighestScore() {
  // khai báo biến trung gian
  let highestMath = -1;
  // tên biến trung gian
  let highestMathStudent = "";

  for (let i = 1; i < listStudent.length; i++) {
    const student = listStudent[i];
    if (student.math > highestMath) {
      highestMath = student.math;
      highestMathStudent = student;
    }
  }
  renderTable(highestMathStudent);
}

// học sinh có điểm văn cao nhất
function literatureHighestScore() {
  let highestLiterature = -1;
  let highestLiteratureStudent = "";

  for (let i = 1; i < listStudent.length; i++) {
    const student = listStudent[i];
    if (student.literature > highestLiterature) {
      highestLiterature = student.literature;
      highestLiteratureStudent = student;
    }
  }

  renderTable(highestLiteratureStudent);
}

// học sinh có điểm tổng toán văn cao nhất
function sumHighestScore() {
  let highestSum = -1;
  let highestSumStudent = "";

  for (let i = 1; i < listStudent.length; i++) {
    const student = listStudent[i];
    if (student.sumScore > highestSum) {
      highestSum = student.sumScore;
      highestSumStudent = student;
    }
  }

  renderTable(highestSumStudent);
}

// sắp xếp học sinh theo thứ tự có điểm toán từ thấp đến cao
function increaseMath(listStudent) {
  // dùng hàm sort để sắp xếp
  listStudent = listStudent.sort(function (a, b) {
    // dùng hàm sort để sắp xếp nếu 1 thì trả về giá trị lớn hơn, -1 là nhỏ hơn còn 0 là giá trị bằng nhau
    if (a.math > b.math) {
      return 1;
    }
    if (b.math > a.math) {
      return -1;
    }
    return 0;
  });

  createTable();
}

// sắp xếp học sinh theo thứ tự có điểm toán từ cao đến thấp
function decreaseMath(listStudent) {
  // dùng hàm sort để sắp xếp
  listStudent = listStudent.sort(function (a, b) {
    // dùng hàm sort để sắp xếp nếu 1 thì trả về giá trị lớn hơn, -1 là nhỏ hơn còn 0 là giá trị bằng nhau
    if (a.math < b.math) {
      return 1;
    }
    if (b.math < a.math) {
      return -1;
    }
    return 0;
  });

  createTable();
}

// sắp xếp học sinh theo thứ tự có điểm văn từ thấp đến cao
function incrLiterature(listStudent) {
  // dùng hàm sort để sắp xếp
  listStudent.sort(function (a, b) {
    // dùng hàm sort để sắp xếp nếu 1 thì trả về giá trị lớn hơn, -1 là nhỏ hơn còn 0 là giá trị bằng nhau
    if (a.literature > b.literature) {
      return 1;
    }
    if (b.literature > a.literature) {
      return -1;
    }
    return 0;
  });

  createTable();
}

// sắp xếp học sinh theo thứ tự có điểm văn từ cao đến thấp
function decrLiterature(listStudent) {
  // dùng hàm sort để sắp xếp
  listStudent.sort(function (a, b) {
    // dùng hàm sort để sắp xếp nếu 1 thì trả về giá trị lớn hơn, -1 là nhỏ hơn còn 0 là giá trị bằng nhau
    if (a.literature < b.literature) {
      return 1;
    }
    if (b.literature < a.literature) {
      return -1;
    }
    return 0;
  });

  createTable();
}

// sắp xếp học sinh theo thứ tự có tổng điểm toán văn từ thấp đến cao
function incrSumScore(listStudent) {
  listStudent.sort((a, b) => (a.sumScore > b.sumScore ? 1 : -1));
  createTable();
}

// sắp xếp học sinh theo thứ tự có tổng điểm toán văn từ cao đến thấp
function decrSumScore(listStudent) {
  listStudent.sort(function (a, b) {
    if (a.sumScore < b.sumScore) {
      return 1;
    }
    if (b.sumScore < a.sumScore) {
      return -1;
    }
    return 0;
  });

  createTable();
}
