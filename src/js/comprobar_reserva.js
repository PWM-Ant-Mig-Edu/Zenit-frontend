document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.comprobar-form-group .select');
    var label = selectElement.nextElementSibling.nextElementSibling; // Asumiendo que el label sigue al span .comprobar-bar

    selectElement.addEventListener('change', function () {
        if (this.selectedIndex > 0) { // Si se selecciona una opción válida (no la predeterminada)
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.select');
    var cineSelect = document.getElementById('comprobar-ticket-cine');
    var correoInput = document.getElementById('comprobar-ticket-correo');
    var numeroInput = document.getElementById('comprobar-ticket-numero');
    var enviarButton = document.querySelector('.comprobar-button');

    enviarButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (cineSelect.selectedIndex === 0) {
            alert('Debes seleccionar el cine.');
            return;
        }

        if (selectElement.selectedIndex > 0 && (correoInput.value.trim() !== '' || numeroInput.value.trim() !== '')) {
            // haz un salto a otra página
            window.location.href = 'detalles_reserva.html';
        } else {
            alert('Debes seleccionar el tipo de ticket y llenar al menos uno de los campos (correo o número).');
        }
    });
});

