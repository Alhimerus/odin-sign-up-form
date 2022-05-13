const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

password.addEventListener("keyup", comparePasswords);
confirmPassword.addEventListener("keyup", comparePasswords);

function comparePasswords() {
  const passwordContent = password.value;
  const confirmPasswordContent = confirmPassword.value;
  if (passwordContent !== confirmPasswordContent) {
    password.classList.add("error");
    confirmPassword.classList.add("error");
  } else {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
}