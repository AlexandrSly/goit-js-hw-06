const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value !== "" && password.value !== "") {
    console.log(`email: ${email.value}, password: ${password.value}`);
    loginFormEl.reset();
  } else {
    alert("все поля должны быть заполнены");
  }
});
