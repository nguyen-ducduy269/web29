let currentIndex = 0;
const items = document.querySelector(".carousel-inner").children;
const btnNext = document.querySelector(".carousel-next");
const btnPrev = document.querySelector(".carousel-prev");

btnNext.onclick = function () {
  if (currentIndex < items.children.length - 1) {
    currentIndex++;
    items.style.marginLeft = -currentIndex * 600 + "px";
    btnPrev.disable = false;
  } else {
    btnNext.disable = true;
  }
};

btnPrev.onclick = function () {
  if (currentIndex < items.children.length - 1) {
    currentIndex--;
    items.style.marginLeft = -currentIndex * 600 + "px";
    btnNext.disable = false;
  } else {
    btnPrev.disable = true;
  }
};
