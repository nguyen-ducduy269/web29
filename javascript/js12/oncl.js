const sounds = [
  {
    title: "Applause",
    audio: "./sounds/applause.mp3",
  },
  {
    title: "Boo",
    audio: "./sounds/boo.mp3",
  },
  {
    title: "Gasp",
    audio: "./sounds/gasp.mp3",
  },
  {
    title: "Tada",
    audio: "./sounds/tada.mp3",
  },
  {
    title: "Victory",
    audio: "./sounds/victory.mp3",
  },
  {
    title: "Wrong",
    audio: "./sounds/wrong.mp3",
  },
];

const soundCards = document.querySelector(".sound-cards");
function play() {
  const btn = this;
  if (isPlaying) return;
  else {
    isPlaying = true;
    btn.disabled = true;

    const audio = new Audio(this.dataset.audio);
    audio.onended = function () {
      btn.disabled = false;
      isPlaying = false;
    };
  }
  audio.play();
}
function createSound(sound) {
  const btn = document.createElement("button");
  btn.innerText = sound.title;
  btn.dataset.audio = sound.audio;
  btn.onclick = play;
  return btn;
}
sounds.forEach(function (sound) {
  soundCards.append(createSound(sound));
});
