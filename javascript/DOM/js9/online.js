const todos = [
  {
    id: 1,
    completed: true,
    content: "Learning HTML",
  },
  {
    id: 2,
    completed: true,
    content: "Learning CSS",
  },
  {
    id: 3,
    completed: false,
    content: "Learning JavaScript",
  },
];
document.querySelector(".todo-list").innerHTML = todos
  .map(function (a) {
    if (a.completed) {
      return (
        "<div class='todo-item completed'>" +
        "<input type='checkbox' checked />" +
        a.content +
        "</div>"
      );
    } else {
      return (
        "<div class='todo-item'>" +
        "<input type='checkbox' />" +
        a.content +
        "</div>"
      );
    }
  })
  .join("");

function createTodoItem(todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  if (todo.completed) {
    li.classList.add("complete");
    checkbox.checked = true;
  }
  li.append(checkbox, todo.content);
  return li;
}
for (let item of todos) {
  const li = createTodoItem(item);
  document.querySelector(".todo-List").append(li);
}
