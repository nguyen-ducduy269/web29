// Bài 3: (tạo thẻ thông qua innerHTML,k tạo trực tiếp) Tổng hợp 10 học sinh với các mục chính cần thống kê: số báo danh, tên, tuổi, giới tính, điểm môn văn, điểm môn toán, tổng điểm văn toán.
// a)	Tạo 1 bảng hiển thị danh sách các học sinh ,hiển thị ra học sinh có điểm toán cao nhất, văn cao nhất, tổng điểm cao nhất.
// b)	Tạo các nút sắp xếp các thí sinh trong bảng theo chiều tăng dần, giảm dần theo môn toán.
// c)	Tạo nút sắp sếp các thí sinh sinh trong bảng  theo chiều tăng dần hoặc giảm dần theo môn văn
// d)	Tạo nút sắp xếp các thí sinh sinh trong bảng  theo chiều giảm dần hoặc tăng dần theo tổng điểm.
// 	Sử dụng (for in) để tính độ dài object.
let listStudent = [
  {
    number: "Số thứ tự",
    name: "Tên",
    age: "Tuổi",
    gener: "Giới tính",
    math: "Điểm toán",
    literature: "Điểm văn",
    sumScore: "Tổng điểm toán văn",
  },
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
    age: 26,
    gener: "Female",
    math: 3,
    literature: 10,
    sumScore: "",
  },
  {
    number: 3,
    name: "P",
    age: 20,
    gener: "Female",
    math: 5,
    literature: 6,
    sumScore: "",
  },
  {
    number: 4,
    name: "A",
    age: 26,
    gener: "Male",
    math: 7,
    literature: 1,
    sumScore: "",
  },
  {
    number: 5,
    name: "B",
    age: 20,
    gener: "Male",
    math: 1,
    literature: 9,
    sumScore: "",
  },
  {
    number: 6,
    name: "Q",
    age: 26,
    gener: "Female",
    math: 2,
    literature: 4,
    sumScore: "",
  },
  {
    number: 7,
    name: "M",
    age: 20,
    gener: "Female",
    math: 9,
    literature: 6,
    sumScore: "",
  },
  {
    number: 8,
    name: "H",
    age: 26,
    gener: "Male",
    math: 4,
    literature: 7,
    sumScore: "",
  },
  {
    number: 9,
    name: "X",
    age: 26,
    gener: "Female",
    math: 6,
    literature: 8,
    sumScore: "",
  },
  {
    number: 10,
    name: "G",
    age: 20,
    gener: "Female",
    math: 10,
    literature: 1,
    sumScore: "",
  },
];

for (let i = 1; i < listStudent.length; i++) {
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
}

function createTable() {
  // tạo thẻ table
  const tableRender = document.createElement("table");
  // tạo thẻ tr
  const row = document.createElement("tr");
  // xét class cho thẻ tr
  row.setAttribute("class", "table-row");

  // duyệt qua mảng bằng map
  listStudent.map((item) => {
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
  });

  // thêm tr vào trong table
  tableRender.appendChild(row);
  // thêm table vào thẻ có id demo
  console.log(typeof tableRender);
  demo.innerHTML = `${tableRender.outerHTML}`;
}

// học sinh có điểm toán cao nhất
const mathHighButton = document.createElement("button");
mathHighButton.innerHTML = "Max toán: ";
mathHighButton.classList.add("btn");
mathHighButton.setAttribute("onclick", "mathHighestScore()");

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

  const table = document.createElement("table");
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const col1 = document.createElement("td");
  col1.innerText = `${highestMathStudent.number}`;
  row.appendChild(col1);

  const col2 = document.createElement("td");
  col2.innerText = `${highestMathStudent.name}`;
  row.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerText = `${highestMathStudent.age}`;
  row.appendChild(col3);

  const col4 = document.createElement("td");
  col4.innerText = `${highestMathStudent.gener}`;
  row.appendChild(col4);

  const col5 = document.createElement("td");
  col5.innerText = `${highestMathStudent.math}`;
  row.appendChild(col5);

  const col6 = document.createElement("td");
  col6.innerText = `${highestMathStudent.literature}`;
  row.appendChild(col6);

  const col7 = document.createElement("td");
  col7.innerText = `${highestMathStudent.sumScore}`;
  row.appendChild(col7);

  table.appendChild(row);
  demo.innerHTML = `Học sinh có điểm toán cao nhất: ${table.outerHTML}`;
}

