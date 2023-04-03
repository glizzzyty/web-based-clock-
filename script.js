function initialize(){
  updateTime();

  setInterval(updateTime, 1000);
}

function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("am_or_pm").hidden = true;
}