const input = document.getElementById("get-input");
const btn = document.getElementById("pluse");
const listInput = document.querySelector(".text-list");
// ===
btn.onclick = function () {
  if (input.value == "") {
    return null;
  } else {
    let li = document.createElement("li");

    let span = document.createElement("span");
    li.innerHTML = input.value;
    span.innerHTML = "-";
    li.appendChild(span);
    listInput.appendChild(li);
    input.value = "";
  }
};

listInput.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
