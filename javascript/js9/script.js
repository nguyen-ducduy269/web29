const fruitList = [
  "apple",
  "banana",
  "tomato",
  "watermelon",
  "strawberry",
  "cherry",
  "coconut",
];
//tạo ra 1 danh sách ul,li
//hiển thị lên div #app
const list = fruitList
  .map(function (fruit) {
    return "<li>" + fruit + "</li>";
  })
  .join("");
const html = "<ul>" + list + "</ul>";
const app = document.querySelector("#app");
app.innerHTML = html;

function createItem(fruit) {
  const li = document.createElement("li");
  li.innerText = fruit;
  return li;
}
console.log(createItem("Apple"));

for (let fruit of fruitList) {
  const li = createItem(fruit);
  document.querySelector("#fruit-list").append(li);
}
