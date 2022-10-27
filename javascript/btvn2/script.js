const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

function dongHo() {
  let today = new Date();
  const gio = today.getHours();
  const phut = today.getMinutes();
  const giay = today.getSeconds();
  let thoigian = "";

  if (gio < 10) gio = "0" + gio;
  if (phut < 10) phut = "0" + phut;
  if (giay < 10) giay = "0" + giay;
  if (gio <= 12) {
    thoigian = "AM";
  } else {
    thoigian = "PM";
  }
  document.getElementById("time").innerHTML =
    gio + ":" + phut + ":" + giay + " " + thoigian;
  setTimeout("dongHo()", 1000);
}
console.log(dongHo());

