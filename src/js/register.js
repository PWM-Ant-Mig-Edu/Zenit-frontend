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
