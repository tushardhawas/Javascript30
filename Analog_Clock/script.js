const hrHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");
const hand = document.querySelector(".hand");
function Second() {
  const currentTime = new Date();
  let hr = currentTime.getHours();
  hr = (hr / 12) * 360 + 90;
  let min = currentTime.getMinutes();
  min = (min / 60) * 360 + 90;
  let sec = currentTime.getSeconds();
  sec = (sec / 60) * 360 + 90;


  if (sec === 90) {
    secHand.style.transition = "none"; 
  } else {
    secHand.style.transition = "transform 0.5s cubic-bezier(...)";
  }

  hrHand.style.transform = `rotate(${hr}deg)`;
  minHand.style.transform = `rotate(${min}deg)`;
  secHand.style.transform = `rotate(${sec}deg)`;
}
setInterval(Second, 1000);
