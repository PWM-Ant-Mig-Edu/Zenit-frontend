function loadHeaderComponent() {
    fetch("../src/components/reservationChooseSession.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('make-reservation-component2').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);

function showReservar2() {
    var registerComponent2 = document.getElementById("make-reservation-component2");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.add("blurred-background");
  

    popupsContainer.style.display = "block";
    registerComponent2.style.display = "block";

}
  
function hideReservar2() {
    var registerComponent2 = document.getElementById("make-reservation-component2");
    var homeContainer = document.querySelector(".wrapper-container");
    var popupsContainer = document.getElementById("popups");
  
    homeContainer.classList.remove("blurred-background");

    registerComponent2.style.display = "none";
    popupsContainer.style.display = "none";
}

function switchOverlay() {
    var registerComponent = document.getElementById("make-reservation-component");
    var registerComponent2 = document.getElementById("make-reservation-component2");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    if (registerComponent.style.display === "block") {
        registerComponent.style.display = "none";
        registerComponent2.style.display = "block";
    } else {
        registerComponent.style.display = "block";
        registerComponent2.style.display = "none";
    }
}