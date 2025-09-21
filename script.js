function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6;
  const minDeg = min * 6 + sec * 0.1;
  const hrDeg = (hr % 12) * 30 + min * 0.5;

  document.getElementById("second").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
