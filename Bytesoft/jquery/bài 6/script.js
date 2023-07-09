// Tìm tất cả các thẻ <input type=’text’> chưa nhập dữ liệu. Định nghĩa và gắn class error cho thẻ đó.
$(document).ready(function () {
  $("#text-btn").click(function () {
    let count = 0;
    $('input[type="text"]').each(function () {
      if ($(this).val() === "") {
        count++;
        $(this).addClass("error");
      }
    });
    alert("Có " + count + "thẻ <input type=’text’> chưa nhập dữ liệu");
  });
});
