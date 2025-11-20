// setTimeout(Event, 2000);
// function Event() {
//   console.log("hello");
// }
// ===>
// setTimeout(Event, 2000, "Hello");
// function Event(show) {
//   console.log(show);
// }
// ===>
const clearSet = document.querySelector("button");
const clear = setInterval(Event, 1000);
function Event() {
  console.log("Hello");
}
// clearSet.addEventListener("click", EventClear);
// function EventClear() {
//   clearInterval(clear);
// }
clearSet.addEventListener("click", () => {
  clearInterval(clear);
});
