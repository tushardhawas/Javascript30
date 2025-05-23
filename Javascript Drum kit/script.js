window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio || !key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(() => key.classList.remove("playing"), 100); // 100ms is enough for quick flash
});



//why i chose settimeout to remove css playing class is because if click  a button  muliple times the css gets stuck 
// function removeTransition(e) {
//   if (e.propertyName !== "transform") return;
//   this.classList.remove('playing')
// }

// const keys = document.querySelectorAll(".key");
// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
