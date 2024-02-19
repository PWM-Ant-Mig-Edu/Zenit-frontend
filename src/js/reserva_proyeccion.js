function loadHeaderComponent() {
    fetch("../src/components/reserva_proyeccion.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('reservar-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);


function showReservar() {
    var registerComponent = document.getElementById("reservar-component");
    var registerComponent2 = document.getElementById("reservar-component2");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.add("blurred-background");
  

    registerComponent.style.display = "block";
    popupsContainer.style.display = "block";
    registerComponent2.style.display = "none";

}
  
function hideReservar() {
    var registerComponent = document.getElementById("reservar-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.remove("blurred-background");

    registerComponent.style.display = "none";
    popupsContainer.style.display = "none";
}

function mostrarHoras(dia) {
    // Oculta todos los grupos de horas
    var gruposHoras = document.querySelectorAll('.grid-container-horas');
    gruposHoras.forEach(function(grupo) {
        grupo.style.display = 'none';
    });

    // Muestra el grupo de horas correspondiente al día seleccionado
    var grupoHorasSeleccionado = document.getElementById('horas-' + dia);
    if (grupoHorasSeleccionado) {
        grupoHorasSeleccionado.style.display = 'grid';
    }
}

function seleccionarHora(horaSeleccionada) {
    // Remueve la clase 'selected' de todas las horas
    var horas = document.querySelectorAll('.proyeccion-hora-container');
    horas.forEach(function(h) {
        h.classList.remove('selected');
    });

    // Agrega la clase 'selected' a la hora seleccionada
    horaSeleccionada.classList.add('selected');
}