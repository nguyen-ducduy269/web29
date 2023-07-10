// Thay đổi kiểu dáng của các thành phần web
// • Màu nền các hàng của bảng (thường và hover)
// • Ảnh nền và đường kẻ cho các vùng
// • Nội dung các thông báo hay tùy biến

$("tr").hover(function () {
  $(this).css("background-color", "aqua");
});

$("tr").mouseleave(function () {
  $(this).css("background-color", "white");
});

$(".image").hover(function () {
  $(this).css("border", "4px groove aqua");
  $("img").css("width", "100%");
  $("img").css("height", "100%");
});

$(".image").mouseleave(function () {
  $(this).css("border", "1px solid black");
  $("img").css("width", "70%");
  $("img").css("height", "60%");
});

let count = 0;
$("button").click(function () {
  count++;
  alert("Đã bấm click " + count + " lần.");
});
