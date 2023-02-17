const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl = document.querySelector(".gallery");

// console.log(ulEl);
const imgGallery = images
  .map(
    (image) =>
      `<li><img  src="${image.url}" alt="${image.alt}" width="200"/></li>`
  )
  .join("");

ulEl.insertAdjacentHTML("afterbegin", imgGallery);

ulEl.style.listStyleType = "none";
// ulEl.style.display = "flex";
ulEl.style.justifyContent = "center";
ulEl.style.gap = "30px";
ulEl.style.padding = "25px";
ulEl.style.alignItems = "center";
// ulEl.style.border = "1px solid blue";
