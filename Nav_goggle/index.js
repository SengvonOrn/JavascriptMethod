const btn = document.querySelector(".toggle");
const navList = document.querySelector(".nav_list");

btn.addEventListener("click", function () {
  navList.classList.toggle("active");
});
