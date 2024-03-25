function loadCinemas(film) {
    console.log("Film", film);
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {
            const cinemasContainer = document.getElementById('cinemasContainer');

            data.cinemas.forEach(cinema => {
                const cinemaDiv = document.createElement('div');
                cinemaDiv.classList.add('projection-day-container');

                const movie = cinema.movies.find(movie => movie.id === film.id);

                if (movie) {
                    cinemaDiv.innerHTML = `
                        <span>${cinema.name}</span>
                    `;
                    cinemasContainer.appendChild(cinemaDiv);

                    cinemaDiv.addEventListener('click', function () {
                        hideChooseCinemaPopUp();
                        showChooseSessionPopUp(cinema.id, film.id);
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error loading cinemas:', error);
        });
}

function showChooseCinemaPopUp(film_id = '') {
    getFilmById(film_id).then(film => {
        var chooseCinemaComponent = document.getElementById("choose-cinema-component");
        var chooseSessionComponent = document.getElementById("choose-session-component");
        var popupsContainer = document.getElementById("popups");
        var homeContainer = document.querySelector(".wrapper-container");

        homeContainer.classList.add("blurred-background");
        chooseCinemaComponent.style.display = "block";
        popupsContainer.style.display = "block";
        chooseSessionComponent.style.display = "none";

        const filmName = chooseCinemaComponent.querySelector('#film-name');
        filmName.textContent = film.name;
        const sessionImg = chooseCinemaComponent.querySelector('#film-image');
        sessionImg.src = film.img;

        loadCinemas(film);

    }).catch(error => {
        console.error('Error:', error.message);
    });

}

function hideChooseCinemaPopUp() {
    var registerComponent = document.getElementById("choose-cinema-component");
    var popupsContainer = document.getElementById("popups");
    var homeContainer = document.querySelector(".wrapper-container");

    homeContainer.classList.remove("blurred-background");

    registerComponent.style.display = "none";
    popupsContainer.style.display = "none";
}

function clearCinemas() {
    var cinemasContainer = document.getElementById('cinemasContainer');
    cinemasContainer.innerHTML = '';
}


document.addEventListener('DOMContentLoaded', function () {
    loadCinemas();
});