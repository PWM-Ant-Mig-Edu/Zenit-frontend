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

function guardarUser() {
    var nombre = document.getElementById("user-name").value;
    var apellidos = document.getElementById("user-surname").value;
    var email = document.getElementById("user-email").value;
    var contrasena = document.getElementById("user-password").value;
    var confirmarContrasena = document.getElementById("user-confirm-password").value;

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    var usuariosGuardados = localStorage.getItem('usuarios');
    var usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    // Verificar si ya existe un usuario con el correo electrónico proporcionado
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            alert("Ya existe un usuario con este correo electrónico");
            return false;
        }
    }

    var usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        contrasena: contrasena
    };

    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    sessionStorage.setItem('usuario', JSON.stringify(usuario));

    successLogin();

    return true;
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
