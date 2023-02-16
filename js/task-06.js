const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  // проверка есть ли focus на инпуте
  if (inputEl.contains(event.relatedTarget)) {
    return;
  }
  // проверка колличества введеных символов соответствует 6
  else if (event.currentTarget.value.length !== 6) {
    inputEl.classList.add("invalid");
    return;
  }
  inputEl.classList.remove("invalid");
  inputEl.classList.add("valid");
});
