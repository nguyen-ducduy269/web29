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
