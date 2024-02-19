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
            document.getElementById('recuperar-contrasena-component').innerHTML += data;
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
    var recuperarContrasenaComponent = document.getElementById("recuperar-contrasena-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.add("blurred-background");
  
    // Muestra el componente de recuperar contraseña
    recuperarContrasenaComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideRecuperarContrasena() {
    var recuperarContrasenaComponent = document.getElementById("recuperar-contrasena-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Quita la clase del contenedor de popups para quitar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Oculta el componente de recuperar contraseña
    popupsContainer.style.display = "none";
    recuperarContrasenaComponent.style.display = "none";
}
