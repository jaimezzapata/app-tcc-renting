let usuarios = [];
let usuario = {};

function createUser() {
  let name = document.querySelector("#r-name").value;
  let email = document.querySelector("#r-email").value;
  let password = document.querySelector("#r-password").value;
  let phone = document.querySelector("#r-phone").value;
  usuario = {
    name,
    email,
    password,
    phone,
  };
  console.log(usuario);
  usuarios.push(usuario);
  console.log(usuarios);
}

document.getElementById("createUser").addEventListener("click", createUser);

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
document
  .getElementById("showFormRegister")
  .addEventListener("click", showFormRegister);
