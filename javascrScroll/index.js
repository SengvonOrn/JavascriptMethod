const text = document.getElementById("text");

text.addEventListener("scroll", () => {
  text.style.fontSize = `${20 + window.scrollY * 0.05}px`;
});
