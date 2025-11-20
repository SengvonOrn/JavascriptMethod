const people = [
  {
    name: "Dianas",
    position: "Web developer",
    imgSource:
      "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Hello world!",
  },
  {
    name: "John",
    position: "System Enginnering",
    imgSource:
      "https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_640.jpg",
    text: "Hello world!",
  },
  {
    name: "Dana",
    position: "Study Center",
    imgSource:
      " https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "hbdfhvbh",
  },
  {
    name: "san",
    position: "Study Center",
    imgSource:
      "https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662158_640.jpg",
    text: "Dancing",
  },
];

const img = document.querySelector(".img > img");
const name = document.querySelector(".person_name");
const post = document.querySelector(".position");
const text = document.querySelector(".description");
const pre = document.querySelector(".pre");
const down = document.querySelector(".down");
//==>
window.addEventListener("DOMContentLoaded", () => {
  const Randoms = Math.floor(Math.random() * people.length);
  eventHander(Randoms);
});
//==>
let = counter = 0;
eventHander = (getParameter) => {
  const person = people[getParameter];
  img.src = person.imgSource;
  name.textContent = person.name;
  post.textContent = person.position;
  text.textContent = person.text;
};
pre.onclick = function () {
  if (counter == 0) {
    counter = people.length - 1;
  } else {
    counter--;
  }
  eventHander(counter);
};
down.onclick = function () {
  if (counter == people.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  eventHander(counter);
};
