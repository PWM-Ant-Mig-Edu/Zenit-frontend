function loadPerfilBotonesComponent() {
    fetch("../src/components/profileButtons.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('buttons-profile-component').innerHTML += data;
        })
        .catch(error => console.error('Error cargando los botones del perfil:', error));
}

document.addEventListener("DOMContentLoaded", loadPerfilBotonesComponent);

function setActive(num) {
    var padre = document.getElementById('buttons-profile-component');
    var hijos = padre.children;

    for (var i = 0; i < hijos.length; i++) {
        if (i === num) {
            hijos[i].id = "active";
        }
    }
}

