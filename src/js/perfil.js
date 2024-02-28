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
    var elements = document.querySelectorAll('.opciones-menu-container');
    console.log(elements);

}
