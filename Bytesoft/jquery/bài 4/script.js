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
