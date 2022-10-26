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
  const today = new Date();
  const gio = today.getHours();
  const phut = today.getMinutes();
  const giay = today.getSeconds();

  if (gio < 10) gio = "0" + gio;
  if (phut < 10) gio = "0" + phut;
  if (giay < 10) gio = "0" + giay;
  document.getElementById("time").innerHTML =
    "Bây giờ là: " + gio + ":" + phut + ":" + giay;
  setTimeout("dongHo()", 1000);
}
dongHo();