// học sinh có điểm văn cao nhất
const literHighButton = document.createElement("button");
literHighButton.innerHTML = "Max văn: ";
literHighButton.classList.add("btn");
literHighButton.setAttribute("onclick", "literatureHighestScore()");

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

  const table = document.createElement("table");
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const col1 = document.createElement("td");
  col1.innerText = `${highestLiteratureStudent.number}`;
  row.appendChild(col1);

  const col2 = document.createElement("td");
  col2.innerText = `${highestLiteratureStudent.name}`;
  row.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerText = `${highestLiteratureStudent.age}`;
  row.appendChild(col3);

  const col4 = document.createElement("td");
  col4.innerText = `${highestLiteratureStudent.gener}`;
  row.appendChild(col4);

  const col5 = document.createElement("td");
  col5.innerText = `${highestLiteratureStudent.math}`;
  row.appendChild(col5);

  const col6 = document.createElement("td");
  col6.innerText = `${highestLiteratureStudent.literature}`;
  row.appendChild(col6);

  const col7 = document.createElement("td");
  col7.innerText = `${highestLiteratureStudent.sumScore}`;
  row.appendChild(col7);

  table.appendChild(row);
  demo.innerHTML = `Học sinh có điểm văn cao nhất: ${table.outerHTML}`;
}

// học sinh có điểm tổng toán văn cao nhất
const sumHighButton = document.createElement("button");
sumHighButton.innerHTML = "Max tổng toán văn: ";
sumHighButton.classList.add("btn");
sumHighButton.setAttribute("onclick", "sumHighestScore()");

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

  const table = document.createElement("table");
  const row = document.createElement("tr");
  row.setAttribute("class", "table-row");

  const col1 = document.createElement("td");
  col1.innerText = `${highestSumStudent.number}`;
  row.appendChild(col1);

  const col2 = document.createElement("td");
  col2.innerText = `${highestSumStudent.name}`;
  row.appendChild(col2);

  const col3 = document.createElement("td");
  col3.innerText = `${highestSumStudent.age}`;
  row.appendChild(col3);

  const col4 = document.createElement("td");
  col4.innerText = `${highestSumStudent.gener}`;
  row.appendChild(col4);

  const col5 = document.createElement("td");
  col5.innerText = `${highestSumStudent.math}`;
  row.appendChild(col5);

  const col6 = document.createElement("td");
  col6.innerText = `${highestSumStudent.literature}`;
  row.appendChild(col6);

  const col7 = document.createElement("td");
  col7.innerText = `${highestSumStudent.sumScore}`;
  row.appendChild(col7);

  table.appendChild(row);
  demo.innerHTML = `Học sinh có tổng điểm cao nhất: ${table.outerHTML}`;
}

const increaseMathButton = document.createElement("button");
increaseMathButton.innerHTML = "Điểm toán theo chiều tăng dần: ";
increaseMathButton.classList.add("btn");
increaseMathButton.setAttribute("onclick", "increaseMath(listStudent)");

function increaseMath(listStudent) {
  // dùng hàm sort để sắp xếp
  listStudent.sort(function (a, b) {
    if (a.math > b.math) {
      return 1;
    }
    if (b.math > a.math) {
      return -1;
    }
    return 0;
  });

  for (let i = 0; i < listStudent.length; i++) {
    const studentElement = document.createElement("p");
    studentElement.innerHTML = `Name: ${listStudent[i].name}, Math score: ${listStudent[i].math}`;
    demo.appendChild(studentElement);
  }
  console.log(listStudent);
}
