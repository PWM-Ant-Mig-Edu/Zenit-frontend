const urlParams = new URLSearchParams(window.location.search);
const cinemaName = urlParams.get('name');

function loadFilms(role) {
    const filmsContainer = document.getElementById('films');
    filmsContainer.innerHTML = '';

    fetch('../src/json/films.json')
        .then(response => response.json())
        .then(data => {
            data.films.forEach(film => {
                const filmHTML = generateMovieHTML(film, role);
                filmsContainer.innerHTML += filmHTML;
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
}

function loadFilmsByCinema() {
    const filmsContainer = document.getElementById('films');
    filmsContainer.innerHTML = '';
    
    fetch('../src/json/cinemas.json')
        .then(response => response.json())
        .then(data => {

            const cinema = data.cinemas.find(c => c.name === cinemaName);
            if (!cinema) {
                console.error('Cinema not found');
                return;
            }
            const cinemaFilms = cinema.movies.map(movie => movie.name);

            fetch('../src/json/films.json')
                .then(response => response.json())
                .then(data => {
                    const cinemaMovies = data.films.filter(film => cinemaFilms.includes(film.name));
                    
                    cinemaMovies.forEach(film => {
                        const filmHTML = generateMovieHTML(film, "member");
                        filmsContainer.innerHTML += filmHTML;
                    });
                })
                .catch(error => console.error('Error fetching films.json:', error));
        })
        .catch(error => console.error('Error fetching cinemas.json:', error));
}

function getFilmById(filmId) {
    filmId = parseInt(filmId);
    return new Promise((resolve, reject) => {
        fetch('../src/json/films.json')
            .then(response => response.json())
            .then(data => {
                const film = data.films.find(film => film.id === filmId);
                if (film) {
                    resolve(film);
                } else {
                    reject(new Error('Película no encontrada'));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}


function loadPremieres() {
    const premieresContainer = document.getElementById('premieres');

    if (!premieresContainer) return;

    premieresContainer.innerHTML = '';

    fetch('../src/json/films.json')
        .then(response => response.json())
        .then(data => {
            data.premieres.forEach(premiere => {
                const premiereHTML = generateReleaseHTML(premiere);
                premieresContainer.innerHTML += premiereHTML;
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
}

function generateReleaseHTML(pelicula) {
    return `
        <div class="film-item">
            <div class="film-img">
                <img src="${pelicula.img}" alt="${pelicula.name}">
            </div>
        </div>
    `;
}

function generateMovieHTML(film, rol) {
    let overlayHTML = '';
    if (rol === 'admin') {
        console.log("Entering admin");
        overlayHTML = `
            <button onclick="showChooseCinemaPopUp('${film.id}')"><i class="fas fa-trash"></i>Eliminar</button>
            <a href="${film.reviewUrl}" class="button-link">
                <i class="fas fa-pencil"></i> Editar
            </a>
        `;
    } else {
        overlayHTML = `
            <button onclick="showChooseCinemaPopUp('${film.id}')"><i class="fas fa-shopping-cart"></i>Reservar</button>
            <a href="${film.reviewUrl}" class="button-link">
                <i class="fas fa-search"></i> Ver detalles
            </a>
        `;
    }

    return `
        <div class="film-item">
            <div class="film-img">
                <img src="${film.img}" alt="${film.name}">
                <div class="overlay">
                    ${overlayHTML}
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    const isAdminPage = url.includes('adminManageBillboard.html');
    if (cinemaName) {
        loadFilmsByCinema();
    } else {
        loadFilms(isAdminPage ? 'admin' : '');
    }
    loadPremieres();
});