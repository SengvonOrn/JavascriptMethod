const btns = document.querySelectorAll(".btns");
const count = document.querySelector(".content-text");
let number = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const checkBtn = event.currentTarget.classList;
    if (checkBtn.contains("Increase")) {
      number++;
    } else if (checkBtn.contains("Decrease")) {
      number--;
    } else {
      number = 0;
    }
    count.textContent = number;
  });
});
