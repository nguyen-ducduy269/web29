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
