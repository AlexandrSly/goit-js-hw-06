const fontSizeControl = document.querySelector("#font-size-control");
const fontSize = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  fontSize.style.fontSize = `${event.currentTarget.value}px`;
});
