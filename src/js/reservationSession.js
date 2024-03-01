function loadHeaderComponent() {
    fetch("../src/components/reservationChooseCinema.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById('make-reservation-component').innerHTML += data;
        })
        .catch(error => console.error('Error loading the header:', error));
}
document.addEventListener("DOMContentLoaded", loadHeaderComponent);




function showReservar() {
    var registerComponent = document.getElementById("make-reservation-component");
    var registerComponent2 = document.getElementById("make-reservation-component2");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.add("blurred-background");
  

    registerComponent.style.display = "block";
    popupsContainer.style.display = "block";
    registerComponent2.style.display = "none";

}
  
function hideReservar() {
    var registerComponent = document.getElementById("make-reservation-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");
  
    homeContainer.classList.remove("blurred-background");

    registerComponent.style.display = "none";
    popupsContainer.style.display = "none";
}

function mostrarHoras(dia, elemento) {
    // Ocultar todas las horas primero
    var horasGrid = document.querySelectorAll('.grid-container-horas');
    var horas = document.querySelectorAll('.proyeccion-hora-container');
    var horasDia = document.getElementById('horas-' + dia);
    var dias = document.querySelectorAll('.proyeccion-dia-container');

    horasGrid.forEach(function(hora) {
        hora.style.display = 'none';
    });

    horas.forEach(function(hora) {
        hora.classList.remove('selected');
    });
    
    if (horasDia) {
        horasDia.style.display = 'grid';
    }
    
    dias.forEach(function(dia) {
        dia.classList.remove('selected');
    });

    elemento.classList.add('selected');
}

function seleccionarHora(elemento) {
    var horas = document.querySelectorAll('.proyeccion-hora-container');
    horas.forEach(function(hora) {
        hora.classList.remove('selected');
    });

    elemento.classList.add('selected');
}

function checkSelection() {
    var selectedDia = document.querySelector('.proyeccion-dia-container.selected');
    var selectedHora = document.querySelector('.proyeccion-hora-container.selected');

    if (selectedDia && selectedHora) {
        window.location.href = "../../public/cinemas.html";
    } else {
        alert('Por favor selecciona un día y una hora');
    }
}