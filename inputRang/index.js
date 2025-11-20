let slider = document.getElementById("slider");
let currentValue = document.getElementById("current");
slider.value = 0;
function EventSlider() {
  currentValue.textContent = `Current Value: = ${slider.value}`;
}

slider.addEventListener("change", EventSlider);
