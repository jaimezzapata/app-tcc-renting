let usuarios = [
  {
    name: "Jaime Zapata",
    email: "correo@correo.com",
    password: "123456",
    phone: "3152001282",
  },
];
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

function searchUser() {
  let email = document.querySelector("#l-email").value;
  let password = document.querySelector("#l-password").value;
  let auth = usuarios.some(
    (element) => email === element.email && password === element.password
  );
  return auth;
}

function login() {
  if (searchUser()) {
    console.log("Inicio de sesión correcto..");
    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formRegister").style.display = "none";
    document.getElementById("cargando").src =
      "https://codigofuente.io/wp-content/uploads/2018/09/progress.gif";
    setTimeout(() => {
      window.location.href = "https://regexr.com/";
    }, 3000);
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

let inputs = document.querySelectorAll("input");
// let inputs = document.getElementsByTagName("input");
inputs.forEach((elemet) => {
  elemet.addEventListener("keyup", validarFormulario);
  // elemet.addEventListener("blur", validarFormulario);
});

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[a-zA-Z0-9]{4,10}$/;

function validarFormulario(e) {
  switch (e.target.name) {
    case "l-email":
      if (emailRegex.test(e.target.value)) {
        console.log("Cumple");
        document.getElementById("l-email").classList.add("cumple");
        document.getElementById("l-email").classList.remove("no-cumple");
        document.getElementById("l-password").style.display = "block";
      } else {
        console.log("No cumple");
        document.getElementById("l-password").style.display = "none";
        document.getElementById("l-email").classList.add("no-cumple");
      }
      break;
    case "l-password":
      if (passwordRegex.test(e.target.value)) {
        console.log("Cumple");
        document.getElementById("l-password").classList.add("cumple");
        document.getElementById("l-password").classList.remove("no-cumple");
      } else {
        console.log("No cumple");
        document.getElementById("l-password").classList.add("no-cumple");
      }
      break;
  }
}
