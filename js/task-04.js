const downBtn = document.querySelector("[data-action= decrement]");
const upBtn = document.querySelector("[data-action= increment]");
const valueEl = document.querySelector("#value");

downBtn.addEventListener("click", () => {
  valueEl.textContent = +valueEl.textContent - 1;
});

upBtn.addEventListener("click", () => {
  valueEl.textContent = +valueEl.textContent + 1;
});
