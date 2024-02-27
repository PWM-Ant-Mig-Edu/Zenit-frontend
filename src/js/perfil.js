function loadPerfilBotonesComponent() {
    fetch("../src/components/perfilBotones.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('botones-perfil-component').innerHTML += data;
        })
        .catch(error => console.error('Error cargando los botones del perfil:', error));
}

document.addEventListener("DOMContentLoaded", loadPerfilBotonesComponent);

function setActive(num) {
    let elements = document.getElementsByClassName("opciones-menu-container");
    while (elements.length > 0) {
        elements[id].classList.remove("active");
        if(elements[id].id === id){
            elements[0].classList.add("active");
        }
    }
}