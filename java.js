function login() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    document.getElementById("code-box").classList.remove("hidden");
    document.getElementById("email-display").textContent = email;
    document.getElementById("password-display").textContent = password;
  }
}
