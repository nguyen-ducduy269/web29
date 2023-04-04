// Bài 3: (tạo thẻ thông qua innerHTML,k tạo trực tiếp) Tổng hợp 10 học sinh với các mục chính cần thống kê: số báo danh, tên, tuổi, giới tính, điểm môn văn, điểm môn toán, tổng điểm văn toán.
// a)	Tạo 1 bảng hiển thị danh sách các học sinh ,hiển thị ra học sinh có điểm toán cao nhất, văn cao nhất, tổng điểm cao nhất.
// b)	Tạo các nút sắp xếp các thí sinh trong bảng theo chiều tăng dần, giảm dần theo môn toán.
// c)	Tạo nút sắp sếp các thí sinh sinh trong bảng  theo chiều tăng dần hoặc giảm dần theo môn văn
// d)	Tạo nút sắp xếp các thí sinh sinh trong bảng  theo chiều giảm dần hoặc tăng dần theo tổng điểm.
// 	Hướng dẫn cách để sort 1 bảng:
// https://www.w3schools.com/howto/howto_js_sort_table.asp
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
    name: "A1",
    age: 20,
    gener: "Male",
    math: 8,
    literature: 5,
    sumScore: "",
  },
  {
    number: 2,
    name: "A2",
    age: 26,
    gener: "Female",
    math: 7,
    literature: 10,
    sumScore: "",
  },
  {
    number: 3,
    name: "A3",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
    sumScore: "",
  },
  {
    number: 4,
    name: "A4",
    age: 26,
    gener: "Male",
    math: 3,
    literature: 5,
    sumScore: "",
  },
  {
    number: 5,
    name: "A5",
    age: 20,
    gener: "Male",
    math: 1,
    literature: 2,
    sumScore: "",
  },
  {
    number: 6,
    name: "A6",
    age: 26,
    gener: "Female",
    math: 3,
    literature: 4,
    sumScore: "",
  },
  {
    number: 7,
    name: "A7",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
    sumScore: "",
  },
  {
    number: 8,
    name: "A8",
    age: 26,
    gener: "Male",
    math: 3,
    literature: 5,
    sumScore: "",
  },
  {
    number: 9,
    name: "A9",
    age: 26,
    gener: "Female",
    math: 3,
    literature: 4,
    sumScore: "",
  },
  {
    number: 10,
    name: "A10",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
    sumScore: "",
  },
];

for (let i = 1; i < listStudent.length; i++) {
  let student = listStudent[i];
  let sum = student.math + student.literature;
  student.sumScore = sum;
  // listStudent[i].sumScore = listStudent[i].math + listStudent[i].literature;
}

function bai3() {
  createTable();
  document.getElementById("demo").appendChild(mathHighButton);
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
  document.getElementById("demo").appendChild(tableRender);
}

const mathHighButton = document.createElement("button");
mathHighButton.innerHTML = "Max toán: ";
mathHighButton.classList.add("btn");
mathHighButton.setAttribute("onclick", "mathHighestScore()");
function mathHighestScore() {
  for (let i = 0; i < listStudent.length; i++) {
    for (let j = 0; j < listStudent.length; j++) {
      let max = 1;
      if (listStudent[i].math > max > listStudent[j].math) {
        listStudent[i].math = max;
        document.getElementById("demo").innerHTML = listStudent[i].name;
      }
    }
    return listStudent[i].name;
  }
}
