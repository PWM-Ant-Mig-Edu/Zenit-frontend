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
