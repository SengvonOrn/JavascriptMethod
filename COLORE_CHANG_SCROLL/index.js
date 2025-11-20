const body = document.querySelector("body");
document.addEventListener("scroll", () => {
  let adaptedScrollHeight = 0;

  if (window.scrollY < 0) {
    adaptedScrollHeight = 0;
    a = 0;
    b = 0;
  } else if (window.scrollY > 255) {
    adaptedScrollHeight = 218;
    a = 163;
    b = 239;
  } else {
    adaptedScrollHeight = window.scrollY;
    a = window.scrollY;
    b = window.scrollY;
  }

  body.style.background = `rgb(
      ${adaptedScrollHeight},
      ${a},
      ${b}
      
  )`;
});
