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

function successLogin() {

    var loginComponent = document.getElementById("login-component");
    var loginImg = document.querySelector(".imagen-header");

    var loginButton = document.querySelector(".ButtonContainer");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.remove("blurred-background");
    console.log(loginButton);
  
    popupsContainer.style.display = "none";
    loginComponent.style.display = "none";
    loginButton.style.display = "none";
    loginImg.style.display = "block";


}
