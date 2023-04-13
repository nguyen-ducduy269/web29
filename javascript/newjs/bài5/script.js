/**
 * innerHTML - thay đổi nội dung HTMl của phần tử
 * textContent - thay đổi/ lấy nội dung là chữ của thẻ html
 * input, textarea - lấy được giá trị bằng thuộc tính .value dùng để lấy giá trị hoặc gán giá trị
 * template string - ` ` - ${} - chạy được js trong template string
 *
 */

const button = document.querySelector("button");
const demo = document.getElementsByClassName(".todo-list");
const ul = document.querySelector("ul");
const li = document.createElement("li");
let list = [];

button.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  if (inputValue == "") {
    alert("Bắt buộc phải nhập giá trị!");
    return false;
  }
  let item = {};
  item.task_name = inputValue;
  addValue(item);
});

function addValue(params) {
  if (!params) return false;
  list.push(params);
  renderList(list);
}

function renderList(params) {
  if (!params) return false;
  document.querySelector("ul").innerHTML = "";

  for (let item of params) {
    let { task_name, status } = item;

    let doneClass = "";
    if (status && status == "done") {
      doneClass = 'class="done"';
    }
    let li = document.createElement("li");
    li.innerHTML = `<span ${doneClass}>${task_name}</span>
    <button class="complete">Done</button> <button class="delete">Delete</button>`;

    li.querySelector("button.complete").addEventListener("click", () =>
      updateItem(status, item, li)
    );

    //
    li.querySelector("button.delete").addEventListener("click", () =>
      deleteItem(task_name, li, params)
    );
    document.querySelector("ul").appendChild(li);
  }
}

function updateItem(status, item, li) {
  if (status && status == "done") return false;
  item.status = "done";
  li.querySelector("span").classList.add("active");
}

function deleteItem(task_name, li, params) {
  let newArray = [];
  let confirmValue = confirm("Xóa nhớ?");

  if (confirmValue == true) {
    for (let currentItem of params) {
      if (currentItem.task_name != task_name) {
        newArray.push(currentItem);
      }
    }
    // .find()
    // .reduce()
    // .filter()

    // gán lại array cũ bằng giá trị array mới
    list = [...newArray];
    // xóa cái li
    li.remove();
    // trả lại array mới bằng rỗng
    newArray = "";
  }
}
