$(document).ready(function () {
  $("#log-in").click(function () {
    const userName = $("#user-name").val();
    const password = $("#password").val();
    console.log(userName);
    console.log(password);
    if (
      (userName == "" && password == "") ||
      (userName == null && password == null)
    ) {
      $("#user-name").addClass("error");
      $("#password").addClass("error");
      $(".notification").text("Sai thông tin đăng nhập!");
    } else {
      $(".user").css("width", "50%");
      $(".user").css("line-height", "43px");

      $("#user-name").css("display", "none");
      $("#password").css("display", "none");

      $(".user-text").addClass("active");
      $(".user-text").text(userName);

      $(".user-pass").addClass("active");
      $(".user-pass").text(password);

      $(".notification").text("Chúc mừng, bạn đã đăng nhập thành công!");
      $(this).text("Log out");

      $(this).click(function () {
        window.location.reload();
      });
    }
  });
});
