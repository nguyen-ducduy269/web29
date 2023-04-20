const api = "https://64412445792fe886a89f7d7d.mockapi.io/";
let end_points = {
  student: "students",
  class: "class",
  subject: "subjects",
};

/**
 * ES5 fetch
 * fetch("đường dẫn api", {
  method: "TÊN PHƯƠNG THỨC",
  headers: ,
  COntent Type: ,
}).then(function(){
   // check response status
    if(response.ok){
    response.json()
}).then(function(data){
    // thao tác xử lý dữ liệu
});
 */

fetch(api + end_points.student, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("data", data);
  });

/**
 *
 * ES6 fetch
 * async / await
 *async function fetchData(){
    const response = await fetch("đường dẫn api", {
        method:"TÊN PHƯƠNG THỨC",
    })
    const data = await response.json();
    // 
    // các thao tác còn lại
    //
    await handleData(data);
    return data;
}
 * function handleData(params) {
  console.log(params);
}

 * 
 */

async function fetchData() {
  try {
    // lấy api students
    const response = await fetch(api + end_points.student, {
      method: "GET",
    });
    // chuyển về dạng object
    const data = await response.json();
    // chạy hàm handleData
    await handleData(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const main = document.querySelector("main");
async function handleData(params) {
  console.log(params);

  params.map(function (student) {
    // tạo 1 biến có chứa các thuộc tính của student
    let { id, name, phone_number, email, address } = student;
    let tr = document.createElement("tr");
    // gán từng thuộc tính đó và td
    tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${phone_number}</td>
        <td>${email}</td>
        <td>${address}</td>
    `;
    // bắt sự kiện
    tr.addEventListener("click", () => {
      get_data_detail(student);
    });
    const table = document.querySelector("table");
    table.appendChild(tr);
    main.appendChild(table);
  });
}
function get_data_detail(params) {
  let { id } = params;
  studentHandle(id);
}

async function studentHandle(id) {
  try {
    const response = await fetch(api + end_points.student + `/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    await renderStudent(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function renderStudent(params) {
  // gán giá trị cho params
  let { name, address, email, phone_number } = params;
  // mỗi lần bấm sẽ hiện lên HTML giá trị của phần tử vừa bấm
  document.querySelector(
    "h2"
  ).innerHTML = `name: ${name}, email: ${email}, phone: ${phone_number}, address: ${address}`;
}
fetchData();

/**
 * POST
 * 
 * 
 * async function fetchData(){
    const response = await fetch("đường dẫn api", {
        method:"POST",
        body: JSON.stringify(data gửi lên)
    })
    // 
    // các thao tác còn lại
    //
    await handleAfterPost(data);
}
 * 
 */

const button = main.querySelector("button");
button.addEventListener("click", () => {
  const name = document.getElementsByTagName(`input[name="name"]`).value;
  const phone_number = document.getElementsByTagName(
    `input[name="phone_number"]`
  ).value;
  const email = document.getElementsByTagName(`input[name="email"]`).value;
  const address = document.getElementsByTagName(`input[name="address"]`).value;

  let inputValue = {
    name: name,
    phone_number: phone_number,
    email: email,
    address: address,
  };
  console.log("inputvalue", inputValue);

  addStudent(inputValue);
});

async function addStudent(params) {
  const response = await fetch(api + end_points.student, {
    method: "POST",
    body: JSON.stringify(params),
  });
  await console.log("Done");
}
