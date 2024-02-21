function login() {
  // Get user input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Show code box and display generated code, email, and password
  document.getElementById("code-box").classList.remove("hidden");
  document.getElementById("generated-code").textContent = generateCode();
  document.getElementById("user-email").textContent = email;
  document.getElementById("user-password").textContent = password;
}

function generateCode() {
  // Generate a random combination of numbers and alphabets
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}
