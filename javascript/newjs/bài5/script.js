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
    let li = document.createElement("li");
    li.innerHTML = `<span ${doneClass}>${task_name}</span>
    <button>Done</button>`;

    li.querySelector("button").addEventListener("click", () => {
      if (status && status == "done") return false;
      item.status = "done";
      li.querySelector("span").classList.add("active");
    });

    document.querySelector("ul").appendChild(li);
  }
}
/**
 * B1: sau khi ấn done thì chữ bị gạch ngang và cập nhật bên trong list
 * B2: render lại list
 * done rồi ko cho click nữa
 * done rồi thì tên mặc định bị gạch
 */
