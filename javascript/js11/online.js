// hiển thị danh sách công việc, số lượng công việc cần hoàn thành
// thêm mới 1 công việc cần làm thông qua nhập vào form
// đánh dấu 1 công việc hoàn thành, xóa 1 công việc và xóa tất cả công việc
// lọc theo trạng thái
function createId() {
  let id = Math.floor(Math.random() * 10000);
  return id;
}
let todos = [
  {
    id: createId(),
    title: "Làm bài tập",
    status: true,
  },
  {
    id: createId(),
    title: "Chơi với bạn bè",
    status: false,
  },
  {
    id: createId(),
    title: "Sang nhà chị thăm người ốm",
    status: true,
  },
];
const todo_list = document.querySelector(".todo-list");
function createTodoItem(str) {
  todo_list.innerHTML = "";

  if (str.length == 0) {
    todo_list.innerHTML =
      '<p class="todos-empty">Không có công việc nào trong danh sách</p>';
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    todo_list.innerHTML += `
            <div class="todo-item ${a.status ? "active-todo" : ""}">
                <div class="todo-item-title">
                    <input type="checkbox" ${
                      a.status ? "checked" : ""
                    } onclick="toggleStatus(${a.id})">
                    <p>${a.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo(${
                      a.id
                    })">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `;
  }
}
const btn_add = document.querySelector(".btn-add");
btn_add.addEventListener("click", function () {
  let todoTt = todo_input.value;
  if (todoTt == "") {
    alert("Nội dung không được để trống");
    return;
  }
  let newTodo = {
    id: createId(),
    title: todoTt,
    status: false,
  };
  todos.push(newTodo);
  createTodoItem(todos);
  todo_input.value = "";
});

function toggleTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].status = !todos[i].status;
    }
  }
  createTodoItem(todos);
}
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }
  createTodoItem(todos);
}
