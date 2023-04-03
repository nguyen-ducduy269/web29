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
    number: 1,
    name: "Duy1",
    age: 20,
    gener: "Male",
    math: 8,
    literature: 5,
  },
  {
    number: 2,
    name: "Lan1",
    age: 26,
    gener: "Female",
    math: 7,
    literature: 10,
  },
  {
    number: 3,
    name: "Tuyết1",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
  },
  {
    number: 4,
    name: "Mạnh1",
    age: 26,
    gener: "Male",
    math: 3,
    literature: 5,
  },
  {
    number: 5,
    name: "Duy2",
    age: 20,
    gener: "Male",
    math: 1,
    literature: 2,
  },
  {
    number: 6,
    name: "Lan2",
    age: 26,
    gener: "Female",
    math: 3,
    literature: 4,
  },
  {
    number: 7,
    name: "Tuyết2",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
  },
  {
    number: 8,
    name: "Mạnh2",
    age: 26,
    gener: "Male",
    math: 3,
    literature: 5,
  },
  {
    number: 9,
    name: "Lan3",
    age: 26,
    gener: "Female",
    math: 3,
    literature: 4,
  },
  {
    number: 10,
    name: "Tuyết3",
    age: 20,
    gener: "Female",
    math: 8,
    literature: 6,
  },
];
console.log(listStudent[0].name);

function bai3() {
  show(list);
}

const list = `
  <table>
    <tr>
      <th>Số báo danh</th>
      <th>Tên</th>
      <th>Tuổi</th>
      <th>Giới tính</th>
      <th>Điểm môn Toán</th>
      <th>Điểm môn Văn</th>
      <th>Tổng điểm Toán Văn</th>
    </tr>
    <tr>
      <td>${listStudent[0].number}</td>
      <td>${listStudent[0].name}</td>
      <td>${listStudent[0].age}</td>
      <td>${listStudent[0].gener}</td>
      <td>${listStudent[0].math}</td>
      <td>${listStudent[0].literature}</td>
      <td>${listStudent[0].name}</td>
    </tr>
    <tr>
      <td>${listStudent[1].number}</td>
      <td>${listStudent[1].name}</td>
      <td>${listStudent[1].age}</td>
      <td>${listStudent[1].gener}</td>
      <td>${listStudent[1].math}</td>
      <td>${listStudent[1].literature}</td>
      <td>${listStudent[1].name}</td>
    </tr>
    <tr>
      <td>${listStudent[2].number}</td>
      <td>${listStudent[2].name}</td>
      <td>${listStudent[2].age}</td>
      <td>${listStudent[2].gener}</td>
      <td>${listStudent[2].math}</td>
      <td>${listStudent[2].literature}</td>
      <td>${listStudent[2].name}</td>
    </tr>
    <tr>
      <td>${listStudent[3].number}</td>
      <td>${listStudent[3].name}</td>
      <td>${listStudent[3].age}</td>
      <td>${listStudent[3].gener}</td>
      <td>${listStudent[3].math}</td>
      <td>${listStudent[3].literature}</td>
      <td>${listStudent[3].name}</td>
    </tr>
    <tr>
      <td>${listStudent[4].number}</td>
      <td>${listStudent[4].name}</td>
      <td>${listStudent[4].age}</td>
      <td>${listStudent[4].gener}</td>
      <td>${listStudent[4].math}</td>
      <td>${listStudent[4].literature}</td>
      <td>${listStudent[4].name}</td>
    </tr>
    <tr>
      <td>${listStudent[5].number}</td>
      <td>${listStudent[5].name}</td>
      <td>${listStudent[5].age}</td>
      <td>${listStudent[5].gener}</td>
      <td>${listStudent[5].math}</td>
      <td>${listStudent[5].literature}</td>
      <td>${listStudent[5].name}</td>
    </tr>
    <tr>
      <td>${listStudent[6].number}</td>
      <td>${listStudent[6].name}</td>
      <td>${listStudent[6].age}</td>
      <td>${listStudent[6].gener}</td>
      <td>${listStudent[6].math}</td>
      <td>${listStudent[6].literature}</td>
      <td>${listStudent[6].name}</td>
    </tr>
    <tr>
      <td>${listStudent[7].number}</td>
      <td>${listStudent[7].name}</td>
      <td>${listStudent[7].age}</td>
      <td>${listStudent[7].gener}</td>
      <td>${listStudent[7].math}</td>
      <td>${listStudent[7].literature}</td>
      <td>${listStudent[7].name}</td>
    </tr>
    <tr>
      <td>${listStudent[8].number}</td>
      <td>${listStudent[8].name}</td>
      <td>${listStudent[8].age}</td>
      <td>${listStudent[8].gener}</td>
      <td>${listStudent[8].math}</td>
      <td>${listStudent[8].literature}</td>
      <td>${listStudent[8].name}</td>
    </tr>
    <tr>
      <td>${listStudent[9].number}</td>
      <td>${listStudent[9].name}</td>
      <td>${listStudent[9].age}</td>
      <td>${listStudent[9].gener}</td>
      <td>${listStudent[9].math}</td>
      <td>${listStudent[9].literature}</td>
      <td>${listStudent[9].name}</td>
    </tr>
  </table>
  `;
function show(list) {
  demo.innerHTML = list;
}
