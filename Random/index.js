const btn = document.querySelector(".btn-ganeration");
const h2 = document.querySelector("h2");
btn.addEventListener("click", () => {
  const digite = "0123456789";
  let opt = "";
  for (let i = 0; i < 2; i++) {
    opt += digite[Math.floor(Math.random() * 10)];
  }
  if (opt == 30) {
    h2.textContent = "congratulations";
  }

  h2.textContent = opt;
});
