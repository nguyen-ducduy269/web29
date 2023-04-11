let template = document.body;

function handle_mobile_nav() {
  let btn = template.querySelector("header #nav-trigger"),
    nav = template.querySelector("header nav"),
    overlay = document.createElement("div");
  overlay.classList.add("overlay");

  if (btn) {
    btn.addEventListener("click", (e) => {
      template.classList.add("overflow-hidden");
      template.querySelector("header").appendChild(overlay);
      nav.className = "show fadeInLeft";
    });

    overlay.addEventListener("click", (e) => {
      template.classList.remove("overflow-hidden");
      overlay.remove();
      nav.className = "show fadeOutLeft";
      setTimeout(() => {
        nav.className = "";
      }, 300);
    });
  }

  nav.querySelectorAll("li").forEach(function (li) {
    let sub_menu = li.querySelector(".sub-menu");
    if (sub_menu) {
      li.addEventListener("click", function () {
        sub_menu.classList.toggle("show");
        li.querySelector("a i").classList.toggle("rotate");
      });
    }
  });
}
handle_mobile_nav();
