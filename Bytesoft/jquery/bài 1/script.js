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

// Tìm tất cả các thẻ <input type=’checkbox’> và hiển thị giá trị đang chọn (checked) trong các thẻ checkbox.
$(document).ready(function () {
  var result = "";
  $("#show").click(function () {
    $("input:checkbox").each(function () {
      if ($(this).is(":checked")) {
        result += $(this).val();
      }
    });
    alert("Giá trị đang chọn là: " + result);
  });
});

// Tìm tất cả các thẻ <option> của thẻ <select id=”country”>
$(document).ready(function () {
  let option = "";
  const select = $("option");
  $(".country").click(function () {
    $("option").each(function () {
      option += $(this).val();
    });
    alert(
      "Thẻ select có số lượng thẻ option là: " +
        select.length +
        " và có giá trị là: " +
        option
    );
  });
});

// Tìm các thẻ <img> đặt trong <div id=”menu”>
$(document).ready(function () {
  let count = 0;
  $("#image").click(function () {
    $("#menu")
      .children()
      .each(function () {
        count += 1;
      });
    alert("Số lượng thẻ img trong đặt trong <div id=”menu”> là: " + count);
  });
});

// Tìm tất cả các thẻ <input type=’text’> chưa nhập dữ liệu. Định nghĩa và gắn class error cho thẻ đó.
$(document).ready(function () {
  $("#text-btn").click(function () {
    $('input[type="text"]').each(function () {
      if ($(this).val() === "") {
        $(this).addClass("error");
      }
    });
  });
});
