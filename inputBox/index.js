const input = document.querySelector("input");
const h = document.querySelector("h1");
const data = [
  { id: 1, name: "John", age: 21 },
  { id: 2, name: "seng", age: 22 },
  { id: 3, name: "son", age: 23 },
];
input.oninput = showResult;

function showResult() {
  filter();
}
filter();
function filter() {
  const result = data.filter((person) =>
    person.name.toLowerCase().includes(input.value.toLowerCase())
  );
  if (result.length > 0) {
    h.textContent = result.map((person) => person.name).join(" ");
    h.style.cssText = "";
  } else {
    h.style.cssText = "color: gray; font-size: 12px";
    h.textContent = "No match found";
  }
}
