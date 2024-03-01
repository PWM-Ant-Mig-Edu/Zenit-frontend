function loadTablaCompras() {
    fetch("../src/components/purchasesTable.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('purchase-history-table').innerHTML += data;
        })
        .catch(error => console.error('Error cargando los botones del summary:', error));
}

document.addEventListener("DOMContentLoaded", loadTablaCompras);
