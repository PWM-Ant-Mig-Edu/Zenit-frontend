function loadSummaryReserva() {
    fetch("../src/components/reservationSummary.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('summary-component').innerHTML += data;
        })
        .catch(error => console.error('Error cargando los botones del summary:', error));
}

document.addEventListener("DOMContentLoaded", loadSummaryReserva);
