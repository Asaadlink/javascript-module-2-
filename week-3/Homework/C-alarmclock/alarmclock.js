function setAlarm() {
  let time = document.querySelector("#alarmSet").value;
  const timeRemaining = document.querySelector("#timeRemaining"); // = Time Remaining: 00:00;
  timeRemaining.textContent = "Time Remaining: 00:" + time;

  const intervalId = setInterval(() => {
    time = time - 1;
    timeRemaining.textContent = "Time Remaining: 00:" + time;

    if (time === 0) {
      clearInterval(intervalId);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
