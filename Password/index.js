let field = document.getElementById("field");
let toggle = document.getElementById("toggleShow");

function toggleEvent() {
  if (field.type === "password") {
    toggle.textContent = "Hide";
    field.type = "text";
  } else {
    toggle.textContent = "Show";
    field.type = "password";
  }
}
toggle.addEventListener("click", toggleEvent);
//=======Zoom Scroll ===>
