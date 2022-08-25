const musicContainer = document.getElementById("music-container");
const musicTitle = document.getElementById("music-title");
const musicImg = document.getElementById("music-img");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");

const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("play");
const prewBtn = document.getElementById("prew");
const nextBtn = document.getElementById("next");

const by = document.getElementById("by");
const byHref = document.getElementById("by-href");
by.style.color = "white";
by.style.fontSize = "1.3rem";
by.style.position = "absolute";
by.style.right = "30px";
by.style.bottom = "30px";
byHref.style.color = "white";
byHref.style.textDecoration = "none";

const songs = [
  "Begonam",
  "Bilmadi",
  "Dancin",
  "Ketmoqdaman",
  "Megapolis",
  "Onam",
  "Potakati",
  "Sevamande",
  "Sevgilim",
  "Sevmadimmi",
  "Yana Yana",
  "Yana Yomg'ir",
  "Yoningdaman",
];

let songIndex = 0;

function loadSong(song) {
  musicTitle.innerHTML = song;
  musicImg.src = `./image/${song}.jpg`;
  audio.src = `./music/${song}.mp3`;
}
loadSong(songs[songIndex]);

function carousel() {
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  } else if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
}

function songIndicator() {
  if (playBtn.style.display == "none") {
    audio.play();
  } else {
    audio.pause();
  }
}

prewBtn.addEventListener("click", () => {
  songIndex--;
  carousel();
  loadSong(songs[songIndex]);
  songIndicator();
});

nextBtn.addEventListener("click", () => {
  songIndex++;
  carousel();
  loadSong(songs[songIndex]);
  songIndicator();
});

playBtn.addEventListener("click", () => {
  loadSong(songs[songIndex]);
  musicContainer.classList.add("play");
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  musicContainer.classList.remove("play");
  audio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
});

audio.addEventListener("ended", () => {
  songIndex++;
  carousel();
  loadSong(songs[songIndex]);

  musicContainer.classList.add("play");
  audio.play();
});
