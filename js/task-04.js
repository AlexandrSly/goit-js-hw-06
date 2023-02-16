// const downBtn = document.querySelector("[data-action= decrement]");
// const upBtn = document.querySelector("[data-action= increment]");
// const valueEl = document.querySelector("#value");

// downBtn.addEventListener("click", () => {
//   valueEl.textContent = +valueEl.textContent - 1;
// });

// upBtn.addEventListener("click", () => {
//   valueEl.textContent = +valueEl.textContent + 1;
// });

const downBtn = document.querySelector("[data-action= decrement]");
const upBtn = document.querySelector("[data-action= increment]");
const valueEl = document.querySelector("#value");

let valueCounter = 0;

downBtn.addEventListener("click", () => {
  valueCounter = valueCounter - 1;
  valueEl.textContent = valueCounter;
});

upBtn.addEventListener("click", () => {
  valueCounter = valueCounter + 1;
  valueEl.textContent = valueCounter;
});
