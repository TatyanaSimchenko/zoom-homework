"use strict";

const btn = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition() {
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].classList.contains("playing")) {
      btn[i].classList.remove("playing");
    }
    if (btn[i].classList.contains("sound")) {
      btn[i].classList.remove("sound");
    }
  }
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    removeTransition();
    const id = this.id;
    this.classList.add("playing");
    for (let j = 0; j < btn.length; j++) {
      if (audio[j].id === id) {
        audio[j].currentTime = 0;
        audio[j].play();
      }
    }
  });
}

window.addEventListener("keydown", playSound);
