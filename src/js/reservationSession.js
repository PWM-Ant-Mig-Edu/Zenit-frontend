function loadCinemas(film) {
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinemasContainer = document.getElementById('cinemasContainer');

            data.cinemas.forEach(cinema => {
                const cinemaDiv = document.createElement('div');
                cinemaDiv.classList.add('projection-days-container');
                const movie = cinema.movies.find(movie => movie.name === film.name); 
                if (movie) {
                    cinemaDiv.innerHTML = `
                        <span>${cinema.name}</span>
                    `;
                    cinemasContainer.appendChild(cinemaDiv);

                    cinemaDiv.addEventListener('click', function () {
                        hideReservar(false);
                        showReservar2(cinema, film);
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error loading cinemas:', error);
        });
}

function showReservar(film_id = '') {
    getFilmById(film_id).then(film => {
        var makeReservationComponent = document.getElementById("make-reservation-component");
        var makeReservationComponent2 = document.getElementById("make-reservation-component2");
        var popupsContainer = document.getElementById("popups");
        var homeContainer = document.querySelector(".wrapper-container");

        homeContainer.classList.add("blurred-background");
        makeReservationComponent.style.display = "block";
        popupsContainer.style.display = "block";
        makeReservationComponent2.style.display = "none";

        var filmName = makeReservationComponent.querySelector("#film-name");
        filmName.textContent = film.name;
        var filmImage = makeReservationComponent.querySelector("#film-image");
        filmImage.src = film.img;

        loadCinemas(film);

    }).catch(error => {
            console.error('Error:', error.message);
        });

}

function hideReservar(close = false) {
    var registerComponent = document.getElementById("make-reservation-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.remove("blurred-background");

    registerComponent.style.display = "none";
    popupsContainer.style.display = "none";

    if (close) {
        clearCinemas();
    }
}

function clearCinemas() {
    var cinemasContainer = document.getElementById('cinemasContainer');
    cinemasContainer.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', function () {
    loadCinemas();
});