function loadHeaderComponent() {

    fetch("../src/components/login.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('login-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));

    fetch("../src/components/resetPassword.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('reset-password-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
    
    fetch("../src/components/register.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('register-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}

document.addEventListener("DOMContentLoaded", loadHeaderComponent);

function showLogin() {
    var loginComponent = document.getElementById("login-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.add("blurred-background");
  
    loginComponent.style.display = "block";
    popupsContainer.style.display = "block";
}
  
function hideLogin() {
    var loginComponent = document.getElementById("login-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.remove("blurred-background");
  
    popupsContainer.style.display = "none";
    loginComponent.style.display = "none";
}

function showRecuperarContrasena() {
    var recuperarContrasenaComponent = document.getElementById("reset-password-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.add("blurred-background");
  
    recuperarContrasenaComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideRecuperarContrasena() {
    var recuperarContrasenaComponent = document.getElementById("reset-password-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.remove("blurred-background");

    popupsContainer.style.display = "none";
    recuperarContrasenaComponent.style.display = "none";
}

function showRegister() {
    var registerComponent = document.getElementById("register-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.add("blurred-background");
  
    registerComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideRegister() {
    var registerComponent = document.getElementById("register-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.remove("blurred-background");
  
    popupsContainer.style.display = "none";
    registerComponent.style.display = "none";
}


function successLogin() {

    var loginComponent = document.getElementById("login-component");
    var loginImg = document.querySelector(".imagen-header");

    var loginButtonMenuContent = document.querySelector(".menu-content .button-container");
    var loginButtonDropdown = document.querySelector(".Dropdown li");

    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.remove("blurred-background");

    if (loginButtonMenuContent) {
        popupsContainer.style.display = "none";
        loginComponent.style.display = "none";
        loginButtonMenuContent.style.display = "none";
        loginImg.style.display = "block";
    }

    if (loginButtonDropdown) {
        var liPerfil = document.getElementById("li Perfil");
        if (liPerfil) {
            liPerfil.style.display = "block";
        }

        var registerButtonDropdown = document.querySelector(".registerMobile");
        var loginLinkDropdown = document.querySelector(".loginMobile");
        if (registerButtonDropdown && loginLinkDropdown) {
            registerButtonDropdown.style.display = "none";
            loginLinkDropdown.style.display = "none";
        }
    }
}
function validarCorreo(email) {
    // Expresión regular para validar el correo electrónico
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexCorreo.test(email);
}

function validarContrasena(contrasena) {
    // Expresión regular para validar la contraseña
    var regexContrasena = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regexContrasena.test(contrasena);
}

function usuarioExistente(email, usuariosGuardados) {
    // Verificar si ya existe un usuario con el correo electrónico proporcionado
    for (var i = 0; i < usuariosGuardados.length; i++) {
        if (usuariosGuardados[i].email === email) {
            return true;
        }
    }
    return false;
}

function guardarUser() {
    var nombre = document.getElementById("user-name").value;
    var apellidos = document.getElementById("user-surname").value;
    var email = document.getElementById("user-email").value;
    var contrasena = document.getElementById("user-password").value;
    var confirmarContrasena = document.getElementById("user-confirm-password").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return;
    }

    if (!validarCorreo(email)) {
        alert("El correo electrónico no es válido");
        return;
    }

    if (!validarContrasena(contrasena)) {
        alert("La contraseña no cumple con los requisitos");
        return;
    }

    var usuariosGuardados = localStorage.getItem('usuarios');

    if (!usuariosGuardados) {
        usuariosGuardados = [];
    } else {
        usuariosGuardados = JSON.parse(usuariosGuardados);
    }

    if (usuarioExistente(email, usuariosGuardados)) {
        alert("Ya existe un usuario con este correo electrónico");
        return;
    }

    var usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        contrasena: contrasena
    };

    usuariosGuardados.push(usuario);

    var usuariosJSON = JSON.stringify(usuariosGuardados);

    localStorage.setItem('usuarios', usuariosJSON);
    sessionStorage.setItem('usuario', JSON.stringify(usuario));

    successLogin();
}



function login() {
    var email = document.getElementById("input-login-email").value;
    var password = document.getElementById("input-login-password").value;

    var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'));

    if (usuariosGuardados) {
        for (var i = 0; i < usuariosGuardados.length; i++) {
            var usuario = usuariosGuardados[i];
            if (email === usuario.email && password === usuario.contrasena) {
                sessionStorage.setItem('usuario', JSON.stringify(usuario));
                successLogin();
                return;
            }
        }
        alert("Correo electrónico o contraseña incorrectos");
    } else {
        alert("No hay usuarios almacenados en localStorage");
    }
}

function logOut() {
    sessionStorage.removeItem('usuario');
    location.reload();
}
