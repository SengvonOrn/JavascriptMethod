const work = ["Hello", "Helloworld ", "sengvon"];
const input = document.querySelector("#text");
const overlay = document.getElementById("overlay");

// input.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     if (overlay.innerText.length > 0) {
//       input.value = overlay.innerText;
//     }
//   }
// });

input.addEventListener("input", () => {
  let isChange = work.some((work) => {
    if (input.value.length !== 0 && work.startsWith(input.value)) {
      overlay.innerText = work;
      return true;
    }
  });
  if (!isChange) {
    overlay.innerText = "";
  }
});
