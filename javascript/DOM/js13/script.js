// const clock = document.querySelector(".clock");
// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// function sync() {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
//   const wd = now.getDay();
//   const d = now.getDate();
//   const month = now.getMonth();

//   hour.style.transform = "translate(-1.5px, -1.5px) rotate(" + h * 30 + "deg)";
//   minute.style.transform = "translate(-1px, -1px) rotate(" + m * 6 + "deg)";
//   second.style.transform = "translate(-0.5px, -0.5px) rotate(" + s * 6 + "deg)";

//   date.innerHTMl =
//     "Tháng " + (month + 1) + ", thứ " + wd + ", <span>" + d + "</span>";
// }
// window.onload = function () {
//   sync();
//   setInterval(sync, 1000);
// };

// const img = document.querySelector("img");
// const box = document.querySelector(".img-box");
// const times = document.querySelector(".times");
// let count = 0;
// function displayHeart(x, y) {
//   const heart = document.createElement("span");
//   heart.className = "heart";
//   heart.innerText = "❤️";
//   heart.style.position = "absolute";
//   heart.style.top = y + "px";
//   heart.style.left = x + "px";
//   box.append(heart);
//   setTimeout(function () {
//     heart.remove();
//   }, 500);
// }

// function countUp() {
//   count++;
//   times.innerText = count;
// }
// function like(e) {
//   const x = e.offsetX;
//   const y = e.offsetY;
//   displayHeart(x, y);
//   countUp();
// }
// window.onload = function () {
//   img.ondblclick = like;
// };

//Uống sữa
const glasses = document.querySelector(".glass");
const remained = document.querySelector(".remained");
const drank = document.querySelector(".drank");
let current = 0;

const fill = function (index) {
  for (let i = 0; i <= index; i++) {
    glasses[i].classList.add("has-drank");
  }
};

const unfill = function (from, to) {
  for (let i = from; i <= index; i++) {
    glasses[i].classList.remove("has-drank");
  }
};

const update = function (total) {
  remained.innerText = 2 - total * 0.25 + "L";
  drank.style.flexBasis = (total / 8) * 100 + "%";
  drank.innerText = (total / 8) * 100 + "%";
};

const setup = function () {
  glasses.forEach(function (glass, index) {
    glass.onclick = function () {
      if (glass.classList.contains("has-drank")) {
        if (index === current) {
          unfill(index, current);
          current = index - 1;
        } else {
          unfill(index + 1, current);
          current = index;
        }
        update(current + 1);
      } else {
        current = index;
        fill(index);
        update(index + 1);
      }
    };
  });
};

window.onload = function(){
    
}