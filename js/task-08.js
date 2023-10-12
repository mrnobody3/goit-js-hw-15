const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { email, password } = formEl.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("All field should be filled");
  }
  console.log({
    email: email.value,
    password: password.value,
  });
  formEl.reset();
}
