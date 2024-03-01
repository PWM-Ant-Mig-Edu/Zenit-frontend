document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.check-form-group .select');
    var label = selectElement.nextElementSibling.nextElementSibling; 

    selectElement.addEventListener('change', function () {
        if (this.selectedIndex > 0) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.querySelector('.select');
    var cineSelect = document.getElementById('check-cinema-ticket');
    var correoInput = document.getElementById('check-ticket-email');
    var numeroInput = document.getElementById('check-ticket-number');
    var enviarButton = document.querySelector('.comprobar-button');

    enviarButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (cineSelect.selectedIndex === 0) {
            alert('Debes seleccionar el cine.');
            return;
        }

        if (selectElement.selectedIndex > 0 && (correoInput.value.trim() !== '' || numeroInput.value.trim() !== '')) {
            window.location.href = 'bookingDetails.html';
        } else {
            alert('Debes seleccionar el tipo de ticket y llenar al menos uno de los campos (correo o número).');
        }
    });
});

