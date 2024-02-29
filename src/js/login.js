function loadHeaderComponent() {
    // Carga el componente de login
    fetch("../src/components/login.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('login-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));

    // Carga el componente de recuperar contraseña
    fetch("../src/components/recuperar_contrasena.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('reset-password-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}

document.addEventListener("DOMContentLoaded", loadHeaderComponent);

function showLogin() {
    var loginComponent = document.getElementById("login-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.add("blurred-background");
  
    // Muestra el componente de login
    loginComponent.style.display = "block";
    popupsContainer.style.display = "block";
}
  
function hideLogin() {
    var loginComponent = document.getElementById("login-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Quita la clase del contenedor de popups para quitar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Oculta el componente de login
    popupsContainer.style.display = "none";
    loginComponent.style.display = "none";
}

function showRecuperarContrasena() {
    var recuperarContrasenaComponent = document.getElementById("reset-password-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.add("blurred-background");
  
    // Muestra el componente de recuperar contraseña
    recuperarContrasenaComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideRecuperarContrasena() {
    var recuperarContrasenaComponent = document.getElementById("reset-password-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Quita la clase del contenedor de popups para quitar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Oculta el componente de recuperar contraseña
    popupsContainer.style.display = "none";
    recuperarContrasenaComponent.style.display = "none";
}

function showRegister() {
    var registerComponent = document.getElementById("register-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.add("blurred-background");
  
    // Muestra el componente de registro
    registerComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideRegister() {
    var registerComponent = document.getElementById("register-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Quita la clase del contenedor de popups para quitar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Oculta el componente de registro
    popupsContainer.style.display = "none";
    registerComponent.style.display = "none";
}


function successLogin() {

    var loginComponent = document.getElementById("login-component");
    var loginImg = document.querySelector(".imagen-header");
    console.log(loginImg);

    var loginButtonMenuContent = document.querySelector(".MenuContent .ButtonContainer");
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



