const btn = document.querySelector(".btn");
const colors = ["red","black","blue","#6b82e2","#c7ff87","#5a8135","rgba(254, 1, 157, 1)","rgba(254, 251, 253, 1)"];
const RandomColor = () => Math.floor(Math.random() * colors.length);
btn.addEventListener("click",() => (document.body.style.backgroundColor = colors[RandomColor()]));
