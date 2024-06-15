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

function login() {
  let email = document.querySelector("#l-email").value;
  let password = document.querySelector("#l-password").value;
  if (email === "correo@correo.com" && password === "123456") {
    console.log("Inicio de sesión correcto..");
  } else {
    console.log("Credenciales incorrectas...");
  }
}

document.getElementById("createUser").addEventListener("click", createUser);
document.getElementById("login").addEventListener("click", login);

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
