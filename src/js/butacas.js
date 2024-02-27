function loadButacas() {
    fetch("../src/components/butacas.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('table-container').innerHTML += data;
        })
        .catch(error => console.error('Error al cargar los botones del admin:', error));
}
document.addEventListener("DOMContentLoaded", loadButacas);