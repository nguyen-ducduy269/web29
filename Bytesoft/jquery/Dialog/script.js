// error
$(".error").click(function () {
  $("#error").show();
});
$("#error").on("click", "i", function () {
  $(this).parent().parent().hide();
});

// sign in
$(".sign-in").click(function () {
  $("#sign-in").show();
});

$("#sign-in").on("click", "i", function () {
  $(this).parent().parent().hide();
  window.location.reload();
});

$("#log-in").click(function () {
  if (
    ($("#user-name").val() == "" && $("#password").val() == "") ||
    ($("#user-name").val() == null && $("#password").val() == null)
  ) {
    $("#user-name").addClass("active");
    $("#password").addClass("active");
    $(".notification").text("Sai thông tin đăng nhập!");
  } else if (
    ($("#user-name").val() == "" && $("#password").val() != "") ||
    ($("#user-name").val() == null && $("#password").val() != null)
  ) {
    $("#user-name").addClass("active");
    $(".notification").text("Chưa nhập tài khoản!");
  } else if (
    ($("#user-name").val() != "" && $("#password").val() == "") ||
    ($("#user-name").val() != null && $("#password").val() == null)
  ) {
    $("#password").addClass("active");
    $(".notification").text("Chưa nhập mật khẩu!");
  } else {
    $(".notification").text("Chúc mừng, bạn đã đăng nhập thành công!");
  }
});

// send mail
$(".send-mail").click(function () {
  $("#send-mail").show();
});

$("#send-mail").on("click", "i", function () {
  $(this).parent().parent().hide();
});

$("#send").click(function () {
  if (
    ($("#name").val() == "" && $("#content-mail").val() == "") ||
    ($("#user-name").val() == null && $("#content-mail").val() == null)
  ) {
    $("#name").addClass("active");
    $("#content-mail").addClass("active");
  } else if (
    ($("#name").val() == "" && $("#content-mail").val() != "") ||
    ($("#user-name").val() == null && $("#content-mail").val() != null)
  ) {
    $("#name").addClass("active");
  } else if (
    ($("#name").val() != "" && $("#content-mail").val() == "") ||
    ($("#name").val() != null && $("#content-mail").val() == null)
  ) {
    $("#content-mail").addClass("active");
  } else {
    console.log("a");
    $("#name").val("");
    $("#content-mail").val("");
  }
});
