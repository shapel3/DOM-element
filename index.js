// Get the first form
const [form] = document.forms;

// Get the input elements by their name attributes
const loginInput = form.elements.login; // assuming <input name="login">
const passwordInput = form.elements.password; // assuming <input name="password">

const loginPattern = /^[a-z0-9_-]{3,15}$/;
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$ %^&*-]).{8,32}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();

  if (loginPattern.test(login) && passwordPattern.test(password)) {
    form.submit();
    alert("Data was sent, thanks!");
    return;
  }
  alert("Enter right login or password");
});

// Add focus event to login input
loginInput.addEventListener("focus", () => {
  loginInput.style.backgroundColor = "#00ff0029";
});

// Add blur event
loginInput.addEventListener("blur", () => {
  const loginValue = loginInput.value.trim();
  if (loginValue === "") {
    loginInput.style.backgroundColor = "red";
  }
});

// Add change event
loginInput.addEventListener("change", () => {
  loginInput.style.backgroundColor = "blue";
});

// Add input event
loginInput.addEventListener("input", () => {
  const cyrillicPattern = /[А-Яа-я]+/;
  const loginValue = loginInput.value.trim();
  if (cyrillicPattern.test(loginValue)) {
    alert('ви пишите кирилицей')
    loginInput.style.fontSize = "30px";
  }
  loginInput.style.backgroundColor = "yellow";
});