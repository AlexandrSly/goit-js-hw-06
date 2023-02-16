const inputEl = document.querySelector("#validation-input");

const validationInputEl = document.querySelector("#validation-input");

console.log(validationInputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  // проверка есть ли focus на инпуте
  if (inputEl.contains(event.relatedTarget)) {
    return;
  }
  // проверка колличества введеных символов соответствует 6
  else if (
    event.currentTarget.value.length !==
    +validationInputEl.getAttribute("data-length")
  ) {
    inputEl.classList.add("invalid");
    return;
  }
  inputEl.classList.remove("invalid");
  inputEl.classList.add("valid");
});
