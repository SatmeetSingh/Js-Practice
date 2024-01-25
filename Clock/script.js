let second = document.getElementById("second-hand");
let minute = document.getElementById("minute-hand");
let hour = document.getElementById("hour-hand");

function setDate() {
  let today = new Date();
  let Second = today.getSeconds();
  let Minute = today.getMinutes();
  let Hour = today.getHours();

  const secondDegres = 90 + (Second / 60) * 360;
  const minuteDegres = 90 + (Minute / 60) * 360;
  const hourDegrees = 90 + (Minute / 720) * 360 + (Hour / 12) * 360;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
  second.style.transform = `rotate(${secondDegres}deg)`;
  minute.style.transform = `rotate(${minuteDegres}deg)`;
}

setInterval(setDate, 1000);
