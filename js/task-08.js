const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value !== "" && password.value !== "") {
    const authentication = {
      email: email.value,
      password: password.value,
    };
    console.log(authentication);
    loginFormEl.reset();
  } else {
    alert("все поля должны быть заполнены");
  }
});
