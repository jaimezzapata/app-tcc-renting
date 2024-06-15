function showFormRegister() {
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formRegister").style.display = "block";
}

function showFormLogin() {
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("formRegister").style.display = "none";
}

document
  .getElementById("showFormLogin")
  .addEventListener("click", showFormLogin);
