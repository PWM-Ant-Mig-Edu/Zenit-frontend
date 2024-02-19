function loadHeaderComponent() {
    fetch("../src/components/recuperar_contrasena.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('recuperar-contrasena-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);


function showRecuperarContrasena() {
    hideLogin();
    var registerComponent = document.getElementById("recuperar-contrasena-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.add("blurred-background");
  
    // Muestra el componente de registro
    registerComponent.style.display = "block";
    popupsContainer.style.display = "block";
}

function hideLogin() {
    var registerComponent = document.getElementById("recuperar-contrasena-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Muestra el componente de registro
    popupsContainer.style.display = "none";
    registerComponent.style.display = "none";
}