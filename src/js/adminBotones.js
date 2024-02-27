function loadAdminBotonesComponent() {
    fetch("../src/components/adminBotones.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('admin-botones').innerHTML += data;
        })
        .catch(error => console.error('Error al cargar los botones del admin:', error));
}
document.addEventListener("DOMContentLoaded", loadAdminBotonesComponent);