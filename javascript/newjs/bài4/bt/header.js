let resBtn = document.querySelector(".respon-btn");
let resMenu = document.querySelector(".reponsive");

const div = document.createElement("div");
div.classList.add("overlay");
document.body.appendChild(div);

function openMenu() {
  resBtn.addEventListener("click", () => {
    resMenu.classList.add("active");
    div.classList.add("active");
  });
}
openMenu();

function closeMenu() {
  div.addEventListener("click", () => {
    resMenu.classList.remove("active");
    div.classList.remove("active");
  });
}
closeMenu();

const item = document.querySelectorAll(".bonus");
console.log(item);

function openBonus() {
  item.addEventListener("click", () => {
    document.querySelectorAll(".button-content").css("display", "block");
  });
}
openBonus();
