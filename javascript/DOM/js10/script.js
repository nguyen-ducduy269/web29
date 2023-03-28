let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
const boxes = document.querySelector(".boxes");
const points = document.querySelector(".points");
const btn = document.querySelector("#btn");

function createBox(color) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.backgroundColor = color;
  div.addEventListener("click", () => {
    div.remove();
    points.innerText = boxes.children.length;
  });
  return div;
}

function render() {
  for (let color of colors) {
    const div = createBox(color);
    boxes.append(div);
  }
  points.innerText = boxes.children.length;
}
btn.onclick = render;
render();

// default event
// propagation
// delegation
// capture / bubble
// các loại event khác
