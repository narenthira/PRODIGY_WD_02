let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  timer = setInterval(updateStopwatch, 1000);
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  displayTime();
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function displayTime() {
  const display = document.querySelector('.display');
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? '0' + num : num;
}