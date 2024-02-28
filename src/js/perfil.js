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
    var padre = document.getElementById('botones-perfil-component');
    var hijos = padre.children;

    for (var i = 0; i < hijos.length; i++) {
        // Verifica si el número de iteración coincide con el número proporcionado
        if (i === num) {
            hijos[i].id = "active";
        } else {

        }
    }
}

