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

// Tìm tất cả các thẻ <input type=’checkbox’> và hiển thị giá trị đang chọn (checked) trong các thẻ checkbox.
$(document).ready(() => {
  $('input[type="checkbox"]').each(function () {
    if ($(this).is(":checked")) {
      $("#show").append($(this).val());
    }
  });
});
