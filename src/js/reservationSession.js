function loadCinemas(film = '') {
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinemasContainer = document.getElementById('cinemasContainer');

            data.cinemas.forEach(cinema => {
                const cinemaDiv = document.createElement('div');
                cinemaDiv.classList.add('projection-days-container');
                cinemaDiv.innerHTML = `
                    <span>${cinema.name}</span>
                `;
                cinemasContainer.appendChild(cinemaDiv);

                cinemaDiv.addEventListener('click', function () {
                    hideReservar();
                    showReservar2();
                });
            });
        })
        .catch(error => {
            console.error('Error loading cinemas:', error);
        });
}


function showReservar(film_id = '') {
    console.log("Called showReservarNew", film_id);
    // We get the movie by its id
    getFilmById(film_id).then(film => {
        console.log('Película encontrada:', film);
        // Hacer algo con la película
        var makeReservationComponent = document.getElementById("make-reservation-component");
        console.log("makeReservationComponent", makeReservationComponent);
        var makeReservationComponent2 = document.getElementById("make-reservation-component2");
        var popupsContainer = document.getElementById("popups");
        var homeContainer = document.querySelector(".wrapper-container");

        // Show the popup
        homeContainer.classList.add("blurred-background");
        makeReservationComponent.style.display = "block";
        popupsContainer.style.display = "block";
        makeReservationComponent2.style.display = "none";

        // Modify the film name and image
        var filmName = makeReservationComponent.querySelector("#film-name");
        filmName.textContent = film.name;
        var filmImage = makeReservationComponent.querySelector("#film-image");
        filmImage.src = film.img;

        loadCinemas(film_id);

    }).catch(error => {
            console.error('Error:', error.message);
        });

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

    horasGrid.forEach(function (hora) {
        hora.style.display = 'none';
    });

    horas.forEach(function (hora) {
        hora.classList.remove('selected');
    });

    if (horasDia) {
        horasDia.style.display = 'grid';
    }

    dias.forEach(function (dia) {
        dia.classList.remove('selected');
    });

    elemento.classList.add('selected');
}

function seleccionarHora(elemento) {
    var horas = document.querySelectorAll('.proyeccion-hora-container');
    horas.forEach(function (hora) {
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

document.addEventListener('DOMContentLoaded', function () {
    loadCinemas();
});