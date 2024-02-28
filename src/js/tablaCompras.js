function loadTablaCompras() {
    fetch("../src/components/tablaCompras.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('tabla-compras').innerHTML += data;
        })
        .catch(error => console.error('Error cargando los botones del summary:', error));
}

document.addEventListener("DOMContentLoaded", loadTablaCompras);
