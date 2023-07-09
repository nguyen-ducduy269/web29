// Tạo bàn cờ caro có các hiệu ứng: xuất hiện, biến mất, toggle và thực hiện đánh X,O xen kẽ.
$(".hide").click(() => {
  $("table").hide();
});

$(".show").click(() => {
  $("table").show();
});

$(".toggle").click(() => {
  $("table").toggle();
});

let current = true;

$("td").click((e) => {
  if (!e.currentTarget.innerText) {
    e.currentTarget.innerText = current ? "X" : "O";
    current = !current;
  }
});
