let element = document.getElementById("text");
let start_recording = document.getElementById("btn");
let stop_recording = document.getElementById("btn_stop");

start_recording.addEventListener("click", function () {
  recognization.start();
  start_recording.style.background = "gray";
  stop_recording.style.background = "dodgerblue";
});
stop_recording.addEventListener("click", function () {
  recognization.stop();
  stop_recording.style.background = "gray";
  start_recording.style.background = "dodgerblue";
});
// Correct the spelling of SpeechRecognition
const recognization = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognization.lang = "en-GB";
recognization.continuous = true;

// Correctly assign a function to onclick
// document.onclick = () => recognization.start();

recognization.onresult = (event) => {
  for (const result of event.results) {
    const get_voice = (element.innerText = result[0].transcript);
    console.log(get_voice);
  }
};
