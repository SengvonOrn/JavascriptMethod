const HexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.querySelector(".btn");

const GetRandom = () => Math.floor(Math.random() * HexCode.length);

function getGenerationColor() {
  let SabColor = "#";
  for (let i = 0; i < 6; i++) {
    SabColor += HexCode[GetRandom()];
  }
  document.body.style.backgroundColor = SabColor;
  document.querySelector(".get-hex").textContent = SabColor;
}
btn.addEventListener("click", getGenerationColor);
