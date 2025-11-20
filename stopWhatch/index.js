let runninginterval = null,
  startTime = 0,
  elapsedTime = 0;
const element = document.getElementById("stop");
const startStopWatch = () => {
  if (!runninginterval) {
    startTime = Date.now() - elapsedTime;
    runninginterval = setInterval(() => {
      displayTime((elapsedTime = Date.now() - startTime));
    }, 10); // You need a time interval, I set it to 10ms for smoother display
  }
};
const stopStopWatch = () => {
  clearInterval(runninginterval);
  runninginterval = null;
};

const resetStopWatch = () => {
  stopStopWatch();
  elapsedTime = 0;
  displayTime(elapsedTime);
};
const displayTime = (time) => {
  const pad = (n) => (n < 10 ? "0" : "") + n;
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  element.innerText = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
};
