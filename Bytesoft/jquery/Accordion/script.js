const contents = $(".contents");
contents.click(function (e) {
  $(e.currentTarget).find(".main-content").toggle();
});
