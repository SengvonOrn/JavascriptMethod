const dataMenu = [
  {
    category: "mac",
    title: "iMac 2017",
    price: "1300$",
    imgSrc: "./Img/imac.webp",
  },
  {
    category: "iphone",
    title: "iPhone 4S",
    price: "50$",
    imgSrc: "./Img/iphone-4.webp",
  },
  {
    category: "ipad",
    title: "iPad Air",
    price: "700$",
    imgSrc: "./Img/ipad-air.webp",
  },
  {
    category: "ipad",
    title: "iPad Mini",
    price: "600$",
    imgSrc: "./Img/ipad-mini.webp",
  },
  {
    category: "ipad",
    title: "iPad Pro",
    price: "800$",
    imgSrc: "./Img/ipad-pro.webp",
  },
  {
    category: "iphone",
    title: "iPhone 3G",
    price: "40$",
    imgSrc: "./Img/iphone-3.webp",
  },

  {
    category: "iphone",
    title: "iPhone 5S",
    price: "65$",
    imgSrc: "./Img/iphone-5s.webp",
  },
  {
    category: "mac",
    title: "macBook Pro",
    price: "1399$",
    imgSrc: "./Img/macbook-pro.webp",
  },

  {
    category: "iwatch",
    title: "iWatch 6 Series",
    price: "400$",
    imgSrc: "./Img/iwatch-6.webp",
  },

  {
    category: "mac",
    title: "macBook Air",
    price: "800$",
    imgSrc: "./Img/macbook-air.webp",
  },
  {
    category: "mac",
    title: "macBook 2015",
    price: "700$",
    imgSrc: "./Img/macbook-pro-2015.webp",
  },
  {
    category: "iwatch",
    title: "iWatch 8 Series",
    price: "600$",
    imgSrc: "./Img/iwatch-8.webp",
  },
  {
    category: "iphone",
    title: "iPhone 14 Pro Max",
    price: "1200$",
    imgSrc: "./Img/iphone-14.webp",
  },
];

const nemuWraper = document.querySelector(".menu-wrapper");
const Allbtn = document.querySelectorAll(".btn");
const btnContenner = document.querySelector(".btn-wraper");

btnContenner.addEventListener("click", (e) => {
  // const AllBtn = e.target.classList.contains("btn");
  const btnID = e.target.dataset.id;
  Allbtn.forEach((btn) => {
    if (btnID) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

Allbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const file = dataMenu.filter((item) => {
      return item.category == id;
    });
    if (id == "all") {
      showingProduct(dataMenu);
    } else {
      showingProduct(file);
    }
  });
});
//===>
window.addEventListener("DOMContentLoaded", () => {
  showingProduct(dataMenu);
});
//====>
const showingProduct = (arrayProduct) => {
  const displayProduct = arrayProduct
    .map((p) => {
      return ` <article class="card">
          <img src="${p.imgSrc}" alt="${p.title}" class="img" />
          <h3 class="car-header">${p.title}</h3>
          <span class="price">${p.price}</span>
        </article>`;
    })
    .join("");
  nemuWraper.innerHTML = displayProduct;
};
