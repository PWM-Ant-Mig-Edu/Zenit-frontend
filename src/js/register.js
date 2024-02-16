function loadHeaderComponent() {
    fetch("../src/components/register.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('register-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);



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
  
    // Agrega una clase al contenedor de popups para aplicar el fondo borroso
    homeContainer.classList.remove("blurred-background");
  
    // Muestra el componente de registro
    popupsContainer.style.display = "none";
    registerComponent.style.display = "none";
}
