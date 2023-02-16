function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const changeColorEl = document.querySelector(".change-color");

console.log(bodyEl);

changeColorEl.addEventListener("click", (e) => {
  const color = getRandomHexColor();
  colorEl.textContent = color;
  bodyEl.style.backgroundColor = color;
});
